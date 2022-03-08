import React from "react";
import "./Qa.css";

// creat a Qa component
const Qa = (props) => {
  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1>{props.question}</h1>
        <div className="qaButtons">
          <div className="optionValue">
            <input
              style={{ marginTop: "4px", marginRight: "10px" }}
              type="radio"
              id="opt1"
              name="ImageType"
              value="1"
              onClick={() => props.setType(1)}
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
              onClick={() => props.setType(2)}
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
              onClick={() => props.setType(3)}
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
              onClick={() => props.setType(4)}
            />
            <label for="opt4">{props.option4}</label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Qa;
