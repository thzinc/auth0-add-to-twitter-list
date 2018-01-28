# Webhook for adding a user to a Twitter list

I wanted a webhook that I could call from [IFTTT](https://ifttt.org) to add Twitter users from a search into a list. At [.NET Fringe 2017](http://dotnetfringe.org), I got to attend an Auth0 Webtask workshop by [Glenn Block](https://twitter.com/gblock), which feels like a really nice way to handle this.

## Quickstart

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

## Code of Conduct

We are committed to fostering an open and welcoming environment. Please read our [code of conduct](CODE_OF_CONDUCT.md) before participating in or contributing to this project.

## Contributing

We welcome contributions and collaboration on this project. Please read our [contributor's guide](CONTRIBUTING.md) to understand how best to work with us.

## License and Authors

[![Daniel James logo](https://secure.gravatar.com/avatar/eaeac922b9f3cc9fd18cb9629b9e79f6.png?size=16) Daniel James](https://github.com/thzinc)

[![license](https://img.shields.io/github/license/thzinc/auth0-add-to-twitter-list.svg)](https://github.com/thzinc/auth0-add-to-twitter-list/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/thzinc/auth0-add-to-twitter-list.svg)](https://github.com/thzinc/auth0-add-to-twitter-list/graphs/contributors)

This software is made available by Daniel James under the MIT license.