# 11. CSS Grid without fallbacks

Date: 13/04/2017

## Status

Accepted

## Context

* [CSS Grid Layout](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Grid_Layout) is a powerful layouting-method that
is quickly gaining widespread browser-support
* It is massively more convenient to use than other approaches
* The app currently has a very limited audience of people who are likely to all use very modern browsers, implementing
 fallbacks is costly. As we know our audience precisely we will not support older browsers.

## Decision

* We are using CSS Grid Layout were appropriate. We are not providing fallbacks for browsers that do not support this
technology.

## Consequences

* You can use CSS Grid without fallbacks
* If the audience of this project ever changes, consider employing fallbacks using [`@supports`](https://developer.mozilla.org/en/docs/Web/CSS/@supports)
