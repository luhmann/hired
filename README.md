![Logo](./doc/logo.png)

A simple time-tracking-application which can record the times spent on different projects and calculate the earnings
based on this.

<p align="center">
<img src="./doc/demo.gif" />
</p>

## Installation

* Ensure a node version above 7 or if you use [nvm](https://github.com/creationix/nvm),
run `nvm use` and the node-version will be picked up from `.nvrmc`
* Make sure you have [yarn](https://github.com/yarnpkg/yarn) installed
* `npm run setup` - Switches to correct node-version, installs dependencies and runs tests to ensure correct setup
* Rename `.env.sample` to `.env` and switch `REACT_APP_STORAGE_TYPE` to `localStorage` or provide valid Firebase settings
* `npm start` - Starts server and client

## Motivation

* This is a side-project which demonstrates some of my current approaches of developing and designing front-end-applications.
There is additional documentation about the decisions that were made regarding technologies, application design and architecture
in the format of [Architecture Decision Records](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) in the `docs`-folder.
Please feel free to explore.
* IMHO you get the best results in UI and UX if the people working on the app use it on a daily basis. So this is what
I use to track the time I spend on different projects.
* My preferred way of learning new technologies is constantly rewriting the same set of applications. This is one of them.

## Next steps
* Make entries editable
* Turn it into a Progressive Web App, for better offline and mobile-support
* Implement statistics
* SSR
* Prepack

## What you might wonder
* Authentication is not meant to be real as the user is logged in without any credentials right now. This
is a one user app at the moment. In production it is installed into a non-public system that employs
its own access-control, which allows for this shortcut. If this where a multi-user-app, real user-management and
a login procedure would be in place

## Credits
* Time Icon in logo created by Richard de Vos for "The Noun Project", https://thenounproject.com/term/time/6732/
