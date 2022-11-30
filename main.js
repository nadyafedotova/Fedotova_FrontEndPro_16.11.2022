//ДЗ 6. Складніші цикли
//1.
for (let i=20; i <= 30; i=i+0.5) {
    console.log(i)
}

//2.
for(let i = 10; i <= 100; i+= 10) {
    console.log(i, i * 27)
}

//3.
let n = 4
for (let i = 1; i <= 100; i++) {
    let sq = Math.pow(n, 2)
    if (i > sq) {
        continue;
    }
    console.log(i);
}

//4.
let int = parseInt(prompt('Введіть ціле число'))
let check = true
for (let i = 2; i < int; i++) {
    if (int % i === 0) {
        check = false
        break
    }
}

if (check && int > 1) {
    alert('число ' + int + ' - просте');
} else if(!isNaN(int)) {
    alert( 'число ' + int + ' - непросте');
}

//5.
let number = parseInt(prompt('Введіть число'))
if (number !== 0) {
    while (number % 3 === 0) {
        number /= 3;
    }
}
alert((number === 1) ? 'можна отримати' : "не можна отримати")


//ДЗ 7. Масив
let length = parseInt(prompt('Введіть довжину массиву'))
let arr = [];

if (!isNaN(length) && length !== 0) {
    for(let i=0; i < length; i++) {
        typeof (arr[i] = prompt('Введіть ' + `${i+1}` + 'й елемент массиву')) == 'string' || arr[i].length === 0
    }
    const arrayASC = (arr) => arr.sort((a, b) => a - b)
    arrayASC(arr)
    alert(arr)

    const arrRemove = (arr) => arr.splice(1, 3)
    arrRemove(arr)
    alert(arr)
}


//ДЗ 8. Рахунки користувачів
let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

const filteredArray = users.filter((e)=> parseFloat(e.balance.replace(/[$,]/g, "")) > 2000)
    .reduce((obj, e) => {
        obj[e.index] = e.phone;
        return obj.filter(Boolean);
    }, []);
console.log('filter', filteredArray)

const initialValue = 0;
const sumWAllBalances = users.reduce(
    (accumulator, currentValue) => accumulator + parseFloat(currentValue.balance.replace(/[$,]/g, "")), initialValue
);
console.log('sumWAllBalances', sumWAllBalances.toFixed(2))


//ДЗ 9. Реалізуйте функцію generateKey
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(len, characters) {
    let result = '';
    for(let i=0;i<len;i++) {
        result += characters[Math.round(Math.random()*(characters.length-1))];
    }
    return result;
}