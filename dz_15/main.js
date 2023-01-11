function sendID(){
    document.getElementById("responceComment").style.display = "none";
    localStorage.removeItem('id');
    const id = document.getElementById("id").value;
    const error = document.getElementById("err");
    if (id > 100 || id < 1) {
        error.innerHTML = 'Значення не відповідає заданому діапазону';
    } else {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        localStorage.setItem("id", id);
        fetch(url)
            .then(response => response.json())
            .then(json => document.getElementById("post").innerHTML = JSON.stringify(json))
            .catch((err) => {
                console.log('Щось пішло не так');
            });
        document.getElementById("comment").style.display = "block";
    }
}

function comment(){
    document.getElementById("responceComment").style.display = "block";
    var id = +localStorage.getItem("id");
    let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
        .then(response => response.json())
        .then(json => document.getElementById("responceComment").innerHTML = JSON.stringify(json))
        .catch((err) => {
            console.log('Щось пішло не так');
        });
    document.getElementById("comment").style.display = "none";
}