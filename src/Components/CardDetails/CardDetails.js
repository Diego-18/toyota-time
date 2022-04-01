import React from "react";
import "./CardDetails.css";
import img from "../../assets/img";

export default function CardDetails() {
	const infoToyota = require("../../assets/data/infoToyota.json");
	let count = -1;

	return (
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			{infoToyota.map((info, index) => {
				count++;
				return (
					<div className="card mb-4 card__history" key={index}>
						<div className="row g-0">
							<div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
								<img
									src={img[count]}
									className="img-fluid rounded-start cstm__img"
									alt="img"
								/>
							</div>
							<div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
								<div className="card-body">
									<h5 className="card-title">{info.date}</h5>
									<p className="card-text">{info.name}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
