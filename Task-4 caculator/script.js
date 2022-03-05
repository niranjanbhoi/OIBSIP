class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let result
    const oldVal = parseFloat(this.previousOperand)
    const newVal = parseFloat(this.currentOperand)
    if (isNaN(oldVal) || isNaN(newVal)) return
    switch (this.operation) {
      case '+':
        result = oldVal + newVal
        break
      case '-':
        result = oldVal - newVal
        break
      case '*':
        result = oldVal * newVal
        break
      case '÷':
        result = oldVal / newVal
        break
      default:
        return
    }
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const strVal = number.toString()
    const intVal = parseFloat(strVal.split('.')[0])
    const pointerVal = strVal.split('.')[1]
    let intShow
    if (isNaN(intVal)) {
      intShow = ''
    } else {
      intShow = intVal.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (pointerVal != null) {
      return `${intShow}.${pointerVal}`
    } else {
      return intShow
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previousVal]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calci = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calci.appendNumber(button.innerText)
    calci.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calci.chooseOperation(button.innerText)
    calci.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calci.compute()
  calci.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calci.clear()
  calci.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calci.delete()
  calci.updateDisplay()
})