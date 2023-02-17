import img from "../../assets/img";
import './CardModelDetails.css';
import infoLandCruiser from '../../assets/data/infoLandCruiser.json';
import infoCorolla from '../../assets/data/infoCorolla.json';
import infoToyota from '../../assets/data/infoToyota.json';

export default function CardModelDetails(props) {
    const model = props.model;
    let info = "";
    let count = 0;

    if (model === "LandCruiser") {
        info = infoLandCruiser;
        count = 40;
    }
    else if (model === "Corolla") {
        info = infoCorolla;
        count = 48;
    }
    else if (model === "Historia") {
        info = infoToyota;
        count = -1;
    }

    return (
        <div className="row cstm-row p-2">
            {info.map((info, index) => {
                count++;
                if (model === "Historia") {
                    return (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-xl-5 col-lg-4 container-details" key={index}>
                            <div className="container-details-item">
                                <div className="card bg-dark text-white cstm-card">
                                    <img src={img[count]} className="card-img cstm-card__img" alt="img_history"/>

                                    <div className="card-img-overlay cstm-card__body">
                                        <h5 className="card-title">
                                            {info.name}
                                        </h5>
                                        <p className="card-text cstm-card__years">
                                            {info.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                else{
                    return (
                            info.modelos.map((modelo, index) => {
                                count++;
                                return (
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-xl-5 col-lg-4 container-details" key={index}>
                                        <div className="container-details-item">
                                            <div className="card bg-dark text-white cstm-card">
                                                <img
                                                    src={img[count]}
                                                    className="card-img cstm-card__img"
                                                    alt="img_car"
                                                />
                                                <div className="card-img-overlay cstm-card__body">
                                                    <h5 className="card-title">
                                                        {modelo.name}
                                                    </h5>
                                                    <p className="card-text cstm-card__years">
                                                        {modelo.year}
                                                    </p>

                                                    <p className="card-text description__text">
                                                        {modelo.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    );
                }
            })}
        </div>
    );
}
