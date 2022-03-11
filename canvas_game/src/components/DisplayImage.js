import React from "react";
import "./Qa.css";
import "./DisplayImage.css";

// creat a Qa component
const DisplayImage = (props) => {
  let Image1 = null;
  let Image2 = null;
  let Image3 = null;
  let Image4 = null;

  const [optionSelected, setOptionSelected] = React.useState(0);

  function setOption(optionSelected) {
    if (optionSelected !== 0) {
      props.setImageSelected(optionSelected);
    }
  }

  if (props.ImageType === 1) {
    Image1 = require("../static_data/Images/beaches/1.jpeg");
    Image2 = require("../static_data/Images/beaches/2.jpeg");
    Image3 = require("../static_data/Images/beaches/3.jpeg");
    Image4 = require("../static_data/Images/beaches/4.jpeg");
    console.log(Image1);
    console.log(Image1);
  } else if (props.ImageType === 2) {
    Image1 = require("../static_data/Images/forests/1.jpeg");
    Image2 = require("../static_data/Images/forests/2.jpeg");
    Image3 = require("../static_data/Images/forests/3.jpeg");
    Image4 = require("../static_data/Images/forests/4.jpeg");
  } else if (props.ImageType === 3) {
    Image1 = require("../static_data/Images/Lakes/1.jpeg");
    Image2 = require("../static_data/Images/Lakes/2.jpeg");
    Image3 = require("../static_data/Images/Lakes/3.jpeg");
    Image4 = require("../static_data/Images/Lakes/4.jpeg");
  } else if (props.ImageType === 4) {
    Image1 = require("../static_data/Images/mountains/1.jpeg");
    Image2 = require("../static_data/Images/mountains/2.jpeg");
    Image3 = require("../static_data/Images/mountains/3.jpeg");
    Image4 = require("../static_data/Images/mountains/4.jpeg");
  }

  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1>{props.question}</h1>
        <div className="qaButtons">
          <div className="imageRow">
            <div className="optionValue">
              <img
                className="image"
                src={Image1}
                alt="Image1"
                onClick={() => setOptionSelected(1)}
              />
            </div>
            <div className="optionValue">
              <img
                className="image"
                src={Image2}
                alt="Image2"
                onClick={() => setOptionSelected(2)}
              />
            </div>
          </div>
          <div className="imageRow">
            <div className="optionValue">
              <img
                className="image"
                src={Image3}
                alt="Image3"
                onClick={() => setOptionSelected(3)}
              />
            </div>
            <div className="optionValue">
              <img
                className="image"
                src={Image4}
                alt="Image4"
                onClick={() => setOptionSelected(4)}
              />
            </div>
          </div>
        </div>
        <div className="buttonRow">
          <button
            onClick={() => props.setImageType(null)}
            className="chooseImageTypeAgain"
          >
            Back
          </button>
          <button
            className="NextButton"
            disabled={optionSelected === 0}
            style={{ marginTop: "30px" }}
            onClick={() => setOption(optionSelected)}
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayImage;
