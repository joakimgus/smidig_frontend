import React, { useState } from "react";
import "./FrontPage.css";
import SlideOne from "../components/SlideOne";
import Abstract from "../images/Abstract font blub.png";
import TargetAudience from "../images/Group 155.png";
import ItemImg from "../images/Image 2.png";
import Process1 from "../images/kjøpsprosess.png";
import Process2 from "../images/kjøpsprosess2.png";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideTwo from "../components/SlideTwo";
import SlideThree from "../components/SlideThree";

// Import Swiper styles
import "swiper/swiper.scss";

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
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FrontPage;
