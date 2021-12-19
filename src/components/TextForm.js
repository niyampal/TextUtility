import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("btn Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.", "success");
  };
  const handleOnChange = (event) => {
    //console.log("btn Onchange clicked");
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared.", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied.", "success");
    document.getSelection().removeAllRanges();
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed.", "success");
  };

  let pText = "Enter Text Here"
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            id="myTextArea"
            style={{
              backgroundColor: props.mode === "dark" ? "#003d6e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            placeholder={pText}
            onChange={handleOnChange}
            rows="4"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-info mx-2 my-1"
          onClick={handleUpClick}
          disabled={text.length===0}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
          disabled={text.length===0}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-1"
          onClick={handleClearClick}
          disabled={text.length===0}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-1"
          onClick={handleCopy}
          disabled={text.length===0}
        >
          Copy Text
        </button> 
        <button
          type="button"
          className="btn btn-warning mx-2 my-1"
          onClick={handleRemoveExtraSpace}
          disabled={text.length===0}
        >
          Remove Extra Spaces
        </button>        
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <strong> {text.split(/\s+/).filter((arrElement)=>{return arrElement.length!==0 }).length} </strong> Words and
          <strong> {text.length} </strong> Charcters
        </p>
        <p>Time to read {0.008 * text.split(" ").filter((arrElement)=>{return arrElement.length!==0 }).length} minutes</p>
        <h1>Preview</h1>
        <pre> {text.length > 0 ? text : "Nothing to Preview"} </pre>
      </div>
    </>
  );
}
