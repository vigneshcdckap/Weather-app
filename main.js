let cityLabel = document.querySelector(".city_name");
let weatherLabel = document.querySelector(".weather");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".windSpeed");
let cloud = document.querySelector(".cloud");
let background = document.getElementById("background");
let searchInput = document.getElementById("bar_sesrch");
let button=document.getElementById("btn")

// console.log(searchInput);

let apiKey = "1ac41d822f470089588e62f6ac6cbdce";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

btn.addEventListener("click", function () {
    let cityName = searchInput.value;
    // console.log(cityName);

    if (cityName) {
        checkWeather(cityName);
    }
});

function checkWeather(city) {
    fetch(`${apiUrl}&appid=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            cityLabel.textContent = data.name;
            weatherLabel.textContent = `${data.main.temp} °C`;

            let weatherCondition = data.weather[0].main;
            cloud.textContent = weatherCondition;
            humidity.innerHTML = `<i class="fa-solid fa-droplet icon"></i> `+`<br>`+data.main.humidity +" %";
            windSpeed.innerHTML =` <i class="fa-solid fa-cloud-bolt icon"></i> `+`<br>`+data.wind.speed + "m/s" ;

            if (data.main.temp > 26) {

                background.style.backgroundImage = 'url("Bg-1.webp")';
                cityLabel.classList.remove("label");
                cityLabel.classList.add(".hi");
                weatherLabel.classList.remove("label");
                weatherLabel.classList.add(".hi");
                humidity.classList.remove("label");
                humidity.classList.add(".hi");
                windSpeed.classList.remove("label");
                windSpeed.classList.add(".hi");
                cloud.classList.remove("label");
                cloud.classList.add(".hi");


            } else if (data.main.temp < 20) {
                background.style.backgroundImage = 'url("Bg-3.webp")';
                cityLabel.classList.remove(".hi");
                cityLabel.classList.add("label");
                weatherLabel.classList.remove(".hi");
                weatherLabel.classList.add("label");
                humidity.classList.remove(".hi");
                humidity.classList.add("label");
                windSpeed.classList.remove(".hi");
                windSpeed.classList.add("label");
                cloud.classList.remove(".hi");
                cloud.classList.add("label");
            }

            else {
                background.style.backgroundImage = 'url("Bg-2.webp")';
                cityLabel.classList.remove(".hi");
                cityLabel.classList.add("label");
                weatherLabel.classList.remove(".hi");
                weatherLabel.classList.add("label");
                humidity.classList.remove(".hi");
                humidity.classList.add("label");
                windSpeed.classList.remove(".hi");
                windSpeed.classList.add("label");
                cloud.classList.remove(".hi");
                cloud.classList.add("label");
            }
            // console.log(data.main.temp);
            // console.log(data);
            // console.log(weatherCondition);
        })
}
