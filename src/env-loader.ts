const NODE_ENV = process.env.NODE_ENV;
const dotenv = require("dotenv");

if (NODE_ENV) {
  console.log("*********************************");
  console.log(`     NODE_ENV: ${NODE_ENV}`);
  console.log("*********************************");

  // if enviroment is defined will search for .env.NODE_ENV
  dotenv.config({ path: `.env.${NODE_ENV.toLowerCase()}` });
} else {
  // Otherwise will load try to load the .env file
  dotenv.config();
}
