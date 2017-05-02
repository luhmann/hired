# 12. How to organize stores

Date: 13/04/2017

## Status

Accepted

## Context

The general layout of stores is a major design-decision in MobX- or Redux-apps, which may greatly differ depending on
how a developer draws distinctions within the problem-domain of the App. This makes a slightly formalized approach
on how to structure the stores convenient.

## Decision

We provide some very general outlines for store-organization in this ADR.

## Consequences

* The root-store should be contain all other stores
* All stores should keep an internal relation to the root-store to allow inter-store communication
* Make a distinction between state that is going to be persisted in storage (in our case Firebase) and state that is
ephemeral like the result of certain UI-interactions or navigation. Keep persistent state in a store that is conceptually
separate from other entities within our business-domain. If ephemeral state is so complex that it merits its own store,
keep it there (eg. routing), otherwise use the existing UI-Store to keep it.
* The root-store is the entity that should be passed to containers further down, as it is provided within the
injector-mechanism of `mobx-react`. Do change this approach if pertinent

