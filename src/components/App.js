import React, {Component, useState} from "react";
import "./../styles/App.css";

const App = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <button id="click" onClick={()=>{setshow(!show)}}>click</button>
      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
};
export default App;
