import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleClear = () => {
    let newText = ('');
    setText(newText);
    props.showAlert(" Text Cleared", "success");
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase", "success");
  }

  const handleReverse = (event) => {
    let textArr = text.split("");
    textArr = textArr.reverse("");
    let newText = textArr.join("");
    setText(newText);
    props.showAlert(" Text Reversed", "success");
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to Clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces Removed", "success");
  }

  const handleSenCase = () => {
    let sentence = text.split(". ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].toLowerCase().slice(1);
    }
    setText(sentence.join(". "));
    props.showAlert(" Converted to Sentence Case", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea id="myBox" className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="10" autofocus></textarea>
        </div>
        <button className='btn m-2 btn-dark' onClick={handleClear}>Clear Text</button>
        <button className='btn m-2 btn-dark' onClick={handleUpClick}>UpperCase</button>
        <button className='btn m-2 btn-dark' onClick={handleLoClick}>LowerCase</button>
        <button className='btn m-2 btn-dark' onClick={handleReverse}>Reverse Text</button>
        <button className='btn m-2 btn-dark' onClick={handleCopy}>Copy Text</button>
        <button className='btn m-2 btn-dark' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn m-2 btn-dark' onClick={handleSenCase}>Sentence Case</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.009 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  )
}
