import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Instructions />
        <Qa />
      </div>
    </div>
  );
}

export default App;
