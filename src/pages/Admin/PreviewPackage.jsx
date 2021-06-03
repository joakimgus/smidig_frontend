import {useLocation} from "react-router";
import React, {useEffect, useState} from "react";
import {fetchData} from "../../api/apiHandler";
import Loading from "../../components/Loading";

// Swiper
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
import {IoArrowBackCircle} from "react-icons/all";

const PreviewPackage = () => {
    const location = useLocation();
    const data = location.state.params;
    const [developer, setDeveloper] = useState();

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

    return (
        <div className={"productpage-container"}>
            <div className="back-container">
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
                    {data.media &&
                    data.media.map((p, i) => (
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
                        <h3>{data.name}</h3>
                        <p className={"tags-p-container"}>
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
                        <p className={"short-desc-p"}>{data.shortDescription}</p>
                        <h4>Du trenger:</h4>
                        {data.requiredEquipment.map((e, i) => (
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
                    <p>{data.description}</p>
                </div>
                <div className={"product-bottom-right-wrapper"}>
                    <div className={"product-list-container"}>
                        <h3>Produkter i pakken</h3>
                        {data.products.map((e, i) => (
                            <p key={i}>
                                <span>&#8212;</span>
                                {e}
                            </p>
                        ))}
                    </div>
                    <div className={"owner-container"}>
                        <h3>Utviklet av</h3>
                        <img src={developer.logo} alt={"logo"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewPackage;