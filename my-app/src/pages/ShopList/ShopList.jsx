import React from "react";
import { featuredProductsDef } from "../../mocks/featuredProducts";
import { categoriesProductsDef } from "../../mocks/categoriesProducts";
import { productsDef } from "../../mocks/products";
import "./shoplist.scoped.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useCart } from "react-use-cart";

const ShopList = () => {
  const { addItem } = useCart()
  return (
    <main>
      <section id="shopList-title">
        <div class="container px-3">
          <div class="title">
            <h1>Shop List</h1>
          </div>
        </div>
      </section>
      <section id="shop-products">
        <div class="container">
          <div class="row">
            {featuredProductsDef.map((p) => {
              return (
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div class="shopProduct mb-4">
                    <div class="image">
                      <a >
                        <img
                          src={
                            require(`../../assets/images/Products/${p.img}`)
                              .default
                          }
                          alt={p.name}
                        />
                      </a>
                      <div class="info new">
                        <span>New</span>
                      </div>
                    </div>
                    <div class="image-hover">
                      <div class="content text-center">
                        <h6>
                          <a>{p.name}</a>
                        </h6>
                        <span>${p.price}</span>
                        <br />
                        <button onClick={() => addItem(p)} class="add-card mt-2">
                          <a>Add to cart</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="shop-products">
        <div class="container">
          <div className="row">
            <CarouselProvider
              isPlaying={true}
              visibleSlides={4}
              style={{ width: "100%" }}
              naturalSlideWidth={2}
              naturalSlideHeight={2.5}
              totalSlides={productsDef.length}
            
            >
              <div style={{width:'100%', display:'flex', justifyContent:'end'}}>
                <ButtonBack className="custom-button" style={{borderRadius:'6px'}}><i class="fas fa-chevron-left"></i></ButtonBack>
                <ButtonNext className="custom-button" style={{borderRadius:'6px'}}><i class="fas fa-chevron-right"></i></ButtonNext>
              </div>
              <Slider>
                {productsDef.map((p, index) => {
                  return (
                    <div>
                      <Slide index={index}>
                        <div class="shopProduct mb-4 mx-4">
                          <div class="image">
                            <a >
                              <img
                                src={
                                  require(`../../assets/images/Products/${
                                    p.img
                                  }`).default
                                }
                                alt={p.name}
                              />
                            </a>
                            <div class="info new">
                              <span>New</span>
                            </div>
                          </div>
                          <div class="image-hover">
                            <div class="content text-center">
                              <h6>
                                <a >{p.name}</a>
                              </h6>
                              <span>${p.price}</span>
                              <br />
                              <button onClick={() => addItem(p)} class="add-card mt-2">
                                <a>Add to cart</a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  );
                })}
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </section>

      <section id="blossoms">
        <div class="container">
          <div class="row">
            {categoriesProductsDef.map((p) => {
              return (
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                  <div class="blossom pb-5">
                    <div class="img">
                      <a >
                        <img
                          src={
                            require(`../../assets/images/Products/${p.img}`)
                              .default
                          }
                          alt={p.name}
                        />
                      </a>
                    </div>
                    <div class="content mt-2 text-center">
                      <h6 class="m-0">
                        <a>{p.name}</a>
                      </h6>
                      <span>from ${p.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopList;
