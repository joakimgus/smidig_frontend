import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./ProductPage.css";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";

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

const ProductPage = () => {
  const location = useLocation();
  const data = location.state.params;
  const [developer, setDeveloper] = useState();

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  useEffect(() => {
    fetchDeveloper();
  }, []);

  const fetchDeveloper = async () => {
    const res = await fetchData("/museums/" + data.developer);
    setDeveloper(res);
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.findIndex((x) => x._id === data._id);
    if (productInCart >= 0) {
      cart[productInCart].counter++;
    } else {
      data.counter = 1;
      cart.push(data);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (!developer) {
    return <Loading />;
  }

  return (
    <div className={"productpage-container"}>
      <div className={"product-top-container"}>
        {/*TODO bytt til swiper*/}
        <Swiper
          speed={500}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.media &&
            data.media.map((p) => (
              <SwiperSlide>
                <img
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
          <button className={"add-product-to-cart-btn"} onClick={addToCart}>
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
            <img src={developer.picture} alt={"logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
