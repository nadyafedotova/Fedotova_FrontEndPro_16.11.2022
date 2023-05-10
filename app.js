import SuperMath from './supermath.js';

const superMath = new SuperMath();
document.getElementById('checkBtn').addEventListener('click', () => {
    const X = parseFloat(document.getElementById('inputX').value);
    const Y = parseFloat(document.getElementById('inputY').value);
    const znak = document.getElementById('inputZnak').value;

    superMath.check({ X, Y, znak });
});
