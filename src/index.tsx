import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';

const main = <>
  <h1>Hello world!</h1>
  <h2>Tip: Check your console</h2>
  <Counter />
</>;
ReactDOM.render(main, document.querySelector('main'));
