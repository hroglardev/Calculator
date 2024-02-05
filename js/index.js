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
      if (number2 === 0) {
        return 'Nice try'
      }
      return divide(number1, number2)
    default:
      break
  }
}

let firstNumber = ''
let secondNumber = ''
let operator = ''
let flag = false
let displayFlag = false

const display = document.querySelector('.display')
const numberButtons = Array.from(document.querySelectorAll('.number-button'))
const clear = document.querySelector('.clear-button')
const operatorButtons = Array.from(document.querySelectorAll('.operator-button'))
const equal = document.querySelector('.equal-button')

/*
1. aprieto boton => trigger update display
2. Display es 0? si, entonces display es lo que aprete
3. flag esta en FALSO actualizo primer numero
4. aprieto boton => trigger operador
5. Flag esta en falso? si, entonces limpio display, actualizo operador y flag es TRUE
6. aprieto boton => trigger update display
7. Display es 0? si, entonces display es lo que aprete
8. flag esta en TRUE actualizo segundo numero

9. aprieto boton => trigger operador
10. flag esta en true? si.
11. primer y segundo numero tienen valor? si
12. flag a falso
13. resultado operacion
14. muestro resultado en display y actualizo primer numero
15. reseteo segundo numero
16. flag a TRUE

17. aprieto boton => trigger update display
18. display es 0? No,entonces suma todo el string
 */

const updateDisplay = (pressedNumber) => {
  if (display.innerText === '0' || displayFlag) {
    display.innerText = pressedNumber
    displayFlag = false
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
  if (flag) {
    displayFlag = true
    pressEqual()
  }
  operator = pressedOperator
  flag = true
  displayFlag = true
}

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => pressOperator(button.innerText))
})

const countDecimals = (number) => {
  return number.toString().split('.')[1].length
}

const pressEqual = () => {
  if (firstNumber !== '' && secondNumber !== '') {
    flag = false
    let result = operate(+firstNumber, +secondNumber, operator)
    let hasDecimals = countDecimals(result)
    if (hasDecimals > 4) result = result.toFixed(4)
    if (result > 99999999999) result = 99999999999
    console.log(hasDecimals)
    display.innerText = result
    firstNumber = result
    secondNumber = ''
    console.log(operator)
  }
}

equal.addEventListener('click', pressEqual)
