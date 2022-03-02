import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import Home from "./Components/Home/Home";
import Historia from "./Components/Historia/Historia";
import LandCruiser from "./Components/LandCruiser/LandCruiser";
import Corolla from "./Components/Corolla/Corolla";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Historia />
			<LandCruiser />
			<Corolla />
		</div>
	);
}

export default App;
