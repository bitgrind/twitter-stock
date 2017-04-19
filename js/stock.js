var apiKey = require('./../.env').apiKeyStocks;

Stocks = function(){
  this.name_latest = "";
};

Stocks.prototype.getCompany = function(name) {
  $.get('https://api.usfundamentals.com/v1/companies/xbrl?token=' + apiKey + '&format=json')
   .then(function(response) {
     var re = new RegExp(name, "i");
     console.log(re);
     for (var i = 0; i < response.length; i++) {
      if (re.test(response[i].name_latest)) {
         console.log(response[i]);
         outputObj(response[i]);
       }
     }
  });

  var outputObj = function(obj) {
    console.log("output obj"+ obj);
    var newObj = "<div><h1>"+obj.name_latest+"</h1><h1>"+obj.company_id+"</h1></div>"
    $("#output").append(newObj);
  };
  //  .fail(function(error) {
  //    $('.showWeather').text(error.responseJSON.message);
  //  });
};

exports.stockModule = Stocks;
