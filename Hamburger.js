class Hamburger {
    static SIZE_SMALL = { price:50, calories:20 };
    static SIZE_LARGE = { price:100, calories:40 };
    static STUFFING_CHEESE = { price:10, calories:20 };
    static STUFFING_SALAD = { price:20, calories:5 };
    static STUFFING_POTATO = { price:15, calories:10 };
    static TOPPING_SPICE = { price:15, calories:0 };
    static TOPPING_MAYO = { price:20, calories:5 };

    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping (topping) {
        this.toppings.push(topping);
    }

    calculatePrice () {
        let totalPrice = this.size.price + this.stuffing.price;
        for (const topping of this.toppings) {
            totalPrice += topping.price;
        }
        return totalPrice;
    }

    calculateCalories () {
        let totalCalories = this.size.calories + this.stuffing.calories;
        for (const topping of this.toppings) {
            totalCalories += topping.calories;
        }
        return totalCalories;
    }
}

const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO);
console.log('Створення маленького гамбургера з начинкою із сиру та з добавкою майонезу')
console.log('Калорії: ' + hamburgerSmall.calculateCalories());
console.log('Ціна: ' + hamburgerSmall.calculatePrice());

hamburgerSmall.addTopping(Hamburger.TOPPING_SPICE);
console.log('Добавка приправи')
console.log('Ціна зі спеціями: ' + hamburgerSmall.calculatePrice());

console.log(' ')
console.log('Створення великого гамбургера з начинкою із салату')
const hamburgerBigSalad = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
console.log('Додавання картоплі')
hamburgerBigSalad.addTopping(Hamburger.STUFFING_POTATO);
console.log('Калорії: ' + hamburgerBigSalad.calculateCalories());
console.log('Ціна: ' + hamburgerBigSalad.calculatePrice());

console.log(' ')
console.log('Створення маленького гамбургера з начинкою із картоплі та з добавкою майонезу')
const hamburgerBigPotato = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);
hamburgerBigPotato.addTopping(Hamburger.TOPPING_MAYO);
console.log('Добавка приправи')
hamburgerBigPotato.addTopping(Hamburger.TOPPING_SPICE);
console.log('Калорії: ' + hamburgerBigPotato.calculateCalories());
console.log('Ціна: ' + hamburgerBigPotato.calculatePrice());
