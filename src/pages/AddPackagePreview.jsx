import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import Loading from "../components/Loading";
import "./style/AddPackagePreview.css"
import {IoArrowBackCircle} from "react-icons/all";

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

const AddPackagePreview = () => {
    const [previewPackage, setPreviewPackage] = useState([]);

    const history = useHistory();

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

    useEffect(() => {
        setPreviewPackage(JSON.parse(localStorage.getItem("newExhibition")));
    }, []);

    const savePackage = () => {
        console.log(previewPackage);
    }

    console.log(previewPackage);

    if (previewPackage.length > 0) {
        return <Loading />;
    }

    return(
        <div className={"admin-edit-package-page"}>
            <div className={"admin-edit-mode-box"}>
                <p>
                    Dette er en forhåndsvisning av hvordan pakken vil se ut i nettbutikken.
                </p>
                <button
                    onClick={savePackage}
                    className={"save-admin-edit-mode button"}
                >
                    Lagre
                </button>
            </div>
            <div className="back-container" onClick={() => history.push("/superbruker/lag-ny-pakke/info")}>
                <IoArrowBackCircle />
            </div>
            <div className={"product-top-container"}>
                <Swiper
                    className={"product-swiper"}
                    speed={500}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {previewPackage.media &&
                    previewPackage.media.map((p, i) => (
                        <SwiperSlide>
                            <img
                                key={i}
                                className={"product-image"}
                                src={p}
                                alt={"Produkt bilde"}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="product-top-right-container">
                    <div className="row-one-container">
                        <h3>{previewPackage.name}</h3>
                        <p className={"tags-p-container"}>
                            {previewPackage.tags.length > 0 && previewPackage.tags.map((t, i) => (
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
                        <p className={"short-desc-p"}>{previewPackage.shortDescription}</p>
                        <h4>Du trenger:</h4>
                        {previewPackage.requiredEquipment.length > 0 &&previewPackage.requiredEquipment.map((e, i) => (
                            <p className={"equipment-p"} key={i}>
                                <span>&#8212;</span> {e}
                            </p>
                        ))}
                    </div>
                    <button
                        className={"add-product-to-cart-btn button"}
                        disabled={true}
                    >
                        Legg til i handlekurv
                    </button>
                </div>
            </div>
            <div className={"product-bottom-wrapper"}>
                <div className={"product-info-container"}>
                    <h3>Mer informasjon</h3>
                    <p>{previewPackage.description}</p>
                </div>
                <div className={"product-bottom-right-wrapper"}>
                    <div className={"product-list-container"}>
                        <h3>Produkter i pakken</h3>
                        {previewPackage.products.map((e, i) => (
                            <p key={i}>
                                <span>&#8212;</span>
                                {e}
                            </p>
                        ))}
                    </div>
                    <div className={"owner-container"}>
                        <h3>Utviklet av</h3>
                        {/*  <img src={developer.logo} alt={"logo"} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPackagePreview;