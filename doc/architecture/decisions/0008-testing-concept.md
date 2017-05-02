# 8. Testing Concept

Date: 04/04/2017

## Status

Accepted

## Context

* High level selenium-driven E2E-Tests almost always have fundamental reliability problems due to their very complex setup. The Combination of having a version of the correct webdriver, a selenium-server and a local or remote testing grid makes for a lot of potential sources of error. Plus if something goes wrong in your testing software, such as Protractor, it can be notorioulsy hard to debug
* This acknowledged in the concept of the TestPyramid, https://martinfowler.com/bliki/TestPyramid.html, which advocates having a lot of unit tests, less integrative tests and only a few e2e-tests.

## Decision

We will try to avoid the complexities of a full e2e-testing-framework setup, by using a combination of many unit-tests and a some higher-level user-acceptance-tests which do not use "clicks-within-an-user-interface" but use a fully bootstrapped app, with just its external dependencies (eg. Firebase) removed and perform normal user interactions against it. We will then assert our expected state within our stores and trust that state to be rendered correctly as merited by our unit-tests.

## Consequences

* Write lots and rigorous unit-tests for your components. Note that we only use very sparse mocking for our dependencies in unit-tests. This is intentional as through this we test our code under more diverse scenarios. This should only be changed if we get too many false positives in tests due to this setup in the futurre
* Think carefully about the interactions and flows the user typically undertakes and write acceptance tests for them to ensure that the core functionalities are still working when we start changing things.
