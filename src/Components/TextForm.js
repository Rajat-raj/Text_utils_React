import React, { useState } from "react";

export default function TextForm(props) {
    const handleUCClick = ()=>{
        console.log("Button Upper now clicked - " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLCclick=()=>{
        let textLC = text.toLowerCase();
        setText(textLC);
    }
    const handleCLclick=()=>{
        let textCL = ("");
        setText(textCL);
    }
    const handleCBclick=()=>{
        let textCB = document.getElementById("Text-form");
        navigator.clipboard.writeText(textCB.value);
    }
    const handleRESclick=()=>{
        let result = text.replace(/\s+/g, ' ').trim();
        setText(result);
    }
    const handleOnChange =(event)=>{
        console.log("onchange")
        setText(event.target.value)
    }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} id="Text-form" rows="8"></textarea>
        <button type="button" className="btn btn-primary my-2" onClick={handleUCClick}>Convert to Upper case</button>
        <button type="button" className="btn btn-info mx-2" onClick={handleLCclick}>Convert to Lower case</button>
        <button type="button" className="btn btn-danger mx-2" onClick={handleCLclick}>Clear</button>
        <button type="button" className="btn btn-info mx-2" onClick={handleCBclick} id="myBox">Copy to clipbord</button>
        <button type="button" className="btn btn-info mx-2" onClick={handleRESclick}>Remove extra spaces</button>
      </div>
    </div>
    <div>
        <h3>You text summary</h3>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}
