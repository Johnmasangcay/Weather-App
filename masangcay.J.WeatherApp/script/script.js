let url = "https://api.openweathermap.org/data/2.5/weather?q=&units=imperial&appid=fd4685a4d7e698248812adf913910c4a";
let newUrl = "https://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&appid=99649a8b829f6ea98a24e0ef1fd6b301";
let place = document.getElementById("place"),
    temp = document.getElementById("temp"),
    temp_min = document.getElementById("temp_min"),
    temp_max = document.getElementById("temp_max"),
    feels_like = document.getElementById("feels_like"),
    speed = document.getElementById("speed"),
    deg = document.getElementById("deg"),
    search = document.getElementById("search"),
    btn = document.getElementById("btn"),
    img2 = document.getElementById("img2"),
    img = document.getElementById("img"),
    favBtn = document.getElementById("favBtn"),
    delBtn = document.getElementById("delBtn"),
    inject = document.getElementById("inject"),
    offcanvasRight = document.getElementById("offcanvasRight"),
    forecastDate = document.getElementById("forecastDate"),
    forecastDOW = document.getElementById("forecastDOW"),
    forecastMiddayTemp = document.getElementById("forecastMiddayTemp"),
    forecastDescription = document.getElementById("forecastDescription"),
    forecastIcon = document.getElementById("forecastIcon"),
    forecastDateDay2 = document.getElementById("forecastDateday2"),
    forecastDOWDay2 = document.getElementById("forecastDOWday2"),
    forecastMiddayTempDay2 = document.getElementById("forecastMiddayTempday2"),
    forecastDescriptionDay2 = document.getElementById("forecastDescriptionday2"),
    forecastIconDay2 = document.getElementById("forecastIconDay2"),
    forecastDateDay3 = document.getElementById("forecastDateDay3"),
    forecastDOWDay3 = document.getElementById("forecastDOWDay3"),
    forecastMiddayTempDay3 = document.getElementById("forecastMiddayTempDay3"),
    forecastDescriptionDay3 = document.getElementById("forecastDescriptionDay3"),
    forecastIconDay3 = document.getElementById("forecastIconDay3"),
    forecastDateDay4 = document.getElementById("forecastDateDay4"),
    forecastDOWDay4 = document.getElementById("forecastDOWDay4"),
    forecastMiddayTempDay4 = document.getElementById("forecastMiddayTempDay4"),
    forecastDescriptionDay4 = document.getElementById("forecastDescriptionDay4"),
    forecastIconDay4 = document.getElementById("forecastIconDay4"),
    forecastDateDay5 = document.getElementById("forecastDateDay5"),
    forecastDOWDay5 = document.getElementById("forecastDOWDay5"),
    forecastMiddayTempDay5 = document.getElementById("forecastMiddayTempDay5"),
    forecastDescriptionDay5 = document.getElementById("forecastDescriptionDay5"),
    forecastIconDay5 = document.getElementById("forecastIconDay5");
    
    
    
let favArr = [];
let weatherArr = [];
let searchedCity = "";
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



function fetchForecast(newUrl){
    fetch(newUrl)
    .then(resp => resp.json())
    .then(forecastData => {
        getForecast(forecastData)
    })
}

function getForecast(fiveDayForecast){
    console.log(fiveDayForecast);
    // ------------------------------------------------------------------------------------------------------------- day 1
    forecastIcon.src = `http://openweathermap.org/img/wn/${fiveDayForecast.list[3].weather[0].icon}@2x.png`;
    let d = new Date(fiveDayForecast.list[3].dt_txt);
    let dayName = days[d.getDay()];
    forecastMiddayTemp.innerText = Math.round(fiveDayForecast.list[3].main.temp) + "°F";
    forecastDate.innerText = fiveDayForecast.list[3].dt_txt;
    forecastDOW.innerText = dayName;
    forecastDescription.innerText = fiveDayForecast.list[3].weather[0].description;
    // ------------------------------------------------------------------------------------------------------------- day 2
    forecastIconDay2.src = `http://openweathermap.org/img/wn/${fiveDayForecast.list[13].weather[0].icon}@2x.png`;
    let d2 = new Date(fiveDayForecast.list[11].dt_txt);
    let dayName2 = days[d2.getDay()];
    forecastMiddayTempDay2.innerText = Math.round(fiveDayForecast.list[11].main.temp) + "°F";
    forecastDateDay2.innerText = fiveDayForecast.list[11].dt_txt;
    forecastDOWDay2.innerText = dayName2;
    forecastDescriptionDay2.innerText = fiveDayForecast.list[11].weather[0].description;
     // ------------------------------------------------------------------------------------------------------------- day 3
    forecastIconDay3.src = `http://openweathermap.org/img/wn/${fiveDayForecast.list[19].weather[0].icon}@2x.png`;
    let d3 = new Date(fiveDayForecast.list[19].dt_txt);
    let dayName3 = days[d3.getDay()];
    forecastMiddayTempDay3.innerText = Math.round(fiveDayForecast.list[19].main.temp) + "°F";
    forecastDateDay3.innerText = fiveDayForecast.list[19].dt_txt;
    forecastDOWDay3.innerText = dayName3;
    forecastDescriptionDay3.innerText = fiveDayForecast.list[19].weather[0].description;
     // ------------------------------------------------------------------------------------------------------------- day 4
    forecastIconDay4.src = `http://openweathermap.org/img/wn/${fiveDayForecast.list[27].weather[0].icon}@2x.png`;
    let d4 = new Date(fiveDayForecast.list[27].dt_txt);
    let dayName4 = days[d4.getDay()];
    forecastMiddayTempDay4.innerText = Math.round(fiveDayForecast.list[27].main.temp) + "°F";
    forecastDateDay4.innerText = fiveDayForecast.list[27].dt_txt;
    forecastDOWDay4.innerText = dayName4;
    forecastDescriptionDay4.innerText = fiveDayForecast.list[27].weather[0].description;
     // ------------------------------------------------------------------------------------------------------------- day 5
    forecastIconDay5.src = `http://openweathermap.org/img/wn/${fiveDayForecast.list[35].weather[0].icon}@2x.png`;
    let d5 = new Date(fiveDayForecast.list[35].dt_txt);
    let dayName5 = days[d5.getDay()];
    forecastMiddayTempDay5.innerText = Math.round(fiveDayForecast.list[35].main.temp) + "°F";
    forecastDateDay5.innerText = fiveDayForecast.list[35].dt_txt;
    forecastDOWDay5.innerText = dayName5;
    forecastDescriptionDay5.innerText = fiveDayForecast.list[35].weather[0].description; 

}
fetchForecast(newUrl);


