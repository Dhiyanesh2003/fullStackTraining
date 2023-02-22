import React from "react";

// class constructor

class Circle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			r: 2,
			b: 3,
			h: 5,
			pi: 3.14,
		};
	}
    
    changePi = () => {
        this.setState({pi: "5"});
    };

	render() {
		return (
			<>
				<button onClick={this.changePi}>Click Here</button>
				<h1>{this.state.pi * this.state.r}</h1>
			</>
		);
	}
}

// function constructor

// function Circle(props) {
// 	var a = parseInt(props.a);
//     var b = parseInt(props.b);
// 	return (
// 		<h1>{a+b}</h1>
// 	);
// }

export default Circle;


// 3 buttons and big formula and change value with those buttons