/*
Ex2: Fizzbuzz.js
Create a file called “fizzbuzz.js”, which does the following:
1. Logs the numbers from 1 to 100 to the console, but for multiples of three 
(3), log “Fizz” instead of the number, and for the multiples of five (5) print
“Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”.
*/

function fizzbuzz() {
    for( var i = 1 ; i < 16 ; i++ ) {
        if ( ( ( i % 3 ) == 0 ) && ( ( i % 5 ) == 0 ) ) {
            console.log("FizzBuzz");
        } else if ( ( i % 3 ) == 0 ) {
            console.log("Fizz");
        } else if ( ( i % 5 ) == 0 ) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();