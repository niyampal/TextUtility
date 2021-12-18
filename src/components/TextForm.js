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
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed.", "success");
  };

  const [text, setText] = useState("Enter Text Here");
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
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button> 
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtraSpace}
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
          {" "}
          <strong> {text.split(" ").length} </strong> Words and{" "}
          <strong> {text.length} </strong> Charcters
        </p>
        <p>Time to read {0.008 * text.split(" ").length} minutes</p>
        <h1>Preview</h1>
        <pre> {text.length > 0 ? text : "Enter Something to Preview"} </pre>
      </div>
    </>
  );
}
