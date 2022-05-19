import React from 'react';
import img from "../../assets/img";
import './CarsModelDetails.css';

export default function CarsModelDetails(props) {
    const model = props.model;
    let info = "";
    let count = 0;

    if (model === "LandCruiser") {
        info = require("../../assets/data/infoLandCruiser.json");
        count = 41;
    }
    else if (model === "Corolla") {
        info = require("../../assets/data/infoCorolla.json");
        count = 49;
    }

    return (
        <div className="row cstm-row p-2">
            {info.map((info, index) => {
                return (
                    <div className="col-xl-12 container-cars" key={index}>
                        {info.modelos.map((modelo, index) => {
                            count++;
                            return (
                                <div className="container-cars-model" key={index}>
                                    <div
                                        className="card bg-dark text-white cars-card"
                                    >
                                        <img
                                            src={img[count]}
                                            className="card-img cars-card__img"
                                            alt="lc"
                                        />
                                        <div className="card-img-overlay cars-card__body">
                                            <h5 className="card-title">
                                                {modelo.name}
                                            </h5>
                                            <p className="card-text cars-card__years">
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