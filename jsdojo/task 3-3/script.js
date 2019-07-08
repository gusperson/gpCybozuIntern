
$(document).ready(function() {


var dataURL = 'https://api.openweathermap.org/data/2.5/weather?id=5391997&APPID=62a02b17d00d0e2aa2d52219fc57ea05' 
var weatherData;
var getData = function (url) {
    $.ajax({
        url: url,
        dataType: 'jsonp',
    }).done(function(data) {
        var temp = data.main.temp;
        var humidity = data.main.humidity;
        var speed = data.wind.speed;
        $('#temp').text(Math.round((temp-273)*10/10) + "°C");
        $('#weatherIcon').attr("src",("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"));
        $('#humid').text(humidity + "%");
        $('#speed').text(speed + "m/s");
    });
}

getData(dataURL);

});