# 7. Container-Component Pattern

Date: 04/04/2017

## Status

Accepted

## Context

* There is a common distinction between presentational and container components in react, or simply components and containers, s. https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
* Presentational components are concerned with how things look, they do not need or maintain there own state. They just render their inputs
* Container Components are concerned with how things work. They connect to the state as in the data that is kept in stores, plus they are the only ones that mutate state.

## Decision

We are using this pattern

## Consequences

* Containers and Components are kept in their respective folders
* All components you add should follow this pattern.
