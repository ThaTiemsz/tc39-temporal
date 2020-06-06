const { Temporal } = require("../index");

const dateTime = Temporal.now.dateTime();
console.log(dateTime.toString());

const legacyDate = new Date();
const absolute = Temporal.Absolute.fromEpochMilliseconds(legacyDate.getTime());
console.log(absolute.toString());

const absoluteTime = Temporal.Absolute.from("2020-01-03T10:41:51Z");
console.log(absoluteTime.toString("Asia/Tokyo"));

const nextWeek = dateTime.plus({ days: 7 });
console.log(nextWeek.toString());