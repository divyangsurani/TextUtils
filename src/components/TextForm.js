import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

    const convertToSentenceCase = () => {
        let newText = text.toLowerCase();
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText);
        props.showAlert("Converted to sentence case!", "success");
    };

    const encodeToBase64 = () => {
        let encodedText = btoa(text);
        setText(encodedText);
        props.showAlert("Encoded to Base64!", "success");
    };

    const extractNumbers = () => {
        let numbers = text.match(/\d+/g);
        let newText = numbers ? numbers.join(' ') : 'No numbers found';
        setText(newText);
        props.showAlert("Numbers extracted!", "success");
    };

    const extractLinks = () => {
        let links = text.match(/(https?:\/\/[^\s]+)/g);
        let newText = links ? links.join('\n') : 'No links found';
        setText(newText);
        props.showAlert("Links extracted!", "success");
    };

    const extractText = () => {
        // Example: Extracting text between parentheses
        let extractedText = text.match(/\(([^)]+)\)/g);
        let newText = extractedText ? extractedText.join('\n') : 'No text found';
        setText(newText);
        props.showAlert("Text extracted!", "success");
    };

  const listenNow = () => {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }
    };

    const removeWhiteSpace = () => {
        let newText = text.replace(/\s/g, "");
        setText(newText);
        props.showAlert("White spaces removed!", "success");
    };

    const removeSpecialCharacters = () => {
        let newText = text.replace(/[^\w\s]/gi, '');
        setText(newText);
        props.showAlert("Special characters removed!", "success");
    };

    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text reversed!", "success");
    };

    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
        
    const handleStartListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onstart = () => {
            console.log('Listening started...');
            setListening(true);
        };

        recognition.onresult = (event) => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            setText(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
            setListening(false);
        };

        recognition.onend = () => {
            console.log('Listening stopped.');
            setListening(false);
        };

        recognition.start();
        setRecognition(recognition);
    };

    const handleStopListening = () => {
        if (recognition) {
            recognition.stop();
        }
    };  
    

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1  >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '' : 'white', color: props.mode === 'dark' ? '  ' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={convertToSentenceCase}>Convert to Sentence Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={encodeToBase64}>Encode to Base64</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={extractNumbers}>Extract Numbers</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={extractLinks}>Extract Links</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={extractText}>Extract Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={listenNow}>Listen Now</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={removeWhiteSpace}>Remove White Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={removeSpecialCharacters}>Remove Special Characters</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 hover-scale-105" onClick={reverseText}>Reverse Text</button>
                {listening ? (
                    <button     className="btn btn-danger mx-1 my-1" onClick={handleStopListening}>Stop Listening</button>
                ) : (
                    <button className="btn btn-primary mx-1 my-1" onClick={handleStartListening}>Start Listening</button>
                )}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                <br /><br /><br />
            </div>
        </>
    );
}
