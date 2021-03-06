import React, {useEffect} from 'react';
import "./header.scoped.scss"
import { useCart } from 'react-use-cart';
import $ from "jquery"

const Header = () => {
    const { addItem } = useCart()
    const {
        items,
        isEmpty,
        totalUniqueItems,
        cartTotal,
        removeItem
    } = useCart()

    useEffect(() => {
           
    
        $(document).ready(function () {
                $('header .navbar .navbar-list ul li a').click(function () {
                    if ($(this).next().attr('class') == 'fas fa-caret-right') {
                        $(this).next().removeClass('fa-caret-right');
                        $(this).next().addClass('fa-caret-down');
                    }
                    else {
                        $(this).next().removeClass('fa-caret-down');
                        $(this).next().addClass('fa-caret-right');
                    }
                    $(this).next().next().slideToggle(500);
                });
            })

            let openSidebar = document.querySelector('.navbar-icon .icon .openSidebar');
            let close = document.querySelector('header .navbar .close')

            openSidebar.addEventListener('click', function () {
                document.body.classList.add('active');
            })

            close.addEventListener('click', function () {
                document.body.classList.remove('active');
            })
  
    },[]);

    return (
        <header class="head">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="logo">
                        <div class="img">
                            <a href="#" style={{height: '25px'}}>
                                <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h2-logo-1.png"
                                    style={{width: '212px', height:'25px'}}  alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-9 display-none">
                    <div class="navbar-icon">
                        <div class="icon">
                            <i class="fas fa-bars openSidebar"></i>
                        </div>
                    </div>
                    <div class="navbar">
                        <div class="close">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="navbar-list">
                            <ul>
                                <li class="home">
                                    <a href="#">Home</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_home">
                                        <ul>
                                            <li><a href="#">Main Home</a></li>
                                            <li><a href="#">Grid Home</a></li>
                                            <li><a href="#">Flower Shop</a></li>
                                            <li><a href="#">Animated Slider</a></li>
                                            <li><a href="#">Metro Showcase</a></li>
                                            <li><a href="#">Carousel Showcase</a></li>
                                            <li><a href="#">Landing</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="pages">
                                    <a href="#">Pages</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_pages ">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">FAQ Page</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="shop">
                                    <a href="#">Shop</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_shop">
                                        <ul>
                                            <li class="product_types">
                                                <a href="#">Product Types</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_product_types">
                                                    <ul>
                                                        <li><a href="#">Standard Product</a></li>
                                                        <li><a href="#">Grouped Product</a></li>
                                                        <li><a href="#">Variable Product</a></li>
                                                        <li><a href="#">Virtual Product</a></li>
                                                        <li><a href="#">External Product</a></li>
                                                        <li><a href="#">Downloadable Product</a></li>
                                                        <li><a href="#">On Sale Product</a></li>
                                                        <li><a href="#">Out of Stock Product</a></li>
                                                        <li><a href="#">New Product</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="shop_pages">
                                                <a href="#">Shop Pages</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_shop_pages ">
                                                    <ul>
                                                        <li><a href="#">My Account</a></li>
                                                        <li><a href="#">Cart</a></li>
                                                        <li><a href="#">Checkout</a></li>
                                                        <li><a href="#">Orders</a></li>
                                                        <li><a href="#">Downloads</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="shop_types">
                                                <a href="#">Shop Types</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_shop_types">
                                                    <ul>
                                                        <li><a href="#">Product List</a></li>
                                                        <li><a href="#">Without Sidebar</a></li>
                                                        <li><a href="#">With Category Filter</a></li>
                                                        <li><a href="#">With Ordering Filter</a></li>
                                                        <li><a href="#">Shop Carousel</a></li>
                                                        <li><a href="#">Product Categories</a></li>
                                                        <li><a href="#">Single Category</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="shop_layouts">
                                                <a href="#">Shop Layouts</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_shop_layouts">
                                                    <ul>
                                                        <li><a href="#">Two Columns Grid</a></li>
                                                        <li><a href="#">Three Columns Grid</a></li>
                                                        <li><a href="#">Four Columns Grid</a></li>
                                                        <li><a href="#">Four Columns Wide</a></li>
                                                        <li><a href="#">Five Columns Wide</a></li>
                                                        <li><a href="#">Six Columns Wide</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="portfolio">
                                    <a href="#">Portfolio</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_portfolio ">
                                        <ul>
                                            <li><a href="#">Standard</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Masonry</a></li>
                                            <li class="portfolio_layouts">
                                                <a href="#">Portfolio Layouts</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_portfolio_layouts ">
                                                    <ul>
                                                        <li><a href="#">Two Columns</a></li>
                                                        <li><a href="#">Three Columns</a></li>
                                                        <li><a href="#">Four Columns</a></li>
                                                        <li><a href="#">Four Columns Wide</a></li>
                                                        <li><a href="#">Five Columns Wide</a></li>
                                                        <li class="portfolio_single">
                                                            <a href="#">Portfolio Single</a>
                                                            <div class="sub_portfolio_single ">
                                                                <ul>
                                                                    <li><a href="#">Small Images</a></li>
                                                                    <li><a href="#">Small Slider</a></li>
                                                                    <li><a href="#">Big Images</a></li>
                                                                    <li><a href="#">Big Slider</a></li>
                                                                    <li><a href="#">Gallery</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="portfolio_single">
                                                <a href="#">Portfolio Single</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_portfolio_single ">
                                                    <ul>
                                                        <li><a href="#">Small Images</a></li>
                                                        <li><a href="#">Small Slider</a></li>
                                                        <li><a href="#">Big Images</a></li>
                                                        <li><a href="#">Big Slider</a></li>
                                                        <li><a href="#">Gallery</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="blog">
                                    <a href="#">Blog</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_blog ">
                                        <ul>
                                            <li><a href="#">Masonry</a></li>
                                            <li><a href="#">Standard</a></li>
                                            <li class="post_types">
                                                <a href="#">Post Types</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_post_types ">
                                                    <ul>
                                                        <li><a href="#">Standard</a></li>
                                                        <li><a href="#">Gallery</a></li>
                                                        <li><a href="#">Link</a></li>
                                                        <li><a href="#">Quote</a></li>
                                                        <li><a href="#">Audio</a></li>
                                                        <li><a href="#">Video</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="elements">
                                    <a href="#">Elements</a><i class="fas fa-caret-right"></i>
                                    <div class="sub_elements ">
                                        <ul>
                                            <li class="classic">
                                                <a href="#">Classic</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_classic ">
                                                    <ul>
                                                        <li><a href="#">Accordions</a></li>
                                                        <li><a href="#">Tabs</a></li>
                                                        <li><a href="#">Buttons</a></li>
                                                        <li><a href="#">Video Button</a></li>
                                                        <li><a href="#">Contact Form</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="infographic">
                                                <a href="#">Infographic</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_infographic ">
                                                    <ul>
                                                        <li><a href="#">Blog List</a></li>
                                                        <li><a href="#">Counters</a></li>
                                                        <li><a href="#">Countdown</a></li>
                                                        <li><a href="#">Google Maps</a></li>
                                                        <li><a href="#">Progress Bar</a></li>
                                                        <li><a href="#">Pie Charts</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="interactive">
                                                <a href="#">Interactive</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_interactive ">
                                                    <ul>
                                                        <li><a href="#">Image Gallery</a></li>
                                                        <li><a href="#">Testimonials</a></li>
                                                        <li><a href="#">Team</a></li>
                                                        <li><a href="#">Banner</a></li>
                                                        <li><a href="#">Shop List</a></li>
                                                        <li><a href="#">Portfolio List</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="typography">
                                                <a href="#">Typography</a><i class="fas fa-caret-right"></i>
                                                <div class="sub_typography ">
                                                    <ul>
                                                        <li><a href="#">Headings</a></li>
                                                        <li><a href="#">Columns</a></li>
                                                        <li><a href="#">Section Title</a></li>
                                                        <li><a href="#">Blockquote</a></li>
                                                        <li><a href="#">Dropcaps</a></li>
                                                        <li><a href="#">Highlights</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <nav>
                        <ul class="d-flex p-0 m-0 justify-content-around">
                            <li class="home">
                                <a href="#" class="selected">Home</a>
                                <div class="sub_home">
                                    <ul>
                                        <li><a href="#">Main Home</a></li>
                                        <li><a href="#">Grid Home</a></li>
                                        <li><a href="#">Flower Shop</a></li>
                                        <li><a href="#">Animated Slider</a></li>
                                        <li><a href="#">Metro Showcase</a></li>
                                        <li><a href="#">Carousel Showcase</a></li>
                                        <li><a href="#">Landing</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="pages">
                                <a href="#">Pages</a>
                                <div class="sub_pages">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">FAQ Page</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="shop">
                                <a href="#">Shop</a>
                                <div class="sub_shop d-flex">
                                    <ul class="product_types">
                                        <h4>Product Types</h4>
                                        <li><a href="#">Standard Product</a></li>
                                        <li><a href="#">Grouped Product</a></li>
                                        <li><a href="#">Variable Product</a></li>
                                        <li><a href="#">Virtual Product</a></li>
                                        <li><a href="#">External Product</a></li>
                                        <li><a href="#">Downloadable Product</a></li>
                                        <li><a href="#">On Sale Product</a></li>
                                        <li><a href="#">Out Of Stock Product</a></li>
                                        <li><a href="#">New Product</a></li>
                                    </ul>
                                    <ul class="shop_pages">
                                        <h4>Shop Pages</h4>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Cart</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Orders</a></li>
                                        <li><a href="#">Downloads</a></li>
                                    </ul>
                                    <ul class="shop_types">
                                        <h4>Shop Types</h4>
                                        <li><a href="productlist.html" target="_blank">Product List</a></li>
                                        <li><a href="#">Without Sidebar</a></li>
                                        <li><a href="#">With Category Filter</a></li>
                                        <li><a href="#">With Ordering Filter</a></li>
                                        <li><a href="#">Shop Carousel</a></li>
                                        <li><a href="#">Product Categories</a></li>
                                        <li><a href="#">Single Category</a></li>

                                    </ul>
                                    <ul class="shop_layouts">
                                        <h4>Shop Layouts</h4>
                                        <li><a href="#">Two Columns Grid</a></li>
                                        <li><a href="#">Three Columns Grid</a></li>
                                        <li><a href="#">Four Columns Grid</a></li>
                                        <li><a href="#">Four Columns Wide</a></li>
                                        <li><a href="#">Five Columns Wide</a></li>
                                        <li><a href="#">Six Columns Wide</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="portfolio">
                                <a href="#">Portfolio</a>
                                <div class="sub_portfolio">
                                    <ul>
                                        <li><a href="#">Standard</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Masonry</a></li>
                                        <li class="portfolio_layouts">
                                            <a href="#">Portfolio Layouts</a><i class="fas fa-chevron-right"></i>
                                            <div class="sub_portfolio_layouts">
                                                <ul>
                                                    <li><a href="#">Two Columns</a></li>
                                                    <li><a href="#">Three Columns</a></li>
                                                    <li><a href="#">Four Columns</a></li>
                                                    <li><a href="#">Four Columns Wide</a></li>
                                                    <li><a href="#">Five Columns Wide</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="portfolio_single">
                                            <a href="#">Portfolio Single</a><i class="fas fa-chevron-right"></i>
                                            <div class="sub_portfolio_single">
                                                <ul>
                                                    <li><a href="#">Small Images</a></li>
                                                    <li><a href="#">Small Slider</a></li>
                                                    <li><a href="#">Big Images</a></li>
                                                    <li><a href="#">Big Slider</a></li>
                                                    <li><a href="#">Gallery</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="blog">
                                <a href="#">Blog</a>
                                <div class="sub_blog">
                                    <ul>
                                        <li><a href="#">Masonry</a></li>
                                        <li><a href="#">Standard</a></li>
                                        <li class="post_types">
                                            <a href="#">Post Types</a><i class="fas fa-chevron-right"></i>
                                            <div class="sub_post_types">
                                                <ul>
                                                    <li><a href="#">Standard</a></li>
                                                    <li><a href="#">Gallery</a></li>
                                                    <li><a href="#">Link</a></li>
                                                    <li><a href="#">Quote</a></li>
                                                    <li><a href="#">Audio</a></li>
                                                    <li><a href="#">Video</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="elements">
                                <a href="#">Elements</a>
                                <div class="sub_elements">
                                    <ul>
                                        <li class="classic">
                                            <i class="fas fa-chevron-left"></i><a href="#">Classic</a>
                                            <div class="sub_classic">
                                                <ul>
                                                    <li><a href="accordions.html" target="_blank">Accordions</a></li>
                                                    <li><a href="tabs.html" target="_blank">Tabs</a></li>
                                                    <li><a href="#">Buttons</a></li>
                                                    <li><a href="#">Video Buttons</a></li>
                                                    <li><a href="#">Contact Form</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="infographic">
                                            <i class="fas fa-chevron-left"></i><a href="#">Infographic</a>
                                            <div class="sub_infographic">
                                                <ul>
                                                    <li><a href="#">Blog Lists</a></li>
                                                    <li><a href="#">Counters</a></li>
                                                    <li><a href="#">Countdown</a></li>
                                                    <li><a href="progressbar.html" target="_blank">Progress Bar</a></li>
                                                    <li><a href="#">Pie Charts</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="interactive">
                                            <i class="fas fa-chevron-left"></i><a href="#">Interactive</a>
                                            <div class="sub_interactive">
                                                <ul>
                                                    <li><a href="#">Image Gallery</a></li>
                                                    <li><a href="#">Testimonials</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Banner</a></li>
                                                    <li><a href="shoplist.html" target="_blank">Shop List</a></li>
                                                    <li><a href="#">Portfolio List</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="typography">
                                            <i class="fas fa-chevron-left"></i><a href="#">Typography</a>
                                            <div class="sub_typography">
                                                <ul>
                                                    <li><a href="#">Headings</a></li>
                                                    <li><a href="">Columns</a></li>
                                                    <li><a href="">Section Title</a></li>
                                                    <li><a href="">Blockquote</a></li>
                                                    <li><a href="">Dropcaps</a></li>
                                                    <li><a href="">Highlights</a></li>
                                                    <li><a href="">Separators</a></li>
                                                    <li><a href="">Custom Font</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-2">
                    <div class="search-basket">
                        <div class="row justify-content-around">
                            <div class="search">
                                <i class="fas fa-search"></i>
                                <div class="searchArea">
                                    <form class="d-flex">
                                        <input type="text" placeholder="Search" />
                                        <button type="submit"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="basket">
                                <a href="#" target="_blank"><i class="fas fa-shopping-bag"></i><sup
                                        id="productCount">{totalUniqueItems}</sup></a>
                                <span class="cart">Cart</span>
                                <span>($</span>
                                <span id="totalPrice">{cartTotal}</span>
                                <span>)</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </header>
    );
}

export default Header;
