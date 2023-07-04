import React from "react";
import "./CardModel.css";
import CardModelDetails from "../CardModelDetails/CardModelDetails";
import infoLandCruiser from "../../assets/data/infoLandCruiser.json";
import infoCorolla from "../../assets/data/infoCorolla.json";

const logoUrl =
	"https://i.pinimg.com/originals/36/56/ab/3656ab097dace4c437d105486f8da4a2.png";

export default function CardModel(props) {
	const { model } = props;
	let info;

	if (model === "LandCruiser") {
		info = infoLandCruiser;
	} else if (model === "Corolla") {
		info = infoCorolla;
	}

	return (
		<div className={model}>
			<div className="container cstm-container p-3">
				<img src={logoUrl} alt="logo-toyota" width="80" height="80" />

				<div className="container">
					{info ? (
						info.map((infoItem) => (
							<div key={infoItem.id}>
								<h1 className="cstm-container__label">
									{infoItem.name}
								</h1>
								<div className="row p-2">
									<div className="col-12">
										<p className="text-justify">
											{infoItem.description}
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<div>
							<h1 className="cstm-container__label">Historia</h1>
						</div>
					)}
				</div>
			</div>
			<CardModelDetails model={model} />
		</div>
	);
}
