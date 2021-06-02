import React, {useEffect, useState} from "react";
import '../style/Admin/EditPackage.css';
import {useLocation} from "react-router";
import {fetchData} from "../../api/apiHandler";
import Loading from "../../components/Loading";
import Photo from '../../images/placeholder-image.png';
import {GrAdd, TiDelete} from "react-icons/all";

const EditPackage = () => {
    const location = useLocation();
    const data = location.state.params;
    const [developer, setDeveloper] = useState();

    useEffect(() => {
        fetchDeveloper();
        window.scrollTo(0, 0);
    }, []);

    const fetchDeveloper = async () => {
        const res = await fetchData("/museums/" + data.developer);
        setDeveloper(res);
    };

    if (!developer) {
        return <Loading />;
    }

    return(
        <div className={'productpage-container'}>
            <div className={"product-top-container"}>
                <div className={'product-top-left-container'}>
                    <img src={Photo} width={'250px'} alt={''} />
                    <div className="img-add-delete-wrapper">
                        <div className={'package-add-img-btn button'}>
                            <GrAdd />
                            <p>Legg til bilder</p>
                        </div>
                        <div className={'package-delete-img-btn button'}>
                            <TiDelete />
                            <p>Slett bilder</p>
                        </div>
                    </div>
                </div>
                <div className="product-top-right-container">
                    <div className="row-one-container">
                        <h3 contenteditable="true">{data.name}</h3>
                        <p contenteditable="true" className={"tags-p-container"}>
                            {data.tags.map((t, i) => (
                                <p
                                    className={"tags-p"}
                                    style={{ display: "inline-block" }}
                                    key={i}
                                >
                                    {t} |
                                </p>
                            ))}
                        </p>
                    </div>
                    <div className="row-two-container">
                        <h4>Inneholder</h4>
                        <p contenteditable="true" className={"short-desc-p"}>{data.shortDescription}</p>
                        <h4>Du trenger:</h4>
                        {data.requiredEquipment.map((e, i) => (
                            <p contenteditable="true" className={"equipment-p"} key={i}>
                                <span>&#8212;</span> {e}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"product-bottom-wrapper"}>
                <div className={"product-info-container"}>
                    <h3>Mer informasjon</h3>
                    <p contenteditable="true">{data.description}</p>
                </div>
                <div className={"product-bottom-right-wrapper"}>
                    <div className={"product-list-container"}>
                        <h3>Produkter i pakken</h3>
                        {data.products.map((e, i) => (
                            <p contenteditable="true" key={i}>
                                <span>&#8212;</span>
                                {e}
                            </p>
                        ))}
                    </div>
                    <div className={"owner-container"}>
                        <h3>Utviklet av</h3>
                        {/*Todo fiks dropdown med utviklere?*/}
                        <p contenteditable="true">{developer.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPackage;