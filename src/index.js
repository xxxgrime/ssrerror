import React from "react";
import ReactDOM from "react-dom";
import {TextBlock} from "./components/textblock/textblock"

var Timepass=(props)=>{
  return (
    <div>
    <p>Welcome to react</p>
    <TextBlock/>
    </div>
  )
}

  ReactDOM.render(<Timepass/>,document.getElementById("index"));
