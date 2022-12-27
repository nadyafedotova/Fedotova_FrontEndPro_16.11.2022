const button = document.querySelector('button');
const form = document.querySelector('#form');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    form.style.display = getComputedStyle(form).display === 'block' ? 'none' : 'block';
});

const formElement = document.getElementById('form');
formElement.addEventListener('submit',
    (e) => {
        form.style.display = 'none';
        e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target).entries());
    try {
        let html =
            'ПІБ: <b>' + formData.fullName + '</b> </br>' +
            'Місто: <b>' + formData.city + '</b> </br>' +
            'Склад Нової пошти: <b>' + formData.department + '</b> </br>' +
            'Оплата: <b>' + formData.pay + '</b> </br>' +
            'Кількість продукції: <b>' + formData.quantity + '</b> </br>' +
            'Коментар: <b>' + formData.comment + '</b> </br>';
        return result.innerHTML = html;
    } catch (e) {
        console.log(e);
        console.log(e.message);
    }
});