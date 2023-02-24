import React from "react";

class Counts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};
	}

	addCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	subCount = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<>
				<div className="contai">
					<button
						className="sub"
						onClick={this.subCount}
					>
						-
					</button>
					<h1 className="count">{this.state.count}</h1>
					<button
						className="add"
						onClick={this.addCount}
					>
						+
					</button>
				</div>
			</>
		);
	}
}

export default Counts;
