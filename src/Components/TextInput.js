import React, { useState } from "react";

export default function TextInput(props) {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);


  const updateText = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const updateLoText = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = '';
    setText(newText);
  };

  const removeSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    // return newText;
  }

  const copyToClipboard = () => {
    const handleCopyText = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
      } catch (error) {
        console.log("Unable to copy.", error);
      }

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };

    handleCopyText();
       
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="dv" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h1 className="my-3">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control p-3 frm " 
            value={text} style={{color: props.mode === 'light'? 'black': 'white', backgroundColor: props.mode === 'dark'? '#040015': 'white', 
            borderColor : props.mode === 'light'? 'black': 'white' }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          >
            {" "}
          </textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={updateText}>
          To UpperCase
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={updateLoText}>
          To lowercase
        </button>

          <button className="btn btn-primary my-1 mx-1" onClick={removeSpaces}>
                    Remove Extra Spaces
                  </button>

        <button
  className={isCopied ? 'btn btn-secondary my-1 mx-1' : 'btn btn-primary my-1 mx-1'}
  onClick={copyToClipboard}
>
{isCopied ? 'Copied to ClipBoard' : 'Copy to ClipBoard'}
</button>


<button className="btn btn-secondary my-1 mx-1" onClick={clearText}>
          Clear Text
        </button>


      </div>

      <div className="container mt-1" style={{color: props.mode === 'light'? 'black': 'white'}} >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} Words |{" "}
          {text.length} Characters | 
        </p>
        <p>
          It will take{" "}
          {0.008 *
            text.split(/\s+/).filter((word) => word !== "").length}{" "}
          minutes to read above paragraph.
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