favData = JSON.parse(localStorage.getItem("favWeather"))
if (favData && favData != null) {
    favArr = favData;
    for (let i = 0; i < favData.length; i++) {
        if (i == 0) {
            fetchWeather(favData[i].url);

            let colDiv = document.createElement("div");
            colDiv.classList = "col";
            let pTag = document.createElement("p");
            pTag.innerText = favData[i].name;
            pTag.addEventListener("click", function (e) {
                fetchWeather(favData[i].url);
            })
            colDiv.appendChild(pTag);
            inject.appendChild(colDiv);
        } else {
            let colDiv = document.createElement("div");
            colDiv.classList = "col";
            let pTag = document.createElement("p");
            pTag.innerText = favData[i].name;
            pTag.addEventListener("click", function (e) {
                fetchWeather(favData[i].url);              
            })

            colDiv.appendChild(pTag);
            inject.appendChild(colDiv);
        }
    }

}

delBtn.addEventListener("click", function(){
    for(let i =0; i<favArr.length; i++){
        if(place.innerText.toLowerCase() == favArr[i].name.toLowerCase()){
            favArr.splice(i,1)
        }
    }  
    localStorage.setItem("favWeather", JSON.stringify(favArr));
    createFavItems(favArr);
});

favBtn.addEventListener("click", function (e) {

    let object = {
        name: weatherArr[weatherArr.length - 1].name,
        url: `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=fd4685a4d7e698248812adf913910c4a`
    }
    favArr.push(object);
    let colDiv = document.createElement("div");
    colDiv.classList = "col";
    let pTag = document.createElement("p");
    pTag.innerText = object.name;
    pTag.addEventListener("click", function (e) {  
        fetchWeather(object.url);
    });
    console.log(pTag.innerText)
    colDiv.appendChild(pTag);
    inject.appendChild(colDiv);

    localStorage.setItem("favWeather", JSON.stringify(favArr))
    if(object.name == object.name){
       
    }
    alert("You've added " + object.name + " to Favorite");
})

function fetchWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            getWeather(data);
        })
}

function createFavItems(data){
    inject.innerText = "";
    for(let i =0; i < data.length; i++){
        let colDiv = document.createElement("div");
        colDiv.classList = "col";
        let pTag = document.createElement("p");
        pTag.innerText = data[i].name;
        pTag.addEventListener('click', function () {
            fetchWeather(data[i].url);
        })
        colDiv.appendChild(pTag);
        inject.appendChild(colDiv)
    }
}


function getWeather(weatherData) {
    console.log(weatherData)
    let description = weatherData.weather[0].description;
    weatherArr.push(weatherData);
    console.log(weatherArr);
    let main = weatherData.main;
    place.innerText = weatherData.name;
    temp.innerText = Math.round(main.temp) + "°F";
    temp_min.innerText = ":" + " " + Math.round(main.temp_min);
    temp_max.innerText = ":" + " " + Math.round(main.temp_max);
    feels_like.innerText = Math.round(main.feels_like);
    // speed.innerText = ":" + " " + weatherData.wind.speed;
    // deg.innerText = ":" + " " + weatherData.wind.deg;

    if (description == "clear sky") {
        img.src = "../images/sun.png";
      
    } else if (description == "scattered clouds") {
        img.src = "../images/scattered-thunderstorms.png";
        
    } else if (description == "few clouds") {
        img.src = "../images/cloudy (2).png";
        
    } else if (description == "broken clouds") {
        img.src = "../images/cloudy (2).png";
      
    } else if (description == "shower rain") {
        img.src = "../images/weather.png";
   
    } else if (description == "rain") {
        img.src = "../images/rain.png";
       
    } else if (description == "thunderstorm") {
        img.src = "../images/storm.png";
   
    } else if (description == "snow") {
        img.src = "../images/snowflakes.png";
     
    } else if (description == "mist") {
        img.src = "../images/mist.png";
       
    }

}
search.addEventListener("keypress", function (e) {
    console.log(e)
    if (e.key == "Enter") {
        fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=imperial&appid=fd4685a4d7e698248812adf913910c4a`);
        fetchForecast(`https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&units=imperial&appid=99649a8b829f6ea98a24e0ef1fd6b301`);
        searchedCity = search.value;
    }
})
btn.addEventListener("click", function (e) {
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=imperial&appid=fd4685a4d7e698248812adf913910c4a`);
    fetchForecast(`https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&units=imperial&appid=99649a8b829f6ea98a24e0ef1fd6b301`);
    searchedCity = search.value;
});

fetchWeather(url);