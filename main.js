//ДЗ 2. Калькулятор
let operator = prompt("What action do you want to perform? (add, sub, mult, div)")
const firstNumber = parseInt(prompt('Enter first number'))
const secondNumber = parseInt(prompt('Enter second number'))

switch (operator) {
    case "add":
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
        break;
    case "sub":
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
        break;
    case "mult":
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
        break;
    case "div":
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
        break;
    default:
        alert("Sorry, you entered the wrong operator - " + operator + ".")
}



//ДЗ 3. Години в секунди
let hours = prompt("How many hours?")
let seconds = Number(hours) * 3600

alert(`${seconds} seconds in this quantity of hours`)



//ДЗ 4. Портрет користувача
let error = 'Too bad you didn\'t want to input yours ';
let dateOfBirth = prompt('What is your year of birth?')
if (dateOfBirth === null) {
    dateOfBirth = ''
    alert(error +'date of birth')
} else {
    dateOfBirth = `You are ${dateOfBirth} years old \n`
}

let city = prompt('What city do you live in?')
if (city === null) {
    city = ''
    alert(error + 'city')
}

let sport = prompt('What is your favourite sport?')
if (sport == null) {
    alert(error + 'kind of sport')
}

switch (city) {
    case "Kyiv":
        city = "You live in the capital of Ukraine \n"
        break;
    case "Washington":
        city = "You live in the capital of United States of America \n"
        break;
    case "London":
        city = "You live in the capital of England and the United Kingdom \n"
        break;
    case "":
        city = ""
        break;
    default:
        city = `You live in the city ${city} \n`
}

switch (sport) {
    case "Football":
        sport = "Cool! Do you want to become Cristiano Ronaldo?"
        break;
    case "Tennis":
        sport = "Cool! Do you want to become Carlos Alcaraz Garfia?"
        break;
    case "Fencing":
        sport = "Cool! Do you want to become Edoardo Mangiarotti?"
        break;
    default:
        sport = ''
}

if (dateOfBirth || city || sport) {
    alert(`${dateOfBirth}${city}${sport}`)
}



//ДЗ 5. switch...case
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (isNaN( +numOrStr ) || numOrStr) {
    case null:
        console.log('ви скасували')
        break;
    case '':
        console.log('Empty String');
        break;
    case true:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
}