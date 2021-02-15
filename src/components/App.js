import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [render,setRender] =useState(false);

  const handleClick=()=>{
    setRender(true);
  };

  const renderPara=()=>{
    if(render){
      return(
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      );
    }
  };

  return (
    <div id="main">
    <button id="click" onClick={handleClick}>Click</button>
      {renderPara()}
    </div>
  );
}


export default App;
