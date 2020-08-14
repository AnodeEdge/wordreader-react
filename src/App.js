//Add 

import React, { useState } from "react";
import lorem from "./lorem";
import "./App.css";

function App() {
  const [textVal, setTextVal] = useState(lorem.text);
  const [speedVal, setSpeedVal] = useState(1);
  const [wordVal, setWordVal] = useState("----------");

  const calcWPM = () => {};
  const displayWord = (wordList) => {
    let i = 0;
    setInterval(() => {
      setWordVal(wordList[i]);
      i++;
    }, Math.floor(60000 / speedVal));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const wpmForm = document.getElementById("wpm_form");
    var wordList = textVal.split(" ");
    displayWord(wordList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Reader</h1>
        <textarea
          placeholder="Paste or Write the text to be read."
          style={{ fontSize: "24px" }}
          rows="8"
          cols="100"
          onChange={(evt) => {
            setTextVal(evt.target.value);
          }}
        />
        <div style={{ margin: "10px 0" }}>Speed of Word Reader (WPM)</div>
        <form id="wpm_form" onSubmit={handleSubmit}>
          <input
            id="wpm"
            min="1"
            max="600"
            form="wpm_form"
            name="wpm"
            placeholder="1-600"
            required
            style={{ fontSize: "24px" }}
            type="number"
            onChange={(evt) =>{
              setSpeedVal(evt.target.value);
            }}
          />
          <button
            id="submit"
            type="submit"
            style={{ margin: "0 0 0 10px", fontSize: "24px" }}
          >
            Submit
          </button>
        </form>
        <div>{`Speed: ${speedVal}`}</div>
        <div></div>
        <div>{wordVal}</div>
      </header>
    </div>
  );
}
export default App;

// function Other(props) {
//   const [counterVal, setCounterVal] = useState(0)
//   useEffect(() => {
//     setCounterVal(counterVal => counterVal + 1)
//   }, [props.textVal])
// return <div className="OTHER">{counterVal}</div>
// }
