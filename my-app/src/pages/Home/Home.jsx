import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./home.scoped.scss";
import laughing from "../../assets/images/Video/laughing.jpeg";
import unheart from "../../assets/images/Video/uheart.png";
import expert1 from "../../assets/images/Experts/Expert1.png";
import expert2 from "../../assets/images/Experts/expert2.png";
import expert3 from "../../assets/images/Experts/expert3.png";
import expert4 from "../../assets/images/Experts/expert4.png";
import joingirls from "../../assets/images/Join/JoinGirls.jpeg";
import buketnew from "../../assets/images/Blog/buketnew.jpeg";
import girlbuket from "../../assets/images/Blog/girlbuket.jpeg";
import whitetulips from "../../assets/images/Blog/whiteTulips.jpeg";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import { filtersDef } from "../../mocks/filters";
import { productsDef } from "../../mocks/products";
import { useCart } from "react-use-cart";


const Home = () => {
  const [filters, updateFilters] = useState(filtersDef);
  const [products, setProducts] = useState([]);
  const { addItem } = useCart()

  useEffect(() => {
    setProducts(productsDef);
  }, []);

  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: true,
          };
        } else {
          return {
            ...f,
            isChecked: false,
          };
        }
      })
    );

    if (checked && value !== "all") {
      var newProducts = productsDef.filter((p) =>
        p.filter.some((f) => f == value)
      );
      setProducts(newProducts);
    } else if (checked && value === "all") {
      setProducts(productsDef);
    }
  };

  return (
    <>
      <Slider />
      <section id="products-card">
        <div class="container p-0">
          <div class="row justify-content-between w-100 m-0 p-0">
            <div class="productAllNav d-flex w-100 justify-content-between">
              <div class="products-navbar">
                <h6>
                  Categories <i class="fas fa-caret-down" />
                </h6>
                <ul>
                  {filters.map((f) => (
                    <li>
                      <label for={f.label}>
                        <a
                          for={f.label}
                          class="tabmenu"
                          data-id="1a"
                          style={f.isChecked ? { color: "#f34f3f" } : {}}
                        >
                          {f.label}
                        </a>
                      </label>

                      <input
                        style={{ display: "none" }}
                        id={f.label}
                        type="checkbox"
                        value={f.label}
                        onChange={onFilter}
                        checked={f.isChecked}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div class="filter">
                <span>Filter{""}</span>
                <i class="fas fa-caret-down" />
                <div class="sub-filter d-flex">
                  <ul>
                    <h4>Sort By</h4>
                    <li>
                      <a href="#">Default</a>
                    </li>
                    <li>
                      <a href="#">Popularity</a>
                    </li>
                    <li>
                      <a href="#">Newness</a>
                    </li>
                    <li>
                      <a href="#">Price: Low To High</a>
                    </li>
                    <li>
                      <a href="#">Price: High To Low</a>
                    </li>
                  </ul>
                  <ul>
                    <h4>Price Range</h4>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">$0-$10</a>
                    </li>
                    <li>
                      <a href="#">$10-$20</a>
                    </li>
                    <li>
                      <a href="#">$20-$30</a>
                    </li>
                    <li>
                      <a href="#">$30-$40</a>
                    </li>
                    <li>
                      <a href="#">40$+</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="allProducts">
        <div class="container p-0">
          <div class="row w-100 m-0 p-0">
            <div class="product-list all" id="1a">
              <div
                class="row"
                style={{ justifyContent: "center", width: "100%" }}
              >
                {products.map((p) => (
                  <div key={p.id} class="col-lg-3 col-md-6 col-xs-12">
                    <div key={p.id} class="card">
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
                        <div  onClick={() => addItem(p)} class="add-cart">
                          <p class="addBasket">Add to cart</p>
                        </div>
                        <div class="price">
                          <span>$</span>
                          <span class="totalPrice">259</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="video">
                <div class="image">
                  <a href="https://www.youtube.com/watch?time_continue=1v=K-0cjGCNYfs_ga=2.5746801.313254065.1639462748-1123183431.1639462748">
                    <img src={laughing} alt="Video" />
                    <div class="play">
                      <i class="fas fa-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="content">
                <h2>
                  Suprise Your <span>Valentine!</span> Let us arrange a smile.
                </h2>
                <p>
                  Where flowers are our inspiration to create lasting memories.
                  Whatever the occasion...
                </p>
                <div class="title">
                  <div class="img">
                    <img src={unheart} />
                  </div>
                  <p>Hand picked just for you.</p>
                  <br />

                  <div class="img">
                    <img src={unheart} />
                  </div>
                  <p>Unique flower arrangements</p>
                  <br />

                  <div class="img">
                    <img src={unheart} />
                  </div>
                  <p>Best way to say you care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertArea">
        <div class="container">
          <div class="text text-center">
            <div class="col-lg-6 col-12 m-auto">
              <h2 class="mb-4">Flower Experts</h2>
              <p>
                A perfect blend of creativity, energy, communication, happiness
                and love. Let us arrange a smile for you.
              </p>
            </div>
          </div>
          <div class="experts">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="expert text-center">
                  <div class="img">
                    <img src={expert1} alt="CRYSTAL BROOKS" />
                  </div>
                  <div class="content p-4">
                    <h6 class="m-0">CRYSTAL BROOKS</h6>
                    <span>Florist</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="expert text-center">
                  <div class="img">
                    <img src={expert2} alt="SHIRLEY HARRIS" />
                  </div>
                  <div class="content p-4">
                    <h6 class="m-0">SHIRLEY HARRIS</h6>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="expert text-center">
                  <div class="img">
                    <img src={expert3} alt="BEVERLY CLARK" />
                  </div>
                  <div class="content p-4">
                    <h6 class="m-0">BEVERLY CLARK</h6>
                    <span>Florist</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="expert text-center">
                  <div class="img">
                    <img src={expert4} alt="AMANDA WATKINS" />
                  </div>
                  <div class="content p-4">
                    <h6 class="m-0">AMANDA WATKINS</h6>
                    <span>Florist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" style={{ backgroundImage: `url(${joingirls})` }}>
        <div class="container">
          <div class="join-us text-center">
            <div class="title mb-4">
              <h3>Join The Colorful Bunch!</h3>
            </div>
            <div class="searchArea d-flex justify-content-center">
              <div class="search-input">
                <input
                  id="emailAddress"
                  type="email"
                  name="email-address"
                  placeholder="Email Address"
                />
              </div>
              <div class="search-button">
                <button id="submitEmail" class="submit" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fromOurBlog">
        <div class="container">
          <div class="blogTitle text-center">
            <div class="col-lg-6 col-12 m-auto">
              <h2 class="mb-4">From our Blog</h2>
              <p>
                A perfect blend of creativity, energy, communication, happiness
                and love. Let us arrange a smile for you.
              </p>
            </div>
          </div>

          <div class="blog-cards">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="b-card">
                  <div class="img">
                    <a href="#">
                      <img src={buketnew} alt="" />
                    </a>
                    <div class="date">
                      <a href="#">27.04.2018</a>
                    </div>
                  </div>
                  <div class="content text-center p-4">
                    <h5>
                      <a href="#">Flower Power</a>
                    </h5>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="b-card">
                  <div class="img">
                    <a href="#">
                      <img src={girlbuket} alt="" />
                    </a>
                    <div class="date">
                      <a href="#">03.05.2018</a>
                    </div>
                  </div>
                  <div class="content text-center p-4">
                    <h5>
                      <a href="#">Local Florists</a>
                    </h5>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="b-card">
                  <div class="img">
                    <a href="#">
                      <img src={whitetulips} alt="" />
                    </a>
                    <div class="date">
                      <a href="#">03.05.2018</a>
                    </div>
                  </div>
                  <div class="content text-center p-4">
                    <h5>
                      <a href="#">Flower Beauty</a>
                    </h5>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomSlider />
    </>
  );
};

export default Home;
