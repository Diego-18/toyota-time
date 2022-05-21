import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Historia from "./components/Historia/Historia";
import CarsModel from "./components/CarsModel/CarsModel";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Historia />
      <CarsModel model="LandCruiser" />
      <CarsModel model="Corolla" />
    </div>
  )
}

export default App
