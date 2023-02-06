 
 var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
 var cityNames = ["London","Edinburgh"]
 var todayDate = moment().format('LLLL');
 
 

$("#search-button").on("click",function(event){
     event.preventDefault();

     

    var city = $("#search-input").val().trim(); 
    if ($("#search-input").val() == '' ) {      
        alert("Please type city name")
        var cityURL= "London"
    
        var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityURL + "&appid=" + APIKey+ "&units=metric" ;  /* &exclude={part} wtaw po london to exclude data */
     
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

});
// --------------------- Function for displaying city buttons ----------------------------------------------

        // ----------- render buttons --------------------------

        function renderButtons() {
             $("#history").empty();
            for (var i=0; i< cityNames.length; i++){
                var a = $("<li>");
                // a.addType("button");
                a.addClass("btn btn-info");
                a.attr("data-city",cityNames[i]);
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

            
             

          
          
        
       
        






/*   before test 
        $("#search-button").on("click",function(event){
            event.preventDefault();

            var city = $("#search-input").val().trim();
            cityNames.push(city);
            console.log(city)
            console.table(cityNames)
            var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey+ "&units=metric" ;
            localStorage.setItem(city, mainQueryURL );        
                  
            renderButtons();
           
           

        });    

// test --- to be removed 

function populateStorage() {
    var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a02d36afb369ec740ca0a2c969837b0a&units=metric"
    localStorage.setItem(London, mainQueryURL ); 
    //var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a02d36afb369ec740ca0a2c969837b0a&units=metric"
    //localStorage.setItem(Edinburgh, "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a02d36afb369ec740ca0a2c969837b0a&units=metric"  ); 
    
}
// --- test end */












