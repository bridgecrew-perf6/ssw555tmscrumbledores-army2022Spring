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

  function mark(ID) {
    //creates border
    var childImages = document.getElementsByTagName("img");
    var i;
    console.log(childImages);

    // clear any other borders that might be set
    for (i = 0; i < childImages.length; i++) {
      childImages[i].style.border = "";
    }

    // Then set the one that got clicked.
    document.getElementById(ID).style.border = "3px solid black";
    props.setImageData(document.getElementById(ID).src);
  }

  if (props.ImageType === 1) {
    Image1 = require("../static_data/Images/beaches/1.png");
    Image2 = require("../static_data/Images/beaches/2.png");
    Image3 = require("../static_data/Images/beaches/3.png");
    Image4 = require("../static_data/Images/beaches/4.png");
  } else if (props.ImageType === 2) {
    Image1 = require("../static_data/Images/forests/1.png");
    Image2 = require("../static_data/Images/forests/2.png");
    Image3 = require("../static_data/Images/forests/3.png");
    Image4 = require("../static_data/Images/forests/4.png");
  } else if (props.ImageType === 3) {
    Image1 = require("../static_data/Images/Lakes/1.png");
    Image2 = require("../static_data/Images/Lakes/2.png");
    Image3 = require("../static_data/Images/Lakes/3.png");
    Image4 = require("../static_data/Images/Lakes/4.png");
  } else if (props.ImageType === 4) {
    Image1 = require("../static_data/Images/mountains/1.png");
    Image2 = require("../static_data/Images/mountains/2.png");
    Image3 = require("../static_data/Images/mountains/3.png");
    Image4 = require("../static_data/Images/mountains/4.png");
  }

  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1 id="Question2">{props.question}</h1>
        <div className="qaButtons">
          <div className="imageRow">
            <div className="optionValue">
              <img
                className="image"
                src={Image1}
                alt="Image1"
                id="opt1"
                onClick={() => {
                  setOptionSelected(1);
                  mark("opt1");
                }}
              />
            </div>
            <div className="optionValue">
              <img
                className="image"
                src={Image2}
                alt="Image2"
                id="opt2"
                onClick={() => {
                  setOptionSelected(2);
                  mark("opt2");
                }}
              />
            </div>
          </div>
          <div className="imageRow">
            <div className="optionValue">
              <img
                className="image"
                src={Image3}
                alt="Image3"
                id="opt3"
                onClick={() => {
                  setOptionSelected(3);
                  mark("opt3");
                }}
              />
            </div>
            <div className="optionValue">
              <img
                className="image"
                src={Image4}
                alt="Image4"
                id="opt4"
                onClick={() => {
                  setOptionSelected(4);
                  mark("opt4");
                }}
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
