# 2. Firebase

Date: 04/04/2017

## Status

Accepted

## Context

* We need a cross-device storage-solution for this project
* We want to deploy this project to a simple hosting service, like Github Pages, Now or Surge.
* We want to minimize the amount of maintenance required to run this software
* Realtime capability would be a nice touch as we could update running timers across a range of devices instantly
* This is a personal project so we are unlikely to have any issues with scaling as the number of users will probably
remain at one

## Decision

* Firebase offers a simple NoSQL-style realtime database with a suitable free-tier
* We are using Firebase

## Consequences

* Firebase data is a simple json-tree
* undefined values will not be saved
* Data should be saved in a normalized form: https://firebase.google.com/docs/database/web/structure-data
* Make sure you understand access-rights: https://firebase.google.com/docs/database/security/
* Install and use [firebase-cli](https://firebase.google.com/docs/database/web/structure-data)
