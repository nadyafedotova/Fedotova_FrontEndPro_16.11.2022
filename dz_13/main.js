const buttonTable = document.querySelector('button');
const formTable = document.querySelector('#form');
const result = document.getElementById('result');

buttonTable.addEventListener('click', () => {
    formTable.style.display = getComputedStyle(formTable).display === 'block' ? 'none' : 'block';
});

const formTableElement = document.getElementById('form');

formTableElement.addEventListener('submit',
    (e) => {
        formTable.style.display = 'none';
        e.preventDefault();
        const checkBoxes = document.querySelectorAll('.form-check-input:checked');
        let checkboxesChecked = [];
        for (let index = 0; index < checkBoxes.length; index++) {
            if (checkBoxes[index].checked) {
                checkboxesChecked.push(checkBoxes[index].value);
            }
        }
        const formData = new FormData(formTableElement);
        let user = {};
        user.firstName = formData.get('firstName')
        user.lastName = formData.get('lastName')
        user.dayB = formData.get('dayB');
        user.gender = formData.get('gender');
        user.city = formData.get('city');
        user.address = formData.get('address');
        user.language = checkboxesChecked.join(', ');

        let table = buildTable(user);
        result.appendChild(table);

    function buildTable(data) {
        let table = document.createElement("table");
        table.className="table";
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let headRow = document.createElement("tr");

        ["Ім'я","Прізвище","Дата народження","Стать","Місто","Адреса","Мови, якими володіє"].forEach(function(el) {
            let th=document.createElement("th");
            th.appendChild(document.createTextNode(el));
            headRow.appendChild(th);
        });

        thead.appendChild(headRow);
        table.appendChild(thead);
        let tr = document.createElement("tr");
        for (let o in data) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(data[o]))
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);

        return table;
    }
});