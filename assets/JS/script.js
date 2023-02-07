 
 var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
 var cityNames = []         // test point: ["London","Edinburgh","Szczecin"]; 
 var todayDate = moment().format('LLLL');
 console.log(todayDate) // test point: 
 
// search function  

$("#search-button").on("click",function(event){
     event.preventDefault();

     

    var city = $("#search-input").val().trim(); 
    if ($("#search-input").val() == '' ) {      
        alert("Please type city name")
        var cityURL= "London"
    
        var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityURL + "&appid=" + APIKey+ "&units=metric" ;  
     
    }
    
           
        
    else {       

        cityNames.push(city);
        console.log(city)
        console.table(cityNames)
        var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey+ "&units=metric" ;
        localStorage.setItem(city, mainQueryURL );   
        renderButtons(); 
    } 

     





 
 $.ajax({
    url: mainQueryURL,    
    metod:"GET"   
    

}).then(function(weatherForecast) {
    

    console.log(mainQueryURL);
    
    console.log(weatherForecast);

    // ------------------- current day section ------------- //
   
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

   

     // -----------------  5 day forecast - secondary API -------------------------------------------------------------------------------------------------------------------------    
        var lat = weatherForecast.coord.lat;
        var lon = weatherForecast.coord.lon;
        var secondaryQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly&appid=" + APIKey+ "&units=metric&dt&exclude=daily";
        console.log(secondaryQueryURL)

        
        $.ajax({
            url: secondaryQueryURL,    
            metod:"GET"   
            
        
        }).then(function(weatherForecast) {
            console.log(weatherForecast);

           

            $(".future-date1").html("<div>"+ weatherForecast.list[4].dt_txt +"</div>");//main.temp
            var ficonID = weatherForecast.list[4].weather[0].icon;
            // test point:  console.log(ficonID)
            ficonSrc = "http://openweathermap.org/img/wn/"+ ficonID +"@2x.png " //dynamic icon src
             // test point:  console.log(ficonSrc)
             $("img.daily-weather-icon1").attr("src", ficonSrc) // passing attribute of an image into html
             $(".daily-temperature1").html("<h3>"+ "Temperature: " + weatherForecast.list[4].main.temp + " 'C" + "</h3>");
             $(".daily-humidity1").html("<div>" + "Humidity: " +  weatherForecast.list[4].main.humidity + " % " +  "</div>")
             $(".daily-wind1").html("<div>" + "Wind Speed: " + weatherForecast.list[4].wind.speed + " KPH " + "<div>")
            
             
             $(".future-date2").html("<div>"+ weatherForecast.list[12].dt_txt +"</div>");//main.temp
            var ficonID = weatherForecast.list[12].weather[0].icon;
            // test point:  console.log(ficonID)
            ficonSrc = "http://openweathermap.org/img/wn/"+ ficonID +"@2x.png " //dynamic icon src
             // test point:  console.log(ficonSrc)
             $("img.daily-weather-icon2").attr("src", ficonSrc) // passing attribute of an image into html
             $(".daily-temperature2").html("<h3>"+ "Temperature: " + weatherForecast.list[12].main.temp + " 'C" + "</h3>");
             $(".daily-humidity2").html("<div>" + "Humidity: " +  weatherForecast.list[12].main.humidity + " % " +  "</div>")
             $(".daily-wind2").html("<div>" + "Wind Speed: " + weatherForecast.list[12].wind.speed + " KPH " + "<div>")
            
             $(".future-date3").html("<div>"+ weatherForecast.list[20].dt_txt +"</div>");//main.temp
             var ficonID = weatherForecast.list[20].weather[0].icon;
             // test point:  console.log(ficonID)
             ficonSrc = "http://openweathermap.org/img/wn/"+ ficonID +"@2x.png " //dynamic icon src
              // test point:  console.log(ficonSrc)
              $("img.daily-weather-icon3").attr("src", ficonSrc) // passing attribute of an image into html
              $(".daily-temperature3").html("<h3>"+ "Temperature: " + weatherForecast.list[20].main.temp + " 'C" + "</h3>");
              $(".daily-humidity3").html("<div>" + "Humidity: " +  weatherForecast.list[20].main.humidity + " % " +  "</div>")
              $(".daily-wind3").html("<div>" + "Wind Speed: " + weatherForecast.list[20].wind.speed + " KPH " + "<div>")
            
              $(".future-date4").html("<div>"+ weatherForecast.list[28].dt_txt +"</div>");//main.temp
              var ficonID = weatherForecast.list[28].weather[0].icon;
              // test point:  console.log(ficonID)
              ficonSrc = "http://openweathermap.org/img/wn/"+ ficonID +"@2x.png " //dynamic icon src
               // test point:  console.log(ficonSrc)
               $("img.daily-weather-icon4").attr("src", ficonSrc) // passing attribute of an image into html
               $(".daily-temperature4").html("<h3>"+ "Temperature: " + weatherForecast.list[28].main.temp + " 'C" + "</h3>");
               $(".daily-humidity4").html("<div>" + "Humidity: " +  weatherForecast.list[28].main.humidity + " % " +  "</div>")
               $(".daily-wind4").html("<div>" + "Wind Speed: " + weatherForecast.list[28].wind.speed + " KPH " + "<div>")
            
               $(".future-date5").html("<div>"+ weatherForecast.list[36].dt_txt +"</div>");//main.temp
               var ficonID = weatherForecast.list[36].weather[0].icon;
               // test point:  console.log(ficonID)
               ficonSrc = "http://openweathermap.org/img/wn/"+ ficonID +"@2x.png " //dynamic icon src
                // test point:  console.log(ficonSrc)
                $("img.daily-weather-icon5").attr("src", ficonSrc) // passing attribute of an image into html
                $(".daily-temperature5").html("<h3>"+ "Temperature: " + weatherForecast.list[36].main.temp + " 'C" + "</h3>");
                $(".daily-humidity5").html("<div>" + "Humidity: " +  weatherForecast.list[36].main.humidity + " % " +  "</div>")
                $(".daily-wind5").html("<div>" + "Wind Speed: " + weatherForecast.list[36].wind.speed + " KPH " + "<div>")
            
         
              
            

        });

     // -----------------  5 day forecast API end ------------------------------------------------------------------------------------------------------------------------- 

}); /* ------- main query ends */


});

// --------------------- Function for displaying city buttons ----------------------------------------------

        // ----------- render buttons --------------------------

        function renderButtons() {
             $("#history").empty();
            for (var i=0; i< cityNames.length; i++){
                var a = $("<li>");                
                
                a.addClass("btn btn-info");
                a.attr("data-city",cityNames[i]);
                // a.attr('onclick','function')
                a.text(cityNames[i]);
                $("#history").append(a) // adding buttons to search history

            }
        } 
        
        
        // Delete button function 

        function deleteSearchItems() {            
            localStorage.clear(); //clear local storage 
            $("#history").empty(); // remove city buttons
            location.reload();    // reload/refresh page         
        }

        renderButtons(); // --------   render buttons end          
             

          
          
      
       
        


















