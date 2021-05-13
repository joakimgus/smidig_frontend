import Footer from "../components/Footer";
import Navigationbar from "../components/Navigationbar";
import "./FrontPage.css";
import Abstract from "../images/Abstract font blub.png";
import TargetAudience from "../images/Group 155.png";
import ItemImg from "../images/Image 2.png";
import Process1 from "../images/kjøpsprosess.png";
import Process2 from "../images/kjøpsprosess2.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { useState } from "react";

const FrontPage = () => {
  // const slideImages = [
  //     Abstract,
  //     ItemImg,
  //     TargetAudience,
  //     Process1,
  //     Process2
  // ];

  const [autoplay, setAutoplay] = useState(true);

  return (
    <div>
      <Navigationbar />
      <div>
        <div>
          <Slide autoplay={autoplay}>
            {/*<img className={'slide'} src={Abstract} />
                    <img className={'slide'} src={ItemImg} />
                    <img className={'slide'} src={TargetAudience} />
                    <img className={'slide'} src={Process1} />
                    <img className={'slide'} src={Process2} />
                    <Navigationbar />*/}
          </Slide>
        </div>

        <div className="autoplay-buttons">
          Autoplay is {autoplay ? "on" : "off"}
        </div>
        <div className="autoplay-buttons">
          <button type="button" onClick={() => setAutoplay(false)}>
            Pause
          </button>
          <button type="button" onClick={() => setAutoplay(true)}>
            Play
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
