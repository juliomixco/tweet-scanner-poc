import "./env-loader";

export const config = {
  twitterClientConfig: {
    consumerKey: process.env.TWITTER_API_KEY || "",
    consumerSecret: process.env.TWITTER_API_SECRET || "",
    accessTokenKey: process.env.TWITTER_ACCESS_TOKEN || "",
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
  },
};
