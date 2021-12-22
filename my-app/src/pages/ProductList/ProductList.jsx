import React, { useEffect, useState } from "react";
import orange1 from "../../assets/images/Orange-img/orange1.jpeg";
import orange2 from "../../assets/images/Orange-img/orange2.jpeg";
import orange3 from "../../assets/images/Orange-img/orange3.jpeg";
import orange4 from "../../assets/images/Orange-img/orange4.jpeg";
import orangeBig from "../../assets/images/Orange-img/orangeBig.jpeg";
import expert2 from "../../assets/images/Experts/mini1.png";
import expert1 from "../../assets/images/Experts/mini2.png";
import { featuredProductsDef } from "../../mocks/featuredProducts";
import "./productlist.scoped.scss";
import { useCart } from "react-use-cart";

const ProductList = () => {
  const {
    items,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const [item, setItem] = useState({
    id: "23",
    name: "ORANGE AMARYLLIS",
    price: 259,
    img: "card-orange-flower.jpeg",
    filter: ["popular"],
  });

  const [currentTab, setCurrentTab] = useState(1);

  function changeCurrentTab(id) {
    setCurrentTab(id);
  }

  const [quantity, setQuantity] = useState(
    ...items.map((i) => {
      if (i.id == "23") {
        return i.quantity;
      }
    })
  );

  return (
    <main>
      <section id="product-list-title">
        <div class="container px-3">
          <div class="title">
            <h1>Product List</h1>
            <p>Where flowers are our inspiration</p>
          </div>
        </div>
      </section>
      <section id="orangeAmaryllis">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
              <div class="orange-image d-flex">
                <div class="mini-images">
                  <div class="image">
                    <img src={orange1} alt="" />
                  </div>
                  <div class="image">
                    <img src={orange2} alt="" />
                  </div>
                  <div class="image">
                    <img src={orange3} alt="" />
                  </div>
                  <div class="image">
                    <img src={orange4} alt="" />
                  </div>
                </div>
                <div class="big-image">
                  <div class="image">
                    <img src={orangeBig} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
              <div class="content">
                <h2>Orange Amaryllis</h2>
                <span>${item.price}</span>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Mauris in erat justo. Nullam
                  ac urna eu felis dapibus condimentum sit amet a augue. Sed non
                  neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                  nunc.
                </p>
                <div class="quantityAdd d-flex">
                  <div class="col-lg-7 col-md-12 col-sm-7 p-0">
                    <div class="quantity d-flex justify-content-between">
                      <span>Quantity</span>
                      <div class="quantity-number">
                        <i
                          id="countminus"
                          class="fas fa-caret-left"
                          onClick={() => {
                            quantity &&
                              updateItemQuantity(item.id, quantity - 1);
                            quantity && setQuantity(quantity - 1);
                          }}
                        />
                        <span id="productcount" class="productCount">
                          {quantity ?? 0}
                        </span>
                        <i
                          id="countplus"
                          class="fas fa-caret-right"
                          onClick={() => {
                            quantity &&
                              updateItemQuantity(item.id, quantity + 1);
                            quantity && setQuantity(quantity + 1);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-12 col-sm-5 p-0">
                    <button
                      onClick={() => {
                        addItem(item);
                        setQuantity(quantity ? quantity + 1 : 1);
                      }}
                      type="submit"
                      class="add-cart addBasket2"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div class="product-info">
                  <p>
                    SKU: <span>989873</span>
                  </p>
                  <p>
                    Categories: <span>Various, Exotic</span>
                  </p>
                  <p>
                    Tags: <span>Llilies, Orchids</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-tab-menu">
        <div class="container">
          <div class="row px-3">
            <div class="col-12">
              <div class="menus d-flex">
                <div
                  onClick={() => changeCurrentTab(1)}
                  className={`menu ${currentTab == 1 && "selected"}`}
                  data-id="1a"
                >
                  Description
                </div>
                <div
                  onClick={() => changeCurrentTab(2)}
                  className={`menu ${currentTab == 2 && "selected"}`}
                  data-id="2a"
                >
                  Additional information
                </div>
                <div
                  onClick={() => changeCurrentTab(3)}
                  className={`menu ${currentTab == 3 && "selected"}`}
                  data-id="3a"
                >
                  Reviews (2)
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="contents">
                <div
                  class="content"
                  style={{ display: (currentTab != 1) ? "none" : "block" }} 
                  id="1a"
                >
                  <h3>The power of flowers</h3>
                  <p class="m-0">
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                  </p>
                </div>
                <div
                  class="content"
                  id="2a"
                  style={{ display: (currentTab != 2) ? "none" : "block" }} 
                >
                  <p class="m-0">
                    <strong>Weight:</strong> <span>1 kg</span>
                  </p>
                  <p class="m-0">
                    <strong>Dimensions:</strong> <span>30 x 30 x 50 cm</span>
                  </p>
                </div>
                <div
                  class="content"
                  id="3a"
                  style={{ display: (currentTab != 3) ? "none" : "block" }} 
                >
                  <div class="reviews">
                    <h2>Reviews</h2>
                    <div class="comments">
                      <div class="comment-area mb-3 d-flex">
                        <div class="col-lg-1 col-md-2 col-3 px-2">
                          <div class="image">
                            <img src={expert1} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-11 col-md-10 col-9">
                          <div class="comment">
                            <p class="mb-2">
                              <strong>Joshua Garcia </strong>
                              <span>27.04.2018</span>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Aenean commodo ligula eget dolor.
                              Aenean massa. Cum sociis Theme natoque penatibus
                              et magnis dis parturient montes, nascetur
                              ridiculus mus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="comment-area d-flex">
                        <div class="col-lg-1 col-md-2 col-3 px-2">
                          <div class="image">
                            <img src={expert2} alt="Commenter" />
                          </div>
                        </div>
                        <div class="col-lg-11 col-md-10 col-9">
                          <div class="comment">
                            <p class="mb-2">
                              <strong>Joan Stanley</strong>
                              <span>27.04.2018</span>
                            </p>
                            <p>
                              Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar, hendrerit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add_reviews">
                    <h2>Add a review</h2>
                    <div class="review">
                      <p>
                        Your email address will not be published. Required
                        fields are marked
                        <sup>*</sup>
                      </p>
                      <form action="#" class="form-group">
                        <div>
                          <label>
                            Your review <sup>*</sup>
                          </label>
                          <br />
                          <textarea
                            name="your_review"
                            id="your_review"
                            cols="45"
                            rows="8"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div>
                          <label>
                            Name<sup>*</sup>
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            id="author"
                            name="author"
                            size="30"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div>
                          <label>
                            Email<sup>*</sup>
                          </label>
                          <input
                            class="form-control"
                            type="email"
                            id="email"
                            name="email"
                            size="30"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div>
                          <input type="checkbox" value="yes" id="" name="" />
                        </div>
                        <p>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </p>
                        <input
                          class="button"
                          type="submit"
                          name="submit"
                          id="submit"
                          value="submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="related-products">
        <div class="container p-0">
          <div class="row w-100 m-0 p-0">
            <h2>RELATED PRODUCTS</h2>
            <div class="product-list various" id="4a">
              <div class="row">
                {featuredProductsDef.map((p) => {
                  return (
                    <div class="col-lg-3 col-md-6 col-xs-12">
                      <div class="card">
                        <div class="image">
                          <img
                            src={
                              require(`../../assets/images/Products/${p.img}`)
                                .default
                            }
                            alt={p.name}
                          />
                          {p.isSale ? (
                            <div class="info new">
                              <span>Sale</span>
                            </div>
                          ) : (
                            p.isSold && (
                              <div class="info">
                                <span>Sold</span>
                              </div>
                            )
                          )}
                        </div>
                        <div class="title text-center">
                          <p>{p.name}</p>
                          <div class="add-cart">
                            <p>Read more</p>
                          </div>
                          <div class="price">
                            <span>$</span>
                            <span class="totalPrice">{p.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductList;
