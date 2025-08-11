import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(' ');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleReset = () => {
    setText(" ");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText.trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
 

const handleInverse = () => {
  const newText = text.split("").reverse().join("");
  setText(newText);
};

 






  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="myBox" 
            value={text} 
            onChange={handleOnchange} 
            rows="8">
          </textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary ms-3" onClick={handleloClick}>
          Convert to toLowerCase
        </button>

        <button className="btn btn-danger ms-2" onClick={handleReset}>
          Reset
        </button>

        <button className="btn btn-warning ms-2" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-success ms-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>

        


        <button className="btn btn-secondary ms-2" onClick={handleInverse}>
  Inverse Text
</button>

      </div>

      <div className="container my-2">
        <h3 className="mt-4">Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2>PreView Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
