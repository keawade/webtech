var App = React.createClass({
    getInitialState:function(){
        return {
            name: "Arthur Dent",
            age: "42",
            major: "Hitchhiking",
            classYears: "Graduate"
        };
    },
    updateName:function(e){
        this.setState({name: e.target.value});
    },
    updateAge:function(e){
        this.setState({age: e.target.value});
    },
    updateMajor:function(e){
        this.setState({major: e.target.value});
    },
    updateClass:function(e){
        this.setState({classYears: e.target.value});
    },
    render:function(){
        return (
            <div>
                <h1>Introduction</h1>
                <div className="col-md-3">
                    <input className="form-control" type="text" placeholder={this.state.name} onChange={this.updateName}></input>
                    <input className="form-control" type="text" placeholder={this.state.age} onChange={this.updateAge}></input>
                    <input className="form-control" type="text" placeholder={this.state.major} onChange={this.updateMajor}></input>
                    <input className="form-control" type="text" placeholder={this.state.classYears} onChange={this.updateClass}></input>
                </div>
                <p>Hello! My name is {this.state.name}. I'm {this.state.age} years old, and I am a {this.state.classYears} {this.state.major} major at Union College.</p>
            </div>
            );
    }
});

React.render(<App />, document.getElementById('introduction'));

/*
Ex1: Introduction.js
Write a program, called "introduction.js" which does the following:
1. Creates a new variable `name`, and sets its value equal to a string
containing your first and last name (e.g. Benjamin Barber).
2. Creates a new variable `age`, and sets its value equal to a number 
representing your age in years (e.g. 33).
3. Creates a new variable `major`, and sets its value equal to a string 
representing your major(s) (e.g. Computing).
4. Creates a new variable `classYears`, and sets its value equal to an array
containing the following four (4) values: "Freshman", "Sophomore", "Junior",
"Senior".
5. Creates a new variable `message`, and sets its value equal to a string that
is in this form: "Hello! My name is <NAME>. I'm <AGE> years old, and I am a 
<CLASS_YEAR> <MAJOR> at Union College." Note that <CLASS_YEAR> should refer to 
the correct array item representing your class year.
6. Logs `message` to the console. Run “introduction.js” on the server using 
Node.js. Review it’s output to ensure it is functioning correctly. Create an
“introduction.html” file which includes “introduction.js”. View the Console in
your browser’s Developer Tools to ensure that it is functioning correctly.
*/