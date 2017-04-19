var Stocks = require('./../js/stock.js').stockModule;

$(document).ready(function() {
  $("#stockClick").click(function(){
    var stockName = $(".stockName").val();
    console.log("Click name: "+ stockName);
    var currentStockObj = new Stocks();
    currentStockObj.getCompany(stockName);
  });

  // $('#weatherLocation').click(function() {
  //   var city = $('#location').val();
  //   $('#location').val("");
  //   currentWeatherObject.getHumidity(city, displayHumidity);
  //   currentWeatherObject.getTemp(city, displayTempK);
  // });
});
