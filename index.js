"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    console.log(firstStr, operator, secondStr);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean(isNaN(maybeNum));
    console.log(isNum);
    return isNum;
}
isNumber('12');
main();
