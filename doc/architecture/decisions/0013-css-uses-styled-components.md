# 10. CSS uses Styled Components

Date: 04/04/2017

## Status

Accepted

## Context

* The component based approach of React makes it pertinent to keep localized styles directly in your components to ensure
that the parts of a component are not distributed.
* This has been achieved by `CSS-in-JS`-approaches which usually have the downside that you cannot use the CSS-Syntax
you are normally used to
* [Styled Components](https://github.com/styled-components/styled-components) is a more current approach which allows
you to use standard css-syntax while keeping your styles within your components and allows you to use the full expressiveness
of Javascript to write your styles, which makes a CSS-Processor like SASS or Stylus superfluous.
* Styled Components work well with the Atomic Design approached we are using in structuring our application

## Decision

We use styled components.

## Consequences

* There should be no need for global styles outside of the few globals which are set in `src/styles/globals`. If you need
more, define them there
* Styled components use ES6-Template-Strings to their advantage, this allows you to use the full power of javascript
expressions, see https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
* We use a centralized place to keep a lot of general settings which should be consistent across our components and use
them as variables within our styled components. See `src/styles/style-utils` for what is already there
* Styled Components are not without fault. They create a pretty verbose component structure, which does not lead to
the prettiest markup. Some more advanced approaches exist like https://github.com/tuchk4/rockey, which are not very
mature yet. Keep an eye out for better solutions.
