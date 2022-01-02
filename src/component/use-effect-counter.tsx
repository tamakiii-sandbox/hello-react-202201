import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type State = {
  count: number;
};

class UseEffectCounter extends Component {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <>
        <p>Clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </>
    );
  }
}

export default UseEffectCounter;
