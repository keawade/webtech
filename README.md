# webtech

This repo is for the Advanced Web Tech class at Union College.

## Homework 1

### Ex1: Introduction.js
Write a program, called "introduction.js" which does the following:

1. Creates a new variable `name`, and sets its value equal to a string containing your first and last name (e.g. Benjamin Barber).
2. Creates a new variable `age`, and sets its value equal to a number representing your age in years (e.g. 33).
3. Creates a new variable `major`, and sets its value equal to a string representing your major(s) (e.g. Computing).
4. Creates a new variable `classYears`, and sets its value equal to an array containing the following four (4) values: "Freshman", "Sophomore", "Junior", "Senior".
5. Creates a new variable `message`, and sets its value equal to a string that is in this form: "Hello! My name is <NAME>. I'm <AGE> years old, and I am a <CLASS_YEAR> <MAJOR> at Union College." Note that <CLASS_YEAR> should refer to the correct array item representing your class year.
6. Logs `message` to the console. Run “introduction.js” on the server using Node.js. Review it’s output to ensure it is functioning correctly. Create an “introduction.html” file which includes “introduction.js”. View the Console in your browser’s Developer Tools to ensure that it is functioning correctly.

### Ex2: Fizzbuzz.js
Create a file called “fizzbuzz.js”, which does the following:

1. Logs the numbers from 1 to 100 to the console, but for multiples of three (3), log “Fizz” instead of the number, and for the multiples of five (5) print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”.

### Ex3: Temperature.js
Create a file called "temperature.js", which does the following:

1. Creates a new variable `Temperature`, which is an object with two properties:
  * toFahrenheit: A function which takes one argument: `Celsius` (a number), calculates the equivalent value in Fahrenheit, and returns the Fahrenheit value.
  * toCelsius: A function which takes one argument: `Fahrenheit` (a number), calculates the equivalent value in Celsius, and returns the Celsius value.
2. Creates a new variable `tempToday`, and sets the value to 82. This is today's temperature in Fahrenheit.
3. Creates a new variable `tempInCelsius`, and sets its value equal to the Celsius equivalent, rounded to the nearest whole number. The Celsius equivalent should be calculated by calling the `toFahrenheit` function property on `Temperature`, passing it `tempToday`. Round the result by using the `Math.round()` function.
4. Creates a new variable, `message`, and sets its value equal to a string that is in this form: “Today's temperature is <tempToday>°F, which is <tempInCelsius> °C.”
5. Logs `message` to the console.