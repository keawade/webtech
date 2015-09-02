var App = React.createClass({
    getInitialState:function(){
        return {
            value: 1,
            text: 1
        };
    },
    fizzbuzz:function(){
        if ( ( ( this.state.value % 3 ) == 0 ) && ( ( this.state.value % 5 ) == 0 ) ) {
            this.setState({value: this.state.value + 1});
            this.setState({text: "Fizzbuzz"});
        } else if ( ( this.state.value % 3 ) == 0 ) {
            this.setState({value: this.state.value + 1});
            this.setState({text: "Fizz"});
        } else if ( ( this.state.value % 5 ) == 0 ) {
            this.setState({value: this.state.value + 1});
            this.setState({text: "Buzz"});
        } else {
            this.setState({value: this.state.value + 1});
            this.setState({text: this.state.value});
        }
        console.log("Value: " + this.state.value);
        console.log("Text: " + this.state.text);
    },
    render:function(){
        return (
            <div>
                <h1>Fizzbuzz</h1>
                <button type="button" className="btn btn-default col-md-1" onClick={this.fizzbuzz}>{this.state.text}</button>
            </div>
        );
    }
});

React.render(<App />, document.getElementById('fizzbuzz'));

/*
Ex2: Fizzbuzz.js
Create a file called “fizzbuzz.js”, which does the following:
1. Logs the numbers from 1 to 100 to the console, but for multiples of three
(3), log “Fizz” instead of the number, and for the multiples of five (5) print
“Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”.
*/

function fizzbuzzConsole() {
    for( var i = 1 ; i < 101 ; i++ ) {
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
//fizzbuzzConsole();

/*
<ul id="fizzbuzzer" className="fa-ul">
    <li><i className="fa-li fa fa-circle-o"></i>{this.state.num}</li>
    <li><i className="fa-li fa fa-minus fa-rotate-90 fa-fw"></i>Fizz</li>
    <li><i className="fa-li fa fa-plus fa-fw"></i>Fizzbuzz</li>
    <li><i className="fa-li fa fa-minus fa-fw"></i>Buzz</li>
</ul>
*/
