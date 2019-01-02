var moment = require('moment');


var someTimeStamp = moment().valueOf()
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);

/*
date.add(100, 'years').subtract(9, 'months');
console.log(date.format("MMM Do, YYYY"))

*/

console.log(date.format('h:mm a'));
