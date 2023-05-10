class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        if (this.isValidOperator(znak)) {
            const confirmMessage = `Ви хочете зробити операцію ${X} ${znak} ${Y}?`;
            const confirmation = confirm(confirmMessage);

            if (confirmation) {
                const result = this.calculate(X, Y, znak);
                alert(`Результат: ${result}`);
            } else {
                this.input();
            }
        } else {
            alert(`Недійсний оператор: ${znak}`);
            this.input();
        }
    }

    input() {
        const X = parseFloat(prompt("Введіть X:"));
        const Y = parseFloat(prompt("Введіть Y:"));
        const znak = prompt("Введіть оператор (+, -, *, /, %):");

        this.check({ X, Y, znak });
    }

    isValidOperator(znak) {
        const operators = ["+", "-", "*", "/", "%"];
        return operators.includes(znak);
    }

    calculate(X, Y, znak) {
        let result;

        switch (znak) {
            case "+":
                result = X + Y;
                break;
            case "-":
                result = X - Y;
                break;
            case "*":
                result = X * Y;
                break;
            case "/":
                result = X / Y;
                break;
            case "%":
                result = X % Y;
                break;
            default:
                result = NaN;
        }

        return result;
    }
}
export default SuperMath;
