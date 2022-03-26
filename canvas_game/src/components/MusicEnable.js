import React from "react";
import "./Qa.css";

// creat a Qa component
const MusicEnable = (props) => {
  const [optionSelected, setOptionSelected] = React.useState(0);

  function setOption(optionSelected) {
    if (optionSelected !== 0) {
      props.setMusicEnable(optionSelected);
    }
  }

  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1 id="Question3">{props.question}</h1>
        <div className="qaButtons">
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt1"
              name="ImageType"
              value="1"
              onClick={() => setOptionSelected(true)}
            />
            <label for="opt1">{props.option1}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt2"
              name="ImageType"
              value="2"
              onClick={() => setOptionSelected(false)}
            />
            <label for="opt2">{props.option2}</label>
          </div>
        </div>
        <div className="buttonRow">
          {props.questionType === "image" ? (
            <input
              className="UploadImage"
              accept="image/*"
              id="contained-button-file"
              type="file"
            />
          ) : (
            <button
              onClick={() => props.setImageSelected(null)}
              className="chooseImageAgain"
            >
              Back
            </button>
          )}
          <button
            className="NextButton"
            disabled={optionSelected === 0}
            onClick={() => setOption(optionSelected)}
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicEnable;
