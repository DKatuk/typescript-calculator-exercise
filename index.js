"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number:\n ");
    var operator = (0, readline_sync_1.question)("Enter the operator:\n ");
    var secondStr = (0, readline_sync_1.question)("Enter the second number:\n ");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (!validInput) {
        console.log("Invalid input");
        main(); // rerun the function until get a valid input
    }
    else {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("Result: ", result);
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    var operators = ["+", "-", "*", "/"];
    var isOp = operators.indexOf(operator) !== -1;
    return isOp;
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
main();
