var apiKey ="5a42a61d36459a24c7621ed44db87c09";
var citySearchButton = document.querySelector("#search-button");



function citySearch(){
    var citySearch = document.querySelector("#search-value").value;
    console.log(citySearch)
    currentCityWeather(citySearch)
}

function currentCityWeather(citySearch) {
     var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=5a42a61d36459a24c7621ed44db87c09";

     fetch(cityUrl)
        .then(function (response) {
            return response.json()
        }) .then(function(data) {
            console.log(data);
        })
    
    
    }

citySearchButton.addEventListener("click", citySearch)