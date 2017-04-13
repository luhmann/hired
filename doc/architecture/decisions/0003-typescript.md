# 3. Typescript

Date: 04/04/2017

## Status

Accepted

## Context

* We want to use modern features of Javascript. Right now only the newest versions of major browsers support most of
that feature set. We want to support older browsers so we are going to need some kind of javascript pre-processor.
* The argument for having a typed-language is not so much the prevention of bugs (that agument is actually not as
clear-cut as seems to be common wisdom https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3),
but about developer-experience. Having a compiler of the quality that typescript offers, allows us to use better
code-completion and refactoring features which eases the developers work.
* Typed interfaces are a good idea when using with a component-architecture as you can have a much more clear-cut
contract of what kind of input the component accepts and is able to process, especially when you develop components
in isolation for re-usability. React has realized this with the concept of `PropTypes`. Typescript allows us to use
a more terse and formal approach for this.
* MobX and its ecosystem have good typescript-support.
* 100% of developers on this project are interested in using Typescript with the react-ecosystem

## Decision

* If we need to use a pre-processor anyway we can use Typescript

## Consequences

* Provide types for the external interfaces of your react components and whereever Typescript cannot infer them
* Typescript extends Javascript primarily with features that further an OOP-style of coding. React is more inspired by
a functional style. When in doubt lean towards patterns from functional programming which are perfectly possible with
Typescript as it is, what a React developer will likely expect
* Testing is usually harder with Typescript if you want traditional, isolated unit-tests with completely mocked
dependencies. Typescript does not offer an individual, mature framework to adress these issues as other typed languages
do. The most promising one is [Typemoq](https://github.com/florinn/typemoq), which at the time of writing has problems
with nested dependencies. We will adress this by using a broader definition a unit in this project. See Testing Concept
