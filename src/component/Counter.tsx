import React, { useState } from 'react';
// import React from 'react';

const Counter = () => {
  const initialState = Math.floor(Math.random() * 10) + 1;
  const [count, setCount] = useState(initialState);
  return (
    <>
      <div>
        <p>
          Number is: {count}
        </p>
        <button onClick={() => { setCount(count => count - 1) }}>
          -1
        </button>
        <button onClick={() => { setCount(count => count + 1) }}>
          +1
        </button>
      </div>
    </>
  );
};

// const initialState = Math.floor(Math.random() * 10) + 1;
//
// type State = {
//   count: number;
//   open: boolean;
// }
//
// class Counter extends React.Component {
//   state: State;
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       count: initialState,
//       open: true,
//     };
//   }
//
//   toggle = () => {
//     this.setState({ open: !this.state.open });
//   }
//
//   render() {
//     return (
//       <>
//         <button onClick={this.toggle}>
//           {this.state.open ? 'close' : 'open'}
//         </button>
//         <div>
//           <p>
//             Number is: {this.state.count}
//           </p>
//           <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>
//             -1
//           </button>
//           <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
//             +1
//           </button>
//         </div>
//       </>
//     );
//   }
// }

export default Counter;
