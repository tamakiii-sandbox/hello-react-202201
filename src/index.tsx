import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';

type State = {
  count: number;
};

class EffectClass extends Component {
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

const main = <>
  <h1>Hello world!</h1>
  <h2>Tip: Check your console</h2>
  <div>
    <h2>useState</h2>
    <Counter />
  </div>
  <div>
    <h2>useEffect()</h2>
    <EffectClass />
  </div>
</>;
ReactDOM.render(main, document.querySelector('main'));
