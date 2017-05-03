# 16. Why the app is ejected

Date: 03/05/2017

## Status

Accepted

## Context

* All popular frontend frameworks nowadays include a cli-tool to bootstrap new projects. Usually the config is
sequestered into an npm-module which hides the complexity of the general setup.
* Most of these tools also support the idea of "ejecting" the app, which means pulling the configuration up to the main
app
* It is usual beneficial to not eject the app, as you can benefit from updates and improvements which are undertaken
by the maintainers of the cli-tool
* This app was created with [`create-react-app-typescript`](https://github.com/wmonk/create-react-app-typescript)
* Unejected this cli-tool did not support custom configuration for Jest through `package.json` and did not use the
main-project `tsconfig.json` during tests (this point has since been mitigated)

## Decision

We eject the app. We have since tuned the setup in further little things.

## Consequences

Keep an eye on the general development of the project, if it gains in features so much that all issues are resolved,
it might be beneficial to undo the eject.
