var App = React.createClass({
    getInitialState:function(){
        return {
            num: 0
        };
    },
    fizzbuzz:function(){
        this.setState({num: this.state.num + 1});
    },
    fizzbuzz5:function(){
        for (var i = 0; i < 5; i++) {
            this.setState({num: this.state.num + 1});
        }
    },
    fizzbuzz10:function(){
        for (var i = 0; i < 10; i++) {
            this.setState({num: this.state.num + 1});
        }
    },
    fizzbuzz100:function(){
        for (var i = 0; i < 100; i++) {
            this.setState({num: this.state.num + 1});
        }
    },
    render:function(){
        return (
            <div>
                <h1>Fizzbuzz</h1>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default" placeholder={this.state.name} onClick={this.fizzbuzz}>1</button>
                    <button type="button" className="btn btn-default" placeholder={this.state.name} onClick={this.fizzbuzz5}>5</button>
                    <button type="button" className="btn btn-default" placeholder={this.state.name} onClick={this.fizzbuzz10}>10</button>
                    <button type="button" className="btn btn-default" placeholder={this.state.name} onClick={this.fizzbuzz100}>100</button>
                </div>
                <ul id="fizzbuzzer" className="fa-ul">
                    <li><i className="fa-li fa fa-circle-o"></i>{this.state.num}</li>
                    <li><i className="fa-li fa fa-minus fa-rotate-90 fa-fw"></i>Fizz</li>
                    <li><i className="fa-li fa fa-plus fa-fw"></i>Fizzbuzz</li>
                    <li><i className="fa-li fa fa-minus fa-fw"></i>Buzz</li>
                </ul>
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