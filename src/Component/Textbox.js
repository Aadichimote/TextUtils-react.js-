import React, { useState } from "react";

export default function Textbox(props) {
  const HandleUpClick = () => {
    console.log("button was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const Tolower =( ) =>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const HandleClick = (event) => {
    console.log("onchage");
    setText(event.target.value)
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.label}</h1>
        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea"
            rows={10}
            value={text}
            onChange={HandleClick}
          >   
          </textarea>
        </div>
        <button className="btn" color="black" onClick={HandleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn" color="black" onClick={Tolower}>
          Convert to owercase
        </button>
        <h2> Some info regarding this input text ....</h2>
        <h3>Totla alphabate is = {text.length} & Total word is = {text.split(" ").length} </h3>
        <h1>It takes</h1><h2> {0.008*text.split(" ").length} </h2><h1>Minuits to read </h1>


      </div>
    </>
  );
}
