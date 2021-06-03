import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../components/Loading";
import "./style/AddPackagePreview.css";
import { IoArrowBackCircle } from "react-icons/all";

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
import { postData } from "../api/apiHandler";
import { UserContext } from "../context/context";

const AddPackagePreview = () => {
  const [previewPackage, setPreviewPackage] = useState([]);

  const { user } = useContext(UserContext);

  let redirect;
  if (user.type === "SUPER") {
    redirect = "/superbruker";
  } else if (user.type === "ADMIN") {
    redirect = "/admin";
  }

  const history = useHistory();

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  useEffect(() => {
    setPreviewPackage(JSON.parse(localStorage.getItem("newExhibition")));
  }, []);

  const savePackage = async () => {
    console.log(previewPackage);

    const res = await postData("/exhibitions/add", previewPackage);

    if (res === "success") {
      history.push(redirect + "/pakker");
    }
  };

  if (previewPackage.length === 0) {
    return <Loading />;
  }

  return (
    <div className={"add-package-preview-page"}>
      <div className={"add-package-preview-mode-box"}>
        <p>
          Dette er en forhåndsvisning av hvordan pakken vil se ut i
          nettbutikken.
        </p>
        <button
          onClick={savePackage}
          className={"save-add-package-preview-mode button"}
        >
          Lagre
        </button>
      </div>
      <div
        className="back-container"
        onClick={() => history.push(redirect + "/lag-ny-pakke/info")}
      >
        <IoArrowBackCircle />
      </div>
      <div className={"add-package-preview-product-top-container"}>
        <Swiper
          className={"product-swiper"}
          speed={500}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {previewPackage.media.map((p, i) => (
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
        <div className="add-package-preview-product-top-right-container">
          <div className="add-package-preview-row-one-container">
            <h3>{previewPackage.name}</h3>
            <p className={"add-package-preview-tags-p-container"}>
              {previewPackage.tags.length > 0 &&
                previewPackage.tags.map((t, i) => (
                  <p
                    className={"add-package-preview-tags-p"}
                    style={{ display: "inline-block" }}
                    key={i}
                  >
                    {t} |
                  </p>
                ))}
            </p>
          </div>
          <div className="add-package-preview-row-two-container">
            <h4>Inneholder</h4>
            <p className={"add-package-preview-short-desc-p"}>
              {previewPackage.shortDescription}
            </p>
            <h4>Du trenger:</h4>
            {previewPackage.requiredEquipment.map((e, i) => (
              <p className={"add-package-preview-equipment-p"} key={i}>
                <span>&#8212;</span> {e}
              </p>
            ))}
          </div>
          <button
            className={"add-package-preview-add-product-to-cart-btn button"}
            disabled={true}
          >
            Legg til i handlekurv
          </button>
        </div>
      </div>
      <div className={"add-package-preview-product-bottom-wrapper"}>
        <div className={"add-package-preview-product-info-container"}>
          <h3>Mer informasjon</h3>
          <p>{previewPackage.description}</p>
        </div>
        <div className={"add-package-preview-product-bottom-right-wrapper"}>
          <div className={"add-package-preview-product-list-container"}>
            <h3>Produkter i pakken</h3>
            {previewPackage.products.map((e, i) => (
              <p key={i}>
                <span>&#8212;</span>
                {e}
              </p>
            ))}
          </div>
          <div className={"add-package-preview-owner-container"}>
            <h3>Utviklet av</h3>
            {/*  <img src={developer.logo} alt={"logo"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackagePreview;
