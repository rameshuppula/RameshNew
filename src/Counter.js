import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decHndl = () => {
    setCount(count - 3);
  };

  const incHndl = () => {
    setCount(count + 3);
  };

  return (
    <div>
        <div className="card">
        <h1 className="heading">Counter</h1>
        <div className="all-buttons">
        <button onClick={decHndl} className='dec-button' >-</button>
        <h1 className="counts">{count}</h1>
        <button onClick={incHndl} className='inc-button' >+</button>
      </div>
        </div>
      
     
    </div>
  );
};
export default Counter;
