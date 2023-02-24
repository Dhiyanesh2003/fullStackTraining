import React from 'react';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    };
    console.log('constructor called');
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  handleClick = () => {
    this.setState({ count: this.state.a + this.state.b });
  }

  render() {
    console.log('render called');
    return (
      <div>
        <p>Sum: {this.state.count}</p>
        <button onClick={this.handleClick}>Add Count</button>
      </div>
    );
  }
}

export default ExampleComponent;