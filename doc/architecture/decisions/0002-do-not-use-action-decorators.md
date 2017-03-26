# 2. Do not use @action-decorators

Date: 26/03/2017

## Status

Accepted

## Context

* Jest is the standard test-setup for a project created with `create-react-app-ts`. We do not want to eject
    in order to benefit from updates to the whole stack in the future and not have to do this on our own.
    (Even though updates seem to be much less frequent than to the official `create-react-app`)
* We also want to use Jest because of Snapshot Testing
* Jest can only run its tests in a node- or jsdom-environment. @see
    https://github.com/facebook/jest/issues/848
* The action-decorator seems to have issues when the code is run in a jsdom-environment. Error is
    `TypeError: Object.defineProperty called on non-object`. This seems to be a known issue and (sensibly)
    won't be fixed until Decorators have stabilized. @see https://github.com/mobxjs/mobx/issues/655
* Most mobx-projects right now seem to rely on test-setups other than Jest.

## Decision

We want to stay with Jest, so do not use the `@action`-decorator for now.

Revisit this if you have to adapt your code in more significant ways just for testing.

## Consequences

Bind the actions in the constructor of your stores like this:

```js
constructor() {
    this.showProjectList = action(this.showProjectList)
    this.showProject = action(this.showProject)
    this.showNewProject = action(this.showNewProject)
    this.setLoaded = action(this.setLoaded)
    this.setError = action(this.setError)
}
```
