const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    let input = resultEl.innerHTML
    navigator.clipboard.writeText(input)
    navigator.clipboard.readText(input)
})

generateEl.addEventListener('click', () => {
    let length = lengthEl.value

    let upperCaseCheck = uppercaseEl.checked
    let lowerCaseCheck = lowercaseEl.checked
    let numberCheck = numbersEl.checked
    let symbolCheck = symbolsEl.checked

    const generateRandomPassword = generatePassword(upperCaseCheck,lowerCaseCheck,numberCheck,symbolCheck,length)
    resultEl.textContent = generateRandomPassword
})

function generatePassword(lower, upper, number, symbol, length) {
    let generateRandomNumber = ''
    let countCheck = [{lower},{upper},{number},{symbol}]
    let counterCheck = countCheck.filter(item => Object.values(item)[0])
   
    if(counterCheck.length === 0) {
        return ''
    }

    for(let i=0; i < length; i += counterCheck.length) {
        counterCheck.forEach(item => {
            const random = Object.keys(item)[0]
            generateRandomNumber = generateRandomNumber + randomFunc[random]()
        })
    }
    return generateRandomNumber.slice(0,length)
}

function getRandomLower() {
    let alphabet = ''

    for(let index = 10; index < 36; index++){
        alphabet += index.toString(36);
    }
    let alpa = alphabet[Math.floor(Math.random() * 26)]
    return alpa
}

function getRandomUpper() {
    let alphabet = ''

    for(let index = 10; index < 36; index++) {
        alphabet += index.toString(36)
    }
    let alpa = alphabet[Math.floor(Math.random() * 26)]
    return alpa.toUpperCase()
}

function getRandomNumber() {
    let number = ''
    for(let index = 0; index <= 9; index++) {
        number += index
    }
    let num = number[Math.floor(Math.random() * 10)]
    return num
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    let symbol = symbols[Math.floor(Math.random() * symbols.length)]
    return symbol
}