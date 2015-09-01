var Temperature = {

  toFahrenheit: function(t){
    return ( t * ( 9 / 5 ) ) + 32;
  },
  toCelsius: function(t){
    return ( t - 32 ) * ( 5 / 9 );
  }
};

var tempToday = 82;

var tempInCelsius = Math.round(Temperature.toCelsius(tempToday));

var message = "Today's temperature is " + tempToday + "°F, which is " + tempInCelsius + "°C.";

console.log(message);