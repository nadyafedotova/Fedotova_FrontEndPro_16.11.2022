//ДЗ 11. Виведення зображень
const changeImage = ()=>
    document.querySelector('img').src = 'images/' + Math.ceil(Math.random() * 9) + '.jpg';
changeImage();
document.querySelector('button').addEventListener('click', changeImage);

//ДЗ 12. Перехід за посиланням
const enterLink = document.getElementById('enterLink');
const forwarding = document.getElementById('forwarding');
let arrLink

enterLink.onclick = function() {
    let link = prompt("Напишіть посилання");
    let protocols = ['http', 'https']
    arrLink = link.split("://");

    let returnProtocol = protocols.includes(arrLink[0])
    if (!returnProtocol) {
        arrLink.unshift('https')
    }
    arrLink = arrLink.join('://').replace(/['"«»\[\]\s]/g,'')
}

forwarding.onclick = function() {
    location.href = arrLink;
}