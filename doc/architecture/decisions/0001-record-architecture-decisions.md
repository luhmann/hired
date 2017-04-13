# 1. Record architecture decisions

Date: 26/03/2017

## Status

Accepted

## Context & Assumptions

* Documentation is a hard problem in software
* Documentation is best if it follows a simple and well defined repeatable structure to ease the burden of the developer
to reinvent the best style of documentation for this application
* Documentation is best located next to the code as opposed to in some external service (eg. Confluence) in order to
survive the frequent switches in version control or documentation systems that occur naturally in organisations
* Code Documentation should be high-level about the general design of the software system. People who inherit your
software should be offered some glimpse into your decision process and the assumptions at the time.
This is especially true if any unusual choices have been made, if you suspect that one could be surprised
by a choice you made, document it.
* Code is communication, make sure you are understood in the best way possible.


## Decision

We will use Architecture Decision Records, as described by Michael Nygard in this article: http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

## Consequences

See Michael Nygard's article, linked above.
