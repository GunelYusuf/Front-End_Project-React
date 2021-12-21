import React from "react";
import "./bottomslider.scoped.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import florist1 from "../../assets/images/Florists/Barbara-florist.png";
import florist2 from "../../assets/images/Florists/Jasmine_florist.png";

const fadeImages = [
  {
    url: florist1,
    caption:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.",
    name: "Anna Barnes",
  },
  {
    url: florist2,
    caption:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.",
    name: "Jasmine White",
  },
];

const BottomSlider = () => {

  const properties = {
    prevArrow: <div><i class="fal fa-long-arrow-left fa-2x"></i></div>,
    nextArrow: <div><i class="fal fa-long-arrow-right fa-2x"></i></div>,
    autoplay:true,
    duration:2000,
    transitionDuration:300

  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{display:'flex', flexDirection:'column', width:'70%'}}>
    <Slide {...properties}>
      {fadeImages.map((fadeImage, index) => {
        return (
          <section id="florist-slider1">
            <div class="container">
              <div class="row">
                <div class="slider multiple-items">
                  <div class="item text-center Anna">
                    <div class="image">
                      <img src={fadeImage.url} alt="Florist image" />
                    </div>
                    <div class="title">
                      <p>{fadeImage.caption}</p>
                      <span class="floristName">{fadeImage.name}</span>
                      <br />
                      <span>Florist</span>
                    </div>
                  </div>

                  {/* <span id="arrowLeft" class="arrows">
                    <i class="fal fa-arrow-left " />
                  </span>
                  <span id="arrowRight" class="arrows">
                    <i class="fal fa-arrow-right" />
                  </span> */}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Slide>
    </div>
    </div>
  );
};

export default BottomSlider;
