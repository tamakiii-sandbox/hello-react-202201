import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';
import UseEffectCounter from './component/use-effect-counter';


const main = <>
  <h1>Hello world!</h1>
  <h2>Tip: Check your console</h2>
  <div>
    <h2>useState</h2>
    <Counter />
  </div>
  <div>
    <h2>useEffect()</h2>
    <UseEffectCounter />
  </div>
</>;
ReactDOM.render(main, document.querySelector('main'));
