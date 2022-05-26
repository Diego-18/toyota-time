import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CardModel from "./components/CardModel/CardModel";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CardModel model="Historia" />
      <CardModel model="LandCruiser" />
      <CardModel model="Corolla" />
    </div>
  )
}

export default App
