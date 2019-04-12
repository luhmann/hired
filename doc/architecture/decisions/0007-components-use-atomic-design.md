# 7. Components use Atomic Design

Date: 04/04/2017

## Status

Accepted

## Context

* Maintaining a design system is a superior approach to keep a user interface consistent and extensible.
* Composing user-interface-elements from more basic parts is a good functional approach that is in line with Reacts own design-philosophy
* Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) is one of the more mature approaches for designing and maintaining a design system.

## Decision

We use atomic design up to the distinction between Atoms, Molecules and Organisms. Templates and Pages are conceptually less important, but can be found in our approach of having a page-component as the container for all components that need to access and manipulate the state kept in stores.

## Consequences

* Whenever you add a new component consider if its individual parts are already there as an atom or a molecule. Use those to compose new elements. Consider if there is there a preexisting element that can be easily extended to provide the additional functionality without adding to much complexity to its interface.
* If you truly need to add a new element, try to think about more potential use-cases for the functionality it provides. Think about additional types of input and their potential edge-cases.
