import React from 'react';
import './CarsModel.css';

export default function CarsModel(props) {
    const model = props.model;
    let info = "";

    if (model === "LandCruiser") {
        info = require("../../assets/data/infoLandCruiser.json");
    }
    else if (model === "Corolla") {
        info = require("../../assets/data/infoCorolla.json");
    }

    return (
        <div className={props.model}>
            <div className="container cstm-container p-3">
                <img
                    src="https://i.pinimg.com/originals/36/56/ab/3656ab097dace4c437d105486f8da4a2.png"
                    alt="logo-toyota"
                    width="80"
                    height="80"
                />

                {info.map((info, index) => {
                    return (
                        <div className="container" key={index}>
                            <h1 className="cstm-container__label">
                                {info.name}
                            </h1>
                            <div className="row p-2">
                                <div className="col-12">
                                    <p className="text-justify">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}