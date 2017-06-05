Webhook for adding a user to a Twitter list
===========================================

I wanted a webhook that I could call from [IFTTT](https://ifttt.org) to add Twitter users from a search into a list. At [.NET Fringe 2017](http://dotnetfringe.org), I got to attend an Auth0 Webtask workshop by [Glenn Block](https://twitter.com/gblock), which feels like a really nice way to handle this.

How to use
----------

* Sign up for [Auth0 Webtasks](https://webtask.io/make)
* Grab the Webtask CLI: `npm install wt-cli -g`
* Init the Webtask CLI: `wt init`
* Create a [Twitter app](https://apps.twitter.com)
* Create a Twitter list and find its "slug" from the URL
* Copy `.secrets-template` file to `.secrets` and fill it in with your data
* Create the Webtask: `wt create -b --secrets-file .secrets .`
* Copy the URL after `You can access your webtask at the following url:` (Something like: https://wt-somethinggoeshere-0.run.webtask.io/auth0-add-to-twitter-list)
* Create an IFTTT applet with a webhook that points to the new webhook URL
    * Use the `slug` querystring parameter for the Twitter list's slug
    * Use the `user` querystring parameter for the Twitter user to add to the list
    * Example: `https://wt-somethinggoeshere-0.run.webtask.io/auth0-add-to-twitter-list?slug=net-fringe&user={{UserName}}`