import React from "react";
import CardDetails from "../CardDetails/CardDetails";

export default function Historia() {
	return (
		<div className="Historia">
			<div className="container cstm-container p-3">
				<img
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4a3.png"
					alt="logo-toyota"
					width="150"
					height="80"
				/>
				<h1 className="cstm-container__label">HISTORIA</h1>

				<div className="container">
					<div className="row p-2">
						<CardDetails />
					</div>
				</div>
			</div>
		</div>
	);
}
