import React from "react";
import {useEffect, useState} from "react";
import './style/SuperuserPackages.css';
import {BiShow, GrAdd, GrFormEdit, RiSearchEyeLine, TiDelete} from "react-icons/all";
import {fetchData} from "../api/apiHandler";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";

const SuperuserPackages = () => {

    const [packages, setPackages] = useState();

    useEffect(() => {
        fetchData("/exhibitions").then((res) => {
            setPackages(res);
        });
    }, []);

    console.log(packages);

    const deletePackage = async (id) => {
        console.log("Deleting package " + id + ", but not really");
    };

    if (!packages) {
        return <Loading />;
    }

    return(
        <div className={"su-packages-page-container"}>
            <div className={"su-packages-top-text-container"}>
                <h1>Pakkeløsninger</h1>
                <p>
                    Her vil du finne en oversikt over eksisterende pakkeløsninger laget av bedriften.
                </p>
                <Link className={'su-add-new-packages-container button'} to={'/superbruker/lag-ny-pakke'}>
                    <GrAdd />
                    <p>Lag ny pakkeløsning</p>
                </Link>
            </div>
            <div className={"su-packages-table-specifications"}>
                <h5 className={"su-packages-title-section"}>Pakke</h5>
                <h5 className={"su-packages-preview-section"}>Forhåndsvisning</h5>
                <h5 className={"su-packages-active-section"}>Status</h5>
                <h5 className={"su-packages-edit-section"}>Rediger</h5>
                <h5 className={"su-packages-delete-section"}>Slett</h5>
                <hr />
            </div>
            {packages?.map((p) => (
                <>
                    <div className={"su-packages-item-container"}>
                        <div className={"su-packages-img-text-container"}>
                            <img src={p.media[0]} alt={"Package image"} />
                            <div className={"su-packages-item-text-container"}>
                                <h3>{p.name}</h3>
                                <p className={"su-packages-description"}>
                                    Produkter i pakken: {p.products.length}
                                </p>
                                <p>Artikkelnr: {p._id}</p>
                            </div>
                        </div>
                        <p className={"su-packages-preview-btn button"}>
                            <RiSearchEyeLine />
                        </p>
                        <p className={"su-packages-active-btn button"}>
                            <BiShow />
                        </p>
                        <p className={"su-packages-edit-btn button"}>
                            <GrFormEdit />
                        </p>
                        <p className={"su-packages-delete-btn button"}>
                            <TiDelete />
                        </p>
                    </div>
                </>
            ))}
        </div>
    )
}
export default SuperuserPackages;