import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
};

export default UseEffectCounter;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//
// type State = {
//   count: number;
// };
//
// class UseEffectCounter extends Component {
//   state: State;
//
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//
//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//
//   render() {
//     return (
//       <>
//         <p>Clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +1
//         </button>
//         <button onClick={() => this.setState({ count: 0 })}>
//           Reset
//         </button>
//       </>
//     );
//   }
// }
//
// export default UseEffectCounter;
