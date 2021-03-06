import React from 'react';
import "./footer.scoped.scss"
import visacard from "../../assets/images/Footer/visa-card.png"

const Footer = () => {
    return (
        <footer>
        <div class="container">
            <div class="footer-items pb-5">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-item pt-3">
                            <h6>CUSTOMER SERVICE</h6>
                            <ul class="p-0 mt-4">
                                <li class="pb-1"><a href="#">Help & Contact Us</a></li>
                                <li class="pb-1"><a href="#">Returns & Refunds</a></li>
                                <li class="pb-1"><a href="#">Online Stores</a></li>
                                <li class="pb-1"><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-item pt-3">
                            <h6>COMPANY</h6>
                            <ul class="p-0 mt-4">
                                <li class="pb-1"><a href="#">About Us</a></li>
                                <li class="pb-1"><a href="#">Blog</a></li>
                                <li class="pb-1"><a href="#">Order Tracking</a></li>
                                <li class="pb-1"><a href="#">FAQ Page</a></li>
                                <li class="pb-1"><a href="#">Contact Us</a></li>
                                <li class="pb-1"><a href="#">Login</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-item pt-3">
                            <h6>SOCIAL MEDIA</h6>
                            <ul class="p-0 mt-4">
                                <li class="pb-1"><a href="#">Twitter</a></li>
                                <li class="pb-1"><a href="#">Instagram</a></li>
                                <li class="pb-1"><a href="#">Tumblr</a></li>
                                <li class="pb-1"><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-item pt-3">
                            <h6>ARCHIVE</h6>
                            <ul class="p-0 mt-4">
                                <li class="pb-1"><a href="#">Designer Shoes</a></li>
                                <li class="pb-1"><a href="#">Gallery</a></li>
                                <li class="pb-1"><a href="#">Pricing</a></li>
                                <li class="pb-1"><a href="#">Feature Index</a></li>
                                <li class="pb-1"><a href="#">Login</a></li>
                                <li class="pb-1"><a href="#">Help & Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright pt-3 d-flex justify-content-between">
                <div class="copyright-title pb-3">
                    <span>Powered by <a href="#">Mikado Themes</a> 2018</span>
                </div>
                <div class="img pb-3">
                    <a href="#">
                        <img src={visacard} alt="" />
                    </a>
                </div>
                <div class="social-medias pb-3">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>
    </footer> 
    );
}

export default Footer;
