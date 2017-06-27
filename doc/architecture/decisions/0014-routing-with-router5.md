# 14. Routing with router5

Date: 13/04/2017

## Status

Accepted

## Context

* The most canonical answer on how to solve routing in the react-world is [react-router](https://github.com/ReactTraining/react-router).
* React Router's internal logic is kind of averse to how MobX allows us to structure our application, as the router acts
as a second state-management-mechanism. This is to be expected because in traditional approaches state management
had close relationships to routing. In this logic, whenever the url changes, the router mounts the components,
which changes the state within the stores.
* Contrary to this model mobX would see the url-change as a side-effect of a state-change. The url should be derived
form the state, for more information, see: https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37
* Decoupling the whole routing logic and having the state within the stores as the canonical source of truth is an
appealing proposition and should at least be tested.
* However changing and reacting to the browsers history should be handled by a library to avoid the problems of re-implementing this basic and quite complex logic yourself.

## Decision

* We are keeping the current view as state within the UiStore
* Whenever the user navigates we update the current view within the UiStore and the UI is updated as consequence of
this state change
* Displaying a different url for the current view is a side-effect which will be computed from the state within the UiStore
* We will use [`router5`](https://github.com/router5/router5/) for managing the browser-history and reacting
to direct url-manipulation

## Consequences

* `router5` is not as well supported as we would like, keep an eye on this
