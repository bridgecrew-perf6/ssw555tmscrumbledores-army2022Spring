import React from "react";
import "./Qa.css";

// creat a Qa component
const Qa = (props) => {
  const [optionSelected, setOptionSelected] = React.useState(0);

  function setOption(optionSelected) {
    if (optionSelected !== 0) {
      props.setType(optionSelected);
    }
  }

  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1 id="question">{props.question}</h1>
        <div className="qaButtons">
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt1"
              name="ImageType"
              value="1"
              onClick={() => setOptionSelected(1)}
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
              onClick={() => setOptionSelected(2)}
            />
            <label for="opt2">{props.option2}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt3"
              name="ImageType"
              value="3"
              onClick={() => setOptionSelected(3)}
            />
            <label for="opt3">{props.option3}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt4"
              name="ImageType"
              value="4"
              onClick={() => setOptionSelected(4)}
            />
            <label for="opt4">{props.option4}</label>
          </div>
        </div>
        <div className="buttonRow">
          {props.questionType === "image" ? (
            <input
              className="UploadImage"
              accept="image/*"
              id="uploadedImage"
              type="file"
              onChange={(e) => {
                props.setUploadedImage(e.target.files[0]);
                setOption(5);
              }}
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

export default Qa;
