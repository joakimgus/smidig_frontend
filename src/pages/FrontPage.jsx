import React, { useState } from "react";
import "./FrontPage.css";
import SlideOne from "../components/SlideOne";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideTwo from "../components/SlideTwo";
import SlideThree from "../components/SlideThree";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import SlideFour from "../components/SlideFour";
import SlideFive from "../components/SlideFive";

const FrontPage = () => {
  // Install modules
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  // const slideImages = [
  //     Abstract,
  //     ItemImg,
  //     TargetAudience,
  //     Process1,
  //     Process2
  // ];

  return (
    <div className={"page-container"}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFour />
        </SwiperSlide>
        <SwiperSlide><SlideFive /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FrontPage;
