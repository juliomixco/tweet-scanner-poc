import { TweetAPI } from "./tweet-api";
import { config } from "./config";

const tweet = new TweetAPI(config.twitterClientConfig);
var params = { screen_name: "nodejs" };
tweet.getUserTimeLine(params);
