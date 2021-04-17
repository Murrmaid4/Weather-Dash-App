var apiKey ="5a42a61d36459a24c7621ed44db87c09";
//api key for one weather api
var citySearchButton = document.querySelector("#search-button");
//this hooks into the search button from my html
var todayWeather = document.querySelector("#today")
//this hooks into my div id marked today in html
var cityHeader = document.querySelector("#cityname")
//this variable selects the html where I will be placing the data for the name of the city searched 






citySearchButton.addEventListener("click", citySearch)

//this function is what runs when the button is clicked,
function citySearch(){
    var citySearch = document.querySelector("#search-value").value;
    //this value grabs the value typed in the input box! very important
    console.log(citySearch)
    currentCityWeather(citySearch)
    //then runs this function with the value that was input in the search box
}

//this function grabs the weather of the day - along with icon, wind, humidity, and uv index 
function currentCityWeather(citySearch) {
     var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=5a42a61d36459a24c7621ed44db87c09&units=imperial";
    //this var includes our api, searched value, and api key

     fetch(cityUrl)
     //fetch retrieves the url-data from the url 
        .then(function (response) {
            //.then will run and grab response 
            return response.json()
            //this will return the response in js object notation
        }) .then(function(data) {
            // 2nd then retrieves the data that was returned in the response 
            console.log(data);

             var cityName = data.name
            //put the data for name in the city name link
            var icon = data.weather[0].icon
            var date = moment(data.dt, "X").format("MM/DD/YYYY")
             
            var lat = data.coord.lat
            var lon = data.coord.lon
            
            cityHeader.innerHTML=` ${cityName} ${date} <img src=" http://openweathermap.org/img/wn/${icon}.png">`
               
            todayWeather.append("temp:" + data.main.temp)
            todayWeather.append("Wind:" + data.wind.speed)
            todayWeather.append("Humidity:" + data.main.humidity)

            getInfo(lat, lon);
            //after the data is fetched the get info function runs, using the lat and lon parameters from the data to grab uv index info

            
        })
    
    }



    function getInfo(lat,lon) {
        var forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly&appid=5a42a61d36459a24c7621ed44db87c09&units=imperial"
       
        fetch(forecastUrl)
        //fetch retrieves the url-data from the url 
           .then(function (response) {
               //.then will run and grab response 
               return response.json()
           }) .then(function(data) {
               // 2nd then retrieves the data that was returned in the response 
               console.log(data);
              
               
                
                
               
              

              

           })



    }




    


