import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import Home from "./Components/Home/Home";
import Historia from "./Components/Historia/Historia";
import CarsModel from "./Components/CarsModel/CarsModel";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Historia />
			<CarsModel model="LandCruiser" />
			<CarsModel model="Corolla" />
		</div>
	);
}

export default App;
