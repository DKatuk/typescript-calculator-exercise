import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter the first number:\n ");
  const operator = question("Enter the operator:\n ");
  const secondStr: string = question("Enter the second number:\n ");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  if (!validInput) {
    console.log("Invalid input");
    main(); // re-run the function until get a valid input
  } else {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result: number = calculate(firstNum, operator as Operator, secondNum);
    console.log("Result: ", result);
  }
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

function isOperator(operator: string): boolean {
  const operators = ["+", "-", "*", "/"];
  const isOp = operators.indexOf(operator) !== -1;
  return isOp;
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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
