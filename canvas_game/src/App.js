import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";
import { useEffect, useState } from "react";
import DisplayImage from "./components/DisplayImage";

function App() {
  const [question, setQuestion] = useState(
    "What kind of scenario are you looking to scribble on?"
  );
  const [option1, setOption1] = useState("Beaches");
  const [option2, setOption2] = useState("Forests");
  const [option3, setOption3] = useState("Lakes");
  const [option4, setOption4] = useState("Mountains");
  const [Image1, setImage1] = useState("");
  const [Image2, setImage2] = useState("");
  const [Image3, setImage3] = useState("");
  const [Image4, setImage4] = useState("");

  const [ImageType, setImageType] = useState(null);
  const [ImageSelected, setImageSelected] = useState(null);

  useEffect(() => {
    setQuestion("Select an image below to scribble on?");
    if (ImageType === 1) {
      setImage1("..public/static_data/Images/beaches/1.jpeg");
      setImage2("..public/static_data/Images/beaches/2.jpeg");
      setImage3("..public/static_data/Images/beaches/3.jpeg");
      setImage4("..public/static_data/Images/beaches/4.jpeg");
    } else if (ImageType === 2) {
      setImage1("..public/static_data/Images/forests/1.png");
      setImage2("..public/static_data/Images/forests/2.jpeg");
      setImage3("..public/static_data/Images/forests/3.jpeg");
      setImage4("..public/static_data/Images/forests/4.jpeg");
    } else if (ImageType === 3) {
      setImage1("..public/static_data/Images/Lakes/1.jpeg");
      setImage2("..public/static_data/Images/Lakes/2.jpeg");
      setImage3("..public/static_data/Images/Lakes/3.jpeg");
      setImage4("..public/static_data/Images/Lakes/4.jpeg");
    } else if (ImageType === 4) {
      setImage1("..public/static_data/Images/Mountains/1.jpeg");
      setImage2("..public/static_data/Images/Mountains/2.jpeg");
      setImage3("..public/static_data/Images/Mountains/3.jpeg");
      setImage4("..public/static_data/Images/Mountains/4.jpeg");
    }
  }, [ImageType]);
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
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            Image4={Image4}
            question={question}
            setImageSelected={setImageSelected}
          />
        )}
      </div>
    </div>
  );
}

export default App;
