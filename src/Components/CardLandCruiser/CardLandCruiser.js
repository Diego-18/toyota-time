import React from "react";
import "./CardLandCruiser.css";
import img from "../../assets/img";

export default function CardLandCruiser() {
	let infoLandCruiser = require("../../assets/data/infoLandCruiser.json");
	let count = 41;

	return (
		<div className="row p-2">
			{infoLandCruiser.map((info, index) => {
				return (
					<div className="col-xl-12" key={index}>
						{info.modelos.map((modelo, index) => {
							count++;
							return (
								<div className="container__card" key={index}>
									<div
										className="card bg-dark text-white card__lc"
										// onMouseEnter={() => setIsShown(true)}
										// onMouseLeave={() => setIsShown(false)}
									>
										<img
											src={img[count]}
											className="card-img img__lc"
											alt="lc"
										/>
										<div className="card-img-overlay card__body">
											<h5 className="card-title">
												{modelo.name}
											</h5>
											<p className="card-text year__text">
												{modelo.year}
											</p>

											<p className="card-text description__text">
												{modelo.description}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
