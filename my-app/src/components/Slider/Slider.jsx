import React, { useEffect } from "react";
import "./slider.scoped.scss";
import "react-slideshow-image/dist/styles.css";
import saraslider from "../../assets/images/Slider/main-slider-sara.png";
import sld1 from "../../assets/images/Slider/main-slider1.jpeg";
import sld2 from "../../assets/images/Slider/main-slider2.jpeg";
import sld3 from "../../assets/images/Slider/main-slider-3.jpeg";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  {
    url: sld1,
    caption: "First Slide",
  },
  {
    url: sld2,
    caption: "Second Slide",
  },
  {
    url: sld3,
    caption: "Third Slide",
  },
];

const Slider = () => {
  const properties = {
    prevArrow: <div className="arrows" style={{width: "30px", marginRight: "-30px"}}><i class="fal fa-long-arrow-left fa-2x"></i></div>,
    nextArrow: <div className="arrows" style={{width: "30px", marginLeft: "-30px"}}><i class="fal fa-long-arrow-right fa-2x"></i></div>
  };

  return (
    <Fade {...properties}>
      {fadeImages.map((fadeImage, index) => {
        return (
          <div
            id="slider"
            style={{
              width: "100%",
              height: "477px",
              backgroundSize: "cover",
              backgroundImage: `url(${fadeImage.url})`,
            }}
            className="each-fade"
            key={index}
          >
            
            <div class="title">
                <h2>
                  Send <span>flowers</span> like you mean it.{" "}
                </h2>
               <p>
                  Where flowers are our inspiration to create lasting memories.
                  Whatever the occasion, our flowers will make it special cursus
                  a sit amet mauris.{" "}
                </p>
                <img src={saraslider} alt="" />
              
            </div>
            {/* <span class="arrows">
              <i class="fal fa-arrow-left" />
            </span>
            <span class="arrows">
              <i class="fal fa-arrow-right" />
            </span> */}
          </div>
        );
      })}
    </Fade>
  );
};

export default Slider;
