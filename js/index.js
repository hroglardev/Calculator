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

let firstNumber = ''
let secondNumber = ''
let operator = ''
let flag = false

const display = document.querySelector('.display')
const numberButtons = Array.from(document.querySelectorAll('.number-button'))
const clear = document.querySelector('.clear-button')
const operatorButtons = Array.from(document.querySelectorAll('.operator-button'))
const equal = document.querySelector('.equal-button')

const updateDisplay = (pressedNumber) => {
  if (display.innerText === '0') {
    display.innerText = pressedNumber
  } else {
    display.innerText += pressedNumber
  }

  if (!flag) {
    firstNumber += pressedNumber
  } else {
    secondNumber += pressedNumber
  }
}

const clearDisplay = () => {
  display.innerText = '0'
  flag = false
}

const clearValues = () => {
  clearDisplay()
  firstNumber = ''
  secondNumber = ''
  operator = ''
}

clear.addEventListener('click', clearValues)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => updateDisplay(button.innerText))
})

const pressOperator = (pressedOperator) => {
  if (!flag) {
    clearDisplay()
    operator = pressedOperator
    flag = true
  }
}

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => pressOperator(button.innerText))
})

const pressEqual = () => {
  if (firstNumber !== '' && secondNumber !== '') {
    flag = false
    let result = operate(+firstNumber, +secondNumber, operator)
    display.innerText = result
    firstNumber = result
    secondNumber = ''
    console.log(firstNumber)
  }
}

equal.addEventListener('click', pressEqual)
