var App = React.createClass({
    getInitialState: function(){
        return {
            c: 0,
            f: 32
        };
    },
    temperature: {
      toFahrenheit: function(c){
        var f = c * 9;
        f = f / 5;
        f = f + 32;
        return Math.round(f * 10) / 10;
      },
      toCelsius: function(f){
        var c = f - 32;
        c = c / 9;
        c = c * 5;
        return Math.round(c * 100) / 100;
      },
      fromKelvin: function(k){
        var c = k + 273.15;
        return c;
      }
    },
    updateC: function(e){
        this.setState({c: this.temperature.toCelsius(e.target.value)});
    },
    updateF: function(e){
        this.setState({f: this.temperature.toFahrenheit(e.target.value)});
    },
    render:function(){
        return (
            <div>
                <h1>Temperature</h1>
                <div className="col-md-3">
                    <input className="form-control" type="number" placeholder="Celsius" onChange={this.updateF}></input>
                    <input className="form-control" type="number" placeholder="Fahrenheit" onChange={this.updateC}></input>
                    <p>Temp in Celsius: {this.state.c}</p>
                    <p>Temp in Fahrenheit: {this.state.f}</p>
                </div>
            </div>
            );
    }
});

React.render(<App />, document.getElementById('temperature'));

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
is in this form: “Today's temperature is <tempToday>°F, which is <tempInCelsius> °C.”
5. Logs `message` to the console.
*/