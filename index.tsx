import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        disabled={count == 5 ? true : false}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        disabled={count == 0 ? true : false}
      >
        -
      </button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
