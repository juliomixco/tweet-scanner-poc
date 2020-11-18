import * as Twitter from "twitter";
import { ITweetAPIConfig } from "./interfaces/tweet";

export class TweetAPI {
  private tweetClient: Twitter;

  constructor(config: ITweetAPIConfig) {
    this.tweetClient = new Twitter({
      consumer_key: config.consumerKey,
      consumer_secret: config.consumerSecret,
      access_token_key: config.accessTokenKey,
      access_token_secret: config.accessTokenSecret,
    });
  }

  getUserTimeLine(params) {
    this.tweetClient.get("statuses/user_timeline", params, function (
      error,
      tweets,
      response
    ) {
      if (!error) {
        console.log(tweets);
      }
    });
  }
}
