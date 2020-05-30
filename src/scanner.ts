var Twitter = require("twitter");
import { config } from "./config";

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret,
});

var params = { screen_name: "nodejs" };
client.get("statuses/user_timeline", params, function (
  error,
  tweets,
  response
) {
  if (!error) {
    console.log(tweets);
  }
});
