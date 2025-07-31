

function naira() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseFloat(firstNum.value)
    const secondActualNumber = parseFloat(secondNum.value)

    let finalAnswer = firstActualNumber * secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function Yen() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseFloat(firstNum.value)
    const secondActualNumber = parseFloat(secondNum.value)

    let finalAnswer = firstActualNumber * secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function KRW() {
    const firstNum = document.getElementById("num1")
    const secondNum = document.getElementById("num2")
    const output = document.getElementById("output")

    const firstActualNumber = parseFloat(firstNum.value)
    const secondActualNumber = parseFloat(secondNum.value)

    let finalAnswer = firstActualNumber * secondActualNumber

    console.log(finalAnswer)

    output.textContent = finalAnswer.toString()
    return finalAnswer

}

function darkMode() {
    document.body.style.background = ' rgb(49, 48, 48)'
}

function lightMode() {
    document.body.style.background = ` linear-gradient(to right, green, white)`
}




