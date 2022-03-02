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
  const [ImageSelected, setImageSelected] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Instructions />
        {ImageType === null ? (
          <Qa
            Question={question}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
            setImageType={setImageType}
          />
        ) : (
          <DisplayImage
            question={question}
            setImageSelected={setImageSelected}
            ImageType={ImageType}
          />
        )}
      </div>
    </div>
  );
}

export default App;
