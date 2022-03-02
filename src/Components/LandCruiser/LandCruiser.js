import React from "react";
import CardLandCruiser from "../CardLandCruiser/CardLandCruiser";

export default function LandCruiser() {
	let infoLandCruiser = require("../../assets/data/infoLandCruiser.json");

	return (
		<div className="LandCruiser">
			<div className="container cstm__container p-3">
				<img
					src="https://i.pinimg.com/originals/36/56/ab/3656ab097dace4c437d105486f8da4a2.png"
					alt="logo-toyota"
					width="80"
					height="80"
				/>

				{infoLandCruiser.map((info) => {
					return (
						<div className="container">
							<h1 className="cstm__label text-white">
								{info.name}
							</h1>
							<div className="row p-2">
								<div className="col-12">
									<p className="text-justify">
										{info.description}
									</p>
								</div>
							</div>
							<CardLandCruiser />
						</div>
					);
				})}
			</div>
		</div>
	);
}
