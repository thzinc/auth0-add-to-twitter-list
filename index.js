'use latest';
import Twitter from 'twitter';

module.exports = (ctx, cb) => {
  const client = new Twitter({
    consumer_key: ctx.secrets.TWITTER_CONSUMER_KEY,
    consumer_secret: ctx.secrets.TWITTER_CONSUMER_SECRET,
    access_token_key: ctx.secrets.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: ctx.secrets.TWITTER_ACCESS_TOKEN_SECRET
  });

  client.post('lists/members/create', {
      slug: ctx.data.slug,
      owner_screen_name: ctx.secrets.TWITTER_SCREEN_NAME,
      screen_name: ctx.data.user,
  }, cb)
};
