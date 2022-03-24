import "./App.css";
import Header from "./components/Header";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";
import { useState } from "react";
import DisplayImage from "./components/DisplayImage";
import Audio from "./components/Audio";
import Footer from "./components/Footer";
import MusicEnable from "./components/MusicEnable";

function App() {
  const [ImageType, setImageType] = useState(null);
  const [ImageSelected, setImageSelected] = useState(null);
  const [musicEnable, setMusicEnable] = useState(null);
  const [musicType, setMusicType] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Instructions />
        {ImageType === null ? (
          <Qa
            questionType={"image"}
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
            setImageType={setImageType}
          />
        ) : null}
        {ImageSelected !== null &&
        musicType === null &&
        musicEnable === null ? (
          <MusicEnable
            questionType={"enableMusic"}
            question={"Would you like to listen to music while scribbling?"}
            option1={"Yes"}
            option2={"No"}
            setMusicEnable={setMusicEnable}
            setImageSelected={setImageSelected}
          ></MusicEnable>
        ) : null}
        {ImageSelected !== null &&
        musicType === null &&
        musicEnable === true ? (
          <Qa
            questionType={"music"}
            question={"What kind of music do you want to listen to?"}
            option1={"Calming"}
            option2={"Instruments"}
            option3={"Nature"}
            option4={"Time alone"}
            setImageSelected={setMusicEnable}
            setType={setMusicType}
          ></Qa>
        ) : null}
        {musicType !== null && musicEnable === true ? (
          <Audio
            setType={setMusicType}
            question={"Choose music that you would like to listen"}
            musicType={musicType}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
