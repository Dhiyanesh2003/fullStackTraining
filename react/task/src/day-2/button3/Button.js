import React from "react";

import './css/style.css'

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 1,
			b: 2,
			c: 3,
		};
	}

    a = () => {
        this.setState({a: 2})
    }

    b = () => {
        this.setState({b: 3})
    }

    c = () => {
        this.setState({c: 4})
    }

	render() {
		return (
			<>
				<button className="bb" onClick={this.a}>A = 2</button>
                <button className="bb" onClick={this.b}>B = 3</button>
                <button className="bb" onClick={this.c}>C = 4</button>
                <h1>a^2 + b^2 + 2*a*b</h1>
                <h2>
                {this.state.a}*{this.state.a} + {this.state.b}*{this.state.b} + 2*{this.state.a}*{this.state.b} + {this.state.c} = 
                {this.state.a*this.state.a + this.state.b*this.state.b + 2*this.state.a*this.state.b + this.state.c}
                </h2>
                <h3>Default values : <br />
                    a = {this.state.a} <br />
                    b = {this.state.b} <br />
                    c = {this.state.c} <br />
                </h3>
			</>
		);
	}
}

export default Button;
