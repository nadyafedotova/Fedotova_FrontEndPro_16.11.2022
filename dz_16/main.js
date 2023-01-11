let city;
let hide = document.getElementById("rowWeather")
const znak = ['overcast clouds','clear sky','few clouds','scattered clouds','broken clouds','shower rain','rain','thunderstorm','snow','mist','thunderstorm with light rain','thunderstorm with rain','thunderstorm with heavy rain','light thunderstorm','thunderstorm','heavy thunderstorm','ragged thunderstorm','thunderstorm with light drizzle','thunderstorm with drizzle','thunderstorm with heavy drizzle','light intensity drizzle','drizzle','heavy intensity drizzle','light intensity drizzle rain','drizzle rain','heavy intensity drizzle rain','shower rain and drizzle','heavy shower rain and drizzle','shower drizzle','light rain','moderate rain','heavy intensity rain','very heavy rain','extreme rain','freezing rain','light intensity shower rain','shower rain','heavy intensity shower rain','ragged shower rain','light snow','Snow','Heavy snow','Sleet','Light shower sleet','Shower sleet','Light rain and snow','Rain and snow','Light shower snow','Shower snow','Heavy shower snow'];
const znakUA = ['Затяжна хмарність','Чисте небо','Невелика хмарність','Мінлива хмарність','Хмарність','Зливовий дощ','Дощ','Гроза','Сніг','Туман','Гроза з невеликим дощем','Гроза з дощем','гроза з сильним дощем','Легка гроза','Гроза','Сильна гроза','Місцями гроза','гроза з легким дощем','гроза з дощем, що мрячить','гроза, сильно дрібний дощ','Слабка мряка','Мряка','Сильна мряка','Слабо дрібний дощ','дрібний дощ','Сильна мряка','Короткочасні зливи, мряка','Проливний короткочасний дощ, мряка','Щільна мряка','Невеликий дощ','Помірний дощ','Сильний дощ','Дуже сильний дощ','Злива','Крижаний дощ','Помірний дощ','Проливний дощ','Сильна злива','Змінний злива','Легкий снігопад','Сніг','Сильний снігопад','Мокрий сніг','невеликий дощ зі снігом','Сльота, дощ зі снігом','Легкий змінний дощ/ сніг','дощ зі снігом','невеликий снігопад','Безперервний снігопад','Рясний снігопад'];

$('#city').on('click', function(){
    city = document.getElementById("cities").value
    hide.style.display = "block"
    getWeather()
});


const $tempText = $("#temp-text");
const $windText = $("#wind-text");
const $windText2 = $("#wind-text2");
const $windText3 = $("#wind-text3");
const $windText4 = $("#wind-text4");
const $degText = $("#deg-text");

function formatTemperature(cels) {
    if (cels > 0) {
        $("#temp-text").css("color", "red");
    } else {
        $("#temp-text").css("color", "blue");
    }
    $tempText.html(cels);
}

function dataHandler(data) {
    formatTemperature(data.main.temp);
    if (data.main.temp && data.sys) {
        if (data.weather) {
            const imgURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            $("#weatherImg").attr("src", imgURL);
            let k = znak.indexOf(data.weather[0].description);
            $("#weather-text").text(znakUA[k]);
        }
        if (data.wind) {
            const knots = data.wind.speed;
            $windText.html(knots.toFixed(1) + " М/С");
            const knots2 = data.wind.speed * 1.9438445;
            $windText2.html(knots2.toFixed(1) + " Вузлів");
        }
        if (data.main) {
            let mm = (data.main.pressure * 0.75006).toFixed(0);
            $windText3.html(mm + " мм.рт.ст.");
        }
        if (data.main) {
            let hum3 = data.main.humidity;
            $windText4.html(hum3 + " %");
        }

        if (data.main) {
            let hum3 = data.main.humidity;
            $degText.html(hum3 + "°");
        }
    }
}

function getWeather() {
    const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    return $.ajax({
        url: apiURI,
        dataType: "jsonp",
        type: "GET",
        async: "true",
        timeout : 800,
        success : function(data) {
            console.log("Success");
        },
        error : function(e) {
            console.log("Error");
            hide.style.display = "none"
        },
        done : function(e) {
            console.log("DONE");
        },
    }).done(dataHandler);
}