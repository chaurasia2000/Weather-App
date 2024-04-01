const apikey = "511f5052d53ec7a7d77b99f9da941510";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
        const response = await fetch(apiURL + city + `&appid=${apikey}`)
        let data = await response.json();

        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
};

searchbtn.addEventListener("click", ()=> {
        checkWeather(searchbox.value);
});

