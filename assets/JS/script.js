var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
 var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?"+ "q=London,London&appid=" + APIKey+ "&units=metric";  /* &exclude={part} wtaw po london to exclude data */
// var mainQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid="+APIKey+"&units=metric";
// var cityName = 


var todayDate = moment().format('LLLL');

$.ajax({
    url: mainQueryURL,
    metod:"GET"
})

.then(function(weatherForecast) {

    console.log(mainQueryURL);
    console.log(weatherForecast);

      
    $(".date").html("<span>"+ todayDate + "</span>");
    $(".city").html("<h1>"+ weatherForecast.name + "</h1>");

     //$(".weather-icon").html("<svg>"+ weatherForecast.data+ "</svg>");



   
    $(".temperature").html("<h3>"+ "Temperature: " + weatherForecast.main.temp + " 'C" + "</h3>");
    $(".humidity").html("<div>" + "Humidity: " +  weatherForecast.main.humidity + " % " +  "</div>")
    $(".wind").html("<div>" + "Wind Speed: " + weatherForecast.wind.speed + " KPH " + "<div>")
    


});


