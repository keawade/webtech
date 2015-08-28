/*
Ex3: Temperature.js
Create a file called "temperature.js", which does the following: 
1. Creates a new variable `Temperature`, which is an object with two properties:
  – toFahrenheit: A function which takes one argument: `Celsius` (a number), 
    calculates the equivalent value in Fahrenheit, and returns the Fahrenheit 
    value.
  – toCelsius: A function which takes one argument: `Fahrenheit` (a number), 
    calculates the equivalent value in Celsius, and returns the Celsius value.
2. Creates a new variable `tempToday`, and sets the value to 82. This is today's
temperature in Fahrenheit.
3. Creates a new variable `tempInCelsius`, and sets its value equal to the 
Celsius equivalent, rounded to the nearest whole number. The Celsius equivalent 
should be calculated by calling the `toFahrenheit` function property on
`Temperature`, passing it `tempToday`. Round the result by using the `Math.round()`
function.
4. Creates a new variable, `message`, and sets its value equal to a string that
is in this form: “Today's temperature is <tempToday>°F, which is 
<tempInCelsius> °C.”
5. Logs `message` to the console.
*/