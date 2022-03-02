import "./App.css";
import Header from "./components/Header";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";
import { useState } from "react";
import DisplayImage from "./components/DisplayImage";
import Audio from "./components/Audio";

function App() {
  const [ImageType, setImageType] = useState(null);
  const [musicType, setMusicType] = useState(null);
  const [ImageSelected, setImageSelected] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Instructions />
        {ImageType === null ? (
          <Qa
            question={"What kind of scenario are you looking to scribble on?"}
            option1={"Beaches"}
            option2={"Forests"}
            option3={"Lakes"}
            option4={"Mountains"}
            setType={setImageType}
          />
        ) : null}
        {ImageSelected === null && ImageType !== null ? (
          <DisplayImage
            question={"Choose an image to doodle on"}
            setImageSelected={setImageSelected}
            ImageType={ImageType}
          />
        ) : null}
        {ImageSelected !== null && musicType === null ? (
          <Qa
            question={"What kind of music do you want to listen to?"}
            option1={"Claming"}
            option2={"Instruments"}
            option3={"Nature"}
            option4={"Time alone"}
            setType={setMusicType}
          ></Qa>
        ) : null}
        {musicType !== null ? <Audio musicType={musicType} /> : null}
      </div>
    </div>
  );
}

export default App;
