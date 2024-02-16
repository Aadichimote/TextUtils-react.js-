import React, { useState } from "react";

export default function Textbox(props) {
  const HandleUpClick = () => {
    console.log("button was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert ("Converted to Uppercase", "Sucess");
  };
  const Tolower =( ) =>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert ("Converted to Lowercase", "Sucess");
  }
  const ToClear =( ) =>{
    let newtext=" ";
    setText(newtext);
    props.showAlert ("Text claear", "Sucess");
  }
  const ToClearSpace = () => {
    let newText=text.split(/ [ ]+/);
    setText(newText.join(" "));
    props.showAlert ("Extra spaces is remove", "Sucess");
  };
  const HandleClick = (event) => {
    console.log("onchage");
    setText(event.target.value)
   
  };
 
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{Color: props.mode === `light` ? `white`:`#115579`}}> 
        <h1>{props.label}</h1>
        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea" 
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'gray',
              Color: props.mode === 'light' ? 'white' : 'white' // Adjust text color based on mode 
            }}
            
             rows={10}
            value={text}
            onChange={HandleClick}
            
          >   
          </textarea>
        </div>
        
        <button type="button" className="btn btn-primary  my-3 mx- 2]" onClick={HandleUpClick}>Convert to uppercase</button>
        
        <button type="button" className="btn btn-primary my-3 mx-2 " onClick={Tolower}>Convert to owercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2 " onClick={ToClearSpace}>clear Extra Space</button>
        <button type="button" className="btn btn-primary my-3 mx-2 " onClick={ToClear}>clear all</button>
        <h2> Some info regarding this input text ....</h2> 
        <h3>Totla alphabate is = {text.length} & Total word is = {text.split(" ").length } </h3>
        <h1>It takes</h1><h2> {0.008*text.split(" ").length} </h2><h1>Minuits to read </h1>


      </div>
    </>
  );
}
