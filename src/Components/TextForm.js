import React, {useState}  from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted into UpperCase","success")
    }
    const handleLoclick = ()=>{
        // console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted into LowerCase","success")
    }
    const handleClearclick = ()=>{
        // console.log("Clear was clicked"+text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
        }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been clear","success")
    }
    
    const [text, setText] = useState('');
    // setText("new Text");
    return (
        
        <>
        <div className={`container text-${props.mode==='dark'?'white':'black'}`}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Extra Space</button>
        </div>
        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} Words , {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text in the Textform above to preview it"}</p>
        </div>
        </>
    )
}
