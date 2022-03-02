import "./App.css";
import Header from "./components/Header";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";
import { useEffect, useState } from "react";
import DisplayImage from "./components/DisplayImage";
import image1 from "./static_data/Images/beaches/1.jpeg";
import image2 from "./static_data/Images/beaches/2.jpeg";
import image3 from "./static_data/Images/beaches/3.jpeg";
import image4 from "./static_data/Images/beaches/4.jpeg";

function App() {
  const [question, setQuestion] = useState(
    "What kind of scenario are you looking to scribble on?"
  );
  const [option1, setOption1] = useState("Beaches");
  const [option2, setOption2] = useState("Forests");
  const [option3, setOption3] = useState("Lakes");
  const [option4, setOption4] = useState("Mountains");

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
            question={question}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
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
        {console.log(
          "ImageType: ",
          ImageType,
          "ImageSelected: ",
          ImageSelected,
          "MusicType: ",
          musicType
        )}
      </div>
    </div>
  );
}

export default App;
