import React from "react";

// creat a Qa component
const Qa = () => {
  return (
    <React.Fragment>
      <div className="qaOutLine">
        <h1>What kind of scenario are you looking to scribble on?</h1>
        <input type="radio" name="ImageType" value="1" />
      </div>
    </React.Fragment>
  );
};

export default Qa;
