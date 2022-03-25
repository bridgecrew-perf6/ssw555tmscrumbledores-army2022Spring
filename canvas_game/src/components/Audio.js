import React from "react";
import "./Audio.css";

const Audio = (props) => {
  let audio1 = null;
  let audio2 = null;
  if (props.musicType === 1) {
    audio1 = require("../static_data/music/Calming/1.mp3");
    audio2 = require("../static_data/music/Calming/2.mp3");
  } else if (props.musicType === 2) {
    audio1 = require("../static_data/music/Instruments/1.mp3");
    audio2 = require("../static_data/music/Instruments/2.mp3");
  } else if (props.musicType === 3) {
    audio1 = require("../static_data/music/Nature/1.mp3");
    audio2 = require("../static_data/music/Nature/2.mp3");
  } else if (props.musicType === 4) {
    audio1 = require("../static_data/music/TimeAlone/1.mp3");
    audio2 = require("../static_data/music/TimeAlone/2.mp3");
  }

// const [showResultsCalming, setShowResultsCalming] = React.useState(false)
// const onClickCalming = () => setShowResultsCalming(true)


// const [showResultsInstrument, setShowResultsInstrument] = React.useState(false)
// const onClickInstrument = () => setShowResultsInstrument(true)

const Calming = () => (
  <div id="results" className="search-results">
    <audio controls>
      <source src={audio1} type="audio/mpeg" />
    </audio>
  </div>
)

const Instrument = () => (
  <div id="results" className="search-results">
    <audio controls>
      <source src={audio2} type="audio/mpeg" />
    </audio>
  </div>
)

const [showResults, setShowResults] = React.useState(false)
const onClick = () => setShowResults(true)
  
  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1>{props.question}</h1>
        <div className="qaButtons">
          {/* <div className="optionValue">
            <input type="radio" name ="music" onClick={onClickCalming}/>Calming
              <div className ="audioControls">
                { showResultsCalming ? <Calming /> : null }
                
              </div>
          </div>
          <div className="optionValue">
            <input type="radio" name ="music" onClick={onClickInstrument}/>Instrument
              <div className="audioControls">
                { showResultsInstrument ? <Instrument /> : null }
              </div>
          </div> */}
          <div className="optionValue">
            <input type="radio" name ="music" onClick={onClick}/>Calming
              <div className ="audioControls">
                { showResults ? <Calming /> : null }
              </div>
            <input type="radio" name ="music" onClick={onClick}/>Instrument
              <div className="audioControls">
                { showResults ? <Instrument /> : null }
              </div>
          </div>
        </div>
        <button
          onClick={() => props.setType(null)}
          className="chooseImageAgain"
        >
          Back
        </button>
      </div>
    </React.Fragment>
  );
};

export default Audio;
