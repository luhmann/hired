# 15. Use semantic commit messages

Date: 13/04/2017

## Status

Accepted

## Context

Clustering commit messages into pre-defined categories eases orientation when you are trying to understand commit
history

## Decision

Semantic commit messages as first described by Sparkbox are a popular approach to this idea:
https://seesparkbox.com/foundry/semantic_commit_messages. We will use them.

## Consequences

Prefix your commit messages with one of the categories introduced in the article. The format is:

feat(movement): add hat wobble
^--^   ^__^     ^------------^
|      |        |
|      |        +-> Summary in present tense.
|      |
|      +--> Add an optional overarching description to the commit, might be one of several commits, eg. Ticket-number
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
