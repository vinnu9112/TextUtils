import React, { useState } from "react";

export default function TextForm(props) {
  function countWords(text){
    let wc = text.split(" ").length;
    text.split(" ").forEach((word) => {
        if(!word.length){
            wc -= 1;  
        }
    });

    return wc;
}

  function countLetters(text){
    let lc = 0;
    text.split(" ").forEach((word) => {
      lc += word.length;
  });
    return lc;
}

  const handleUpClick = () => {
    // console.log("Uppercase was Clicked")
    let newText = text.toUpperCase();
    setText(newText); //important to call variable 'text' like this
    props.showAlert('Converted to Upper Case', 'success');
  };
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); //important to call variable 'text' like this
    props.showAlert('Converted to Lower Case', 'success');
  };
  
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to the Clipboard!', 'success');
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);  //regex 
    setText(newText.join(" "));
    props.showAlert('Cleared Extra Spaces', 'success');
  };
  
  const clearClick = () => {
    let newText = " ";
    setText(newText); //important to call variable 'text' like this
    props.showAlert('Cleared!', 'success');
  };

  const handleOnChange = (e) => {
    // console.log('On change')
    setText(e.target.value); // to change the value which we received
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className={`container my-2 text-${props.mode ==='dark'?'light':'dark'}`}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{color: props.mode ==='dark'?'white':'black' ,backgroundColor: props.mode ==='dark'?'#13466e':'white'}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>
          Clear Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={clearClick} >
          Clear
        </button>
      </div>
      <div className={`container my-2 text-${props.mode ==='dark'?'light':'dark'} `}>
        <h2>Text Summary</h2>
        <p>
          {countWords(text)} words and {countLetters(text)} letters
        </p>
        <p>
          Average Time Taken to Read This is {0.008 * countWords(text)}{" "}
          Minutes
        </p>
      </div>
      <div className={`container my-2 text-${props.mode ==='dark'?'light':'dark'}`}>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview!'}</p>
      </div>
    </>
  );
}
 