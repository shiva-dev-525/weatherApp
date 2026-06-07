const apikey ="aa1052f470804b564e99da16f1d577d7"
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.querySelector("#search-input");
const prov = document.querySelector(".prov");
console.log(prov)
console.log(cityName)
console.log(searchBox)
console.log(searchButton)


async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        prov.style.display="none"
    } else{
          var data = await response.json();
   
    console.log("Hello")

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sunny.png";
    } else if(data.weather[0].main == "rain"){
        weatherIcon.src = "heavy-rain.png "
    }  else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "drizzle.png "
    }  else if(data.weather[0].main == "mist"){
        weatherIcon.src = "=mist.png "
    }  else if(data.weather[0].main == "rain"){
        weatherIcon.src = "heavy-rain.png "
    }  else if(data.weather[0].main == "snow"){
        weatherIcon.src = "snow.png "
    } 

     document.querySelector(".weather").style.display ="block"
     document.querySelector(".error").style.display = "none"
     // document.querySelector(".weather").style.display = "none"
    prov.style.display="none";
    }   
}

searchButton.addEventListener("click",()=>{
    let value = cityName.value.trim()
    if(value ===""){
        // alert("please provide a city name");
        prov.style.display = "block"
        document.querySelector(".weather").style.display = "none"
        document.querySelector(".error").style.display = "none"
    }
    checkweather(searchBox.value);
    console.log(searchBox.value)
});
