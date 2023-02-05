 var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
 var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?"+ "q=London,London&appid=" + APIKey+ "&units=metric";  /* &exclude={part} wtaw po london to exclude data */

 var cityNames = ["London","Edinburgh"]

var todayDate = moment().format('LLLL');




$.ajax({
    url: mainQueryURL,    
    metod:"GET",   
    

})

.then(function(weatherForecast) {

    console.log(mainQueryURL);
    
    console.log(weatherForecast);

    // ------------------- current day sectoion ------------- //
   
    $(".date").html("<span>"+ todayDate + "</span>");
    console.log(todayDate)
    $(".city").html("<h1>"+ weatherForecast.name + "</h1>");

     // ------------- dynamic weather icon ------------------ //
    var iconID = weatherForecast.weather[0].icon;
    // test point:  console.log(iconID) 
    iconSrc = "http://openweathermap.org/img/wn/"+ iconID +"@2x.png " //dynamic icon src
    // test point:  console.log(iconSrc) 
    $("img").attr("src", iconSrc) // passing attribute of an image into html
  
    
    $(".temperature").html("<h3>"+ "Temperature: " + weatherForecast.main.temp + " 'C" + "</h3>");
    $(".humidity").html("<div>" + "Humidity: " +  weatherForecast.main.humidity + " % " +  "</div>")
    $(".wind").html("<div>" + "Wind Speed: " + weatherForecast.wind.speed + " KPH " + "<div>")
    
    // ------------------ current day section end -------------- // 

    $(".sub-container").each(function(){
            
            
        var futureDate = moment().add(1,'d').format('LLLL')
        console.log(futureDate)
        console.table(futureDate)
        // console.log(futureDate._d) test point if not formated 

        $(".future-date").html("<div>"  + futureDate + "</div>") //  futureDate._d if futureDate not formated
    });

      

});




    // ------------------- 5 day forecast sectoion ------------- //

        var citylat = weatherForecast.coord.lat ;
        var citylon = weatherForecast.coord.lon;


        var dailyQueryURL = "api.openweathermap.org/data/2.5/forecast?lat=" + citylat +"&lon=" + citylon + "&appid=" + APIKey + "&units=metric"; 
        console.log(dailyQueryURL)

        $.ajax({
            url: dailyQueryURL,    
            metod:"GET",        
            
        
        })

        .then(function(dailyForecast) {

            console.log(mainQueryURL);
            
            console.log(dailyForecast); 



       

    });

// -------------------------------  5day forecast end





















