import React from "react";
import "./Audio.css";

const Audio = (props) => {
  const [optionSelected, setOptionSelected] = React.useState(0);
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

  let setOption = (optionSelected) => {
    props.setMusicSelected(optionSelected);
  };

  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1 id="Question4">{props.question}</h1>
        <div className="qaButtons">
          <div className="optionValue">
            <input
              className="musicOption"
              type="radio"
              name="music"
              onClick={() => setOptionSelected(1)}
            />
            <audio controls>
              <source src={audio1} type="audio/mpeg" />
            </audio>
          </div>
          <div className="optionValue">
            <input
              className="musicOption"
              type="radio"
              name="music"
              onClick={() => setOptionSelected(2)}
            />
            <audio controls>
              <source src={audio2} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className="buttonRow">
          <button
            onClick={() => {
              props.setType(null);
              props.setMusicSelected(null);
            }}
            className="chooseImageAgain"
          >
            Back
          </button>
          <button
            onClick={() => setOption(optionSelected)}
            className="NextButton"
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Audio;
