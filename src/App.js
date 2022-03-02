import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import Home from "./Components/Home/Home";
import Historia from "./Components/Historia/Historia";
import LandCruiser from "./Components/LandCruiser/LandCruiser";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Historia />
			<LandCruiser />
		</div>
	);
}

export default App;
