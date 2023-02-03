var APIKey = "a02d36afb369ec740ca0a2c969837b0a" // Key created for this task only 
var mainQueryURL = "https://api.openweathermap.org/data/2.5/weather"+ "q=London,London" +"&appid=" + APIKey;  /* &exclude={part} wtaw po london to exclude data */

$.ajax({
    url: mainQueryURL,
    metod:"GET"
})

.then(function(response) {

    console.log(mainQueryURL);

    console.log(response);


});


