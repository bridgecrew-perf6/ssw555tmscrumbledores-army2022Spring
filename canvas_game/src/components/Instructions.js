import React from "react";
import "./Instructions.css";

const Instructions = () => {
  return (
    <React.Fragment>
      <div className="instructionsOutline">
        <h2>About this game</h2>
        <p></p>
        <p>
          Hello there, folks! Did you know that art and mental health have a
          positive connection?{" "}
        </p>
        <p>
          Artistic activities such as painting or drawing are known to lower
          stress levels and promote mental calmness.
        </p>
        <p>
          Take a little bit of time out of your busy, stressful schedules and
          relax while you doodle away.
        </p>
        <p>
          All you have to do is pick a background image of your preference which
          you want to draw, scribble or paint and a music you'd like to listen
          to while you embrace the artist in yourself! Plus, you can upload your
          own image to doodle on if you like!
        </p>
      </div>
    </React.Fragment>
  );
};

export default Instructions;
