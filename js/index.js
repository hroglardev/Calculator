'use strict'

const add = (number1, number2) => number1 + number2
const substract = (number1, number2) => number1 - number2
const multiply = (number1, number2) => number1 * number2
const divide = (number1, number2) => number1 / number2

const operate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return add(number1, number2)
    case '-':
      return substract(number1, number2)
    case '*':
      return multiply(number1, number2)
    case '/':
      return divide(number1, number2)
    default:
      break
  }
}
