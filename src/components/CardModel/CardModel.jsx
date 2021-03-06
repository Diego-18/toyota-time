import './CardModel.css';
import CardModelDetails from '../CardModelDetails/CardModelDetails';
import infoLandCruiser from '../../assets/data/infoLandCruiser.json';
import infoCorolla from '../../assets/data/infoCorolla.json';

export default function CardModel(props) {
    const model = props.model;
    let info = "";

    if (model === "LandCruiser") {
        info = infoLandCruiser;
    }
    else if (model === "Corolla") {
        info = infoCorolla;
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

                <div className="container" >
                    { props.model !== "Historia" ? (
                        info.map((info, index) => {
                            return (
                                <div>
                                    <h1 className="cstm-container__label" key={index}>
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
                            )
                        })
                    ) : (
                        <div>
                            <h1 className="cstm-container__label">HISTORIA</h1>
                        </div>
                    )}

                </div>
            </div>
            <CardModelDetails model={model} />
        </div>
    );
}