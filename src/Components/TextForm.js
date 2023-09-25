import React, { useState } from "react";

export default function TextForm(props) {
    const handleUCClick = ()=>{
        console.log("Button Upper now clicked - " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text now changed to UpperCase','success');
        emptyText();
    }
    const handleLCclick=()=>{
        let textLC = text.toLowerCase();
        setText(textLC);
        props.showAlert('Text now changed to LowerCase','success');
        emptyText();
    }
    const handleCLclick=()=>{
        let textCL = ("");
        setText(textCL);
        props.showAlert('Text now clear','danger');
        emptyText();
    }
    const handleCBclick=()=>{
        let textCB = document.getElementById("Text-form");
        navigator.clipboard.writeText(textCB.value);
        props.showAlert('Text now copied','warning');
        emptyText();
    }
    const handleRESclick=()=>{
        let result = text.replace(/\s+/g, ' ').trim();
        setText(result);
        props.showAlert('Extra space now removed on text','primary');
        emptyText();
    }
    const handleOnChange =(event)=>{
        console.log("onchange")
        setText(event.target.value)
    }
    //EMPTY TEXT
    const emptyText = ()=>{
      if(text===""){
        props.showAlert('Kindly text somethink here','warning');
      }
    }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="Text-form" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
        <button type="button" className="btn btn-info my-2 mx-2" onClick={handleUCClick}>Convert to Upper case</button>
        <button type="button" className="btn btn-info my-2 mx-2" onClick={handleLCclick}>Convert to Lower case</button>
        <button type="button" className="btn btn-danger my-2 mx-2" onClick={handleCLclick}>Clear</button>
        <button type="button" className="btn btn-info my-2 mx-2" onClick={handleCBclick} id="myBox">Copy to clipbord</button>
        <button type="button" className="btn btn-info my-2 mx-2" onClick={handleRESclick}>Remove extra spaces</button>
      </div>
    </div>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h3>You text summary</h3>
        <p>{text.split(" ").filter(function(n) { return n !== '' }).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(function(n) { return n !== '' }).length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}
