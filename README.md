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
* `npm run setup` - Switches to correct node-version, installs dependencies and runs tests
* Rename `.env.sample` to `.env` and provide valid Firebase settings
* `npm start` - Starts server and client

## Motivation

* A side-project which demonstrates some of my current approaches of developing a front-end-application, so potential
partners can get an idea of how I work. There is additional documentation about the architectural decisions that were made
for this app in the `doc`-folder in the form of "Architecture Decision Records". Please feel free to explore.
* An app that is actively used by its developer, which is in my opinion beneficial for polishing the flows and
interactions of the UI.
* A way to explore new technologies

## Next steps
* Turn it into a Progressive Web App, for better offline and mobile-support
* Implement statistics
* SSR
* Prepack

## What you might wonder
* Authentication is not meant to be real as the user is logged in without any credentials right now. This
is a one user app at the moment. In production it is installed into a non-public system that employs
its own access-control, which allows for this shortcut. If this where a multi-user-app, real user-management and
a login procedure would be in place
* Old credentials for firebase are stored in this [commit](). This is actually not a problem as these information
can

## Credits
* Time Icon in logo created by Richard de Vos for "The Noun Project", https://thenounproject.com/term/time/6732/
