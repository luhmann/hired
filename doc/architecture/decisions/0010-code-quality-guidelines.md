# 9. Code Quality Guidelines

Date: 04/04/2017

## Status

Accepted

## Context

* The code should be of the same writing style and structure in order to reduce complexity coming from different
approaches and styles some developers might prefer.
* The code should be tested using static code analysis to highlight potential problems.
* The code should be tested thoroughly, this should be tracked by using code coverage tools

## Decision

* The code MUST compile when committed to VCS
* The code MUST pass the linter
* Code coverage MUST not fall under a certain percentage

## Consequences

* A pre-commit hook is implemented that runs the build and linter before allowing a commit in the projects repository
* Code Coverage will be tracked in CI
