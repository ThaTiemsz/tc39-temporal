# Temporal

[![NPM](https://nodeico.herokuapp.com/@thatiemsz/tc39-temporal.svg)](https://npmjs.com/package/@thatiemsz/tc39-temporal)

Polyfill for the [Temporal proposal](https://github.com/tc39/proposal-temporal) in ECMAScript. (includes TypesScript typings)

Reference documentation can be found [here](https://github.com/tc39/proposal-temporal/tree/e2349eee8a3b11e7929ea426a9f0e7a79cf10236/docs).

## Installation

Install via Node.js:
```
npm install @ThaTiemsz/tc39-temporal
```

## Usage

```js
const { Temporal } = require("temporal");

const dateTime = Temporal.now.dateTime();
dateTime.toString(); // 2020-05-15T17:52:07.534927511

const legacyDate = new Date();
const absolute = Temporal.Absolute.fromEpochMilliseconds(legacyDate.getTime());
absolute.toString(); // 2020-05-15T15:52:07.543Z

const absoluteTime = Temporal.Absolute.from("2020-01-03T10:41:51Z");
absoluteTime.toString("Asia/Tokyo"); // 2020-01-03T19:41:51+09:00[Asia/Tokyo]

const nextWeek = dateTime.plus({ days: 3 });
nextWeek.toString(); // 2020-05-22T17:52:07.534927511
```