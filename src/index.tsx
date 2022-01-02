import React from 'react';
import ReactDOM from 'react-dom';

const initialState = Math.floor(Math.random() * 10) + 1;

type State = {
  count: number;
  open: boolean;
}

class Counter extends React.Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      count: initialState,
      open: true,
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>
          {this.state.open ? 'close' : 'open'}
        </button>
        <div>
          <p>
            Number is: {this.state.count}
          </p>
          <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>
            -1
          </button>
          <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
            +1
          </button>
        </div>
      </>
    );
  }
}

const main = <>
  <h1>Hello world!</h1>
  <h2>Tip: Check your console</h2>
  <Counter />
</>;
ReactDOM.render(main, document.querySelector('main'));
