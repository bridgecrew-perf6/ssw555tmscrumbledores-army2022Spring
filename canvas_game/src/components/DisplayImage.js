import React from "react";
import "./Qa.css";
import "./DisplayImage.css";

// creat a Qa component
const DisplayImage = (props) => {
  let Image1 = null;
  let Image2 = null;
  let Image3 = null;
  let Image4 = null;
  console.log("ImageType: ", props.ImageType);

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
        <h1>{props.Question}</h1>
        <div className="qaButtons">
          <div className="imageRow">
            <div className="optionValue">
              <div>
                <img
                  className="image"
                  src={Image1}
                  alt="Image1"
                  onClick={() => props.setImageSelected(1)}
                />
              </div>
              <div className="optionValue">
                <img
                  className="image"
                  src={Image2}
                  alt="Image2"
                  onClick={() => props.setImageSelected(2)}
                />
              </div>
            </div>
          </div>
          <div className="imageRow">
            <div className="optionValue">
              <img
                className="image"
                src={Image3}
                alt="Image3"
                onClick={() => props.setImageSelected(3)}
              />
            </div>
            <div className="optionValue">
              <img
                className="image"
                src={Image4}
                alt="Image4"
                onClick={() => props.setImageSelected(4)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayImage;
