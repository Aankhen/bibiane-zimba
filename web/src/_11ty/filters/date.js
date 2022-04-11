const { DateTime } = require("luxon");

const readableDate = _dateObj => new Date(_dateObj).toDateString();
const htmlDateString = _dateObj => DateTime.fromJSDate(_dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');

module.exports = { readableDate, htmlDateString };