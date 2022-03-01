import React from "react";
import "./Qa.css";

// creat a Qa component
const DisplayImage = (props) => {
  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1>{props.Question}</h1>
        <div className="qaButtons">
          <div className="optionValue">
            <input
              style={{ marginTop: "6px" }}
              type="radio"
              id="opt1"
              name="ImageType"
              value="1"
              onClick={() => props.setImageType(1)}
            />
            <label for="opt1">{props.option1}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "6px" }}
              type="radio"
              id="opt2"
              name="ImageType"
              value="2"
              onClick={() => props.setImageType(2)}
            />
            <label for="opt2">{props.option2}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "6px" }}
              type="radio"
              id="opt3"
              name="ImageType"
              value="3"
              onClick={() => props.setImageType(3)}
            />
            <label for="opt3">{props.option3}</label>
          </div>
          <div className="optionValue">
            <input
              style={{ marginTop: "6px" }}
              type="radio"
              id="opt4"
              name="ImageType"
              value="4"
              onClick={() => props.setImageType(4)}
            />
            <label for="opt4">{props.option4}</label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayImage;
