 
 var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
 
 var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,London&appid=" + APIKey+ "&units=metric" ;  /* &exclude={part} wtaw po london to exclude data */

 var cityNames = ["London","Edinburgh"]

 var todayDate = moment().format('LLLL');

 $.ajax({
    url: mainQueryURL,    
    metod:"GET"   
    

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

    

        for (let day = 1; ; day++) {          
            
        var futureDate = moment().add(day,'d').format('LLLL') 
        // console.log(futureDate)     

        
                if (day === 5){
                return;
            
            }
             $(".future-date").html("<div>"  + futureDate + "</div>") //  futureDate._d if futureDate not formated
        };
        
        // console.log(futureDate._d) test point if not formated       

}); /* ------- main query brackets */


// --------------------- Function for displaying city buttons ----------------------------------------------

        // ----------- render buttons --------------------------

        function renderButtons() {
            $("#history").empty();
            for (var i=0; i< cityNames.length; i++){
                var a = $("<li>");
                // a.addType("button");
                a.addClass("btn btn-info");
                a.attr("data-name",cityNames[i]);
                a.text(cityNames[i]);
                $("#history").append(a) // adding buttons to search history

            }
        } // --------   render buttons end


        $("#search-button").on("click",function(event){
            event.preventDefault();

            var city = $("#search-input").val().trim();
            cityNames.push(city);
            console.table(cityNames)
            
            renderButtons();

        });


        $("#search-button").on("click",".city",weatherForecast);
        renderButtons();





















