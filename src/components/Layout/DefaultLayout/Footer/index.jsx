import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <footer id="footer" className="footer layout-03">
                <div className="footer-content background-footer-03">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-9">
                                <section className="footer-item">
                                    <a href="home-03-green.html" className="logo footer-logo">
                                        <img
                                            src="assets/images/organic-3-green.png"
                                            alt="biolife logo"
                                            width="135"
                                            height="36"
                                        />
                                    </a>
                                    <div className="footer-phone-info">
                                        <i className="biolife-icon icon-head-phone"></i>
                                        <p className="r-info">
                                            <span>Got Questions ?</span>
                                            <span>(700)  9001-1909 (900) 689 -66</span>
                                        </p>
                                    </div>
                                    <div className="newsletter-block layout-01">
                                        <h4 className="title">Newsletter Signup</h4>
                                        <div className="form-content">
                                            <form action="#" name="new-letter-foter">
                                                <input
                                                    type="email"
                                                    className="input-text email"
                                                    value=""
                                                    placeholder="Your email here..."
                                                />
                                                <button type="submit" className="bnt-submit" name="ok">
                                                    Sign up
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                                <section className="footer-item">
                                    <h3 className="section-title">Useful Links</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="wrap-custom-menu vertical-menu-2">
                                                <ul className="menu">
                                                    <li>
                                                        <a href="#">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">About Our Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Secure Shopping</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Delivery infomation</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Our Sitemap</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="wrap-custom-menu vertical-menu-2">
                                                <ul className="menu">
                                                    <li>
                                                        <a href="#">Who We Are</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Our Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Projects</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contacts Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Innovation</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Testimonials</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                                <section className="footer-item">
                                    <h3 className="section-title">Transport Offices</h3>
                                    <div className="contact-info-block footer-layout xs-padding-top-10px">
                                        <ul className="contact-lines">
                                            <li>
                                                <p className="info-item">
                                                    <i className="biolife-icon icon-location"></i>
                                                    <b className="desc">
                                                        7563 St. Vicent Place, Glasgow, Greater Newyork NH7689, UK{' '}
                                                    </b>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="info-item">
                                                    <i className="biolife-icon icon-phone"></i>
                                                    <b className="desc">Phone: (+067) 234 789 (+068) 222 888</b>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="info-item">
                                                    <i className="biolife-icon icon-letter"></i>
                                                    <b className="desc">Email: contact@company.com</b>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="info-item">
                                                    <i className="biolife-icon icon-clock"></i>
                                                    <b className="desc">Hours: 7 Days a week from 10:00 am</b>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="biolife-social inline">
                                        <ul className="socials">
                                            <li>
                                                <a href="#" title="twitter" className="socail-btn">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="facebook" className="socail-btn">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="pinterest" className="socail-btn">
                                                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="youtube" className="socail-btn">
                                                    <i className="fa fa-youtube" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="instagram" className="socail-btn">
                                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="separator sm-margin-top-62px xs-margin-top-40px"></div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="copy-right-text">
                                    <p>
                                        <a href="templateshub.net">Templates Hub</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="payment-methods">
                                    <ul>
                                        <li>
                                            <a href="#" className="payment-link">
                                                <img src="assets/images/card1.jpg" width="51" height="36" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-link">
                                                <img src="assets/images/card2.jpg" width="51" height="36" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-link">
                                                <img src="assets/images/card3.jpg" width="51" height="36" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-link">
                                                <img src="assets/images/card4.jpg" width="51" height="36" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-link">
                                                <img src="assets/images/card5.jpg" width="51" height="36" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="mobile-footer">
                <div className="mobile-footer-inner">
                    <div className="mobile-block block-menu-main">
                        <a
                            className="menu-bar menu-toggle btn-toggle"
                            data-object="open-mobile-menu"
                            href="javascript:void(0)"
                        >
                            <span className="fa fa-bars"></span>
                            <span className="text">Menu</span>
                        </a>
                    </div>
                    <div className="mobile-block block-sidebar">
                        <a
                            className="menu-bar filter-toggle btn-toggle"
                            data-object="open-mobile-filter"
                            href="javascript:void(0)"
                        >
                            <i className="fa fa-sliders" aria-hidden="true"></i>
                            <span className="text">Sidebar</span>
                        </a>
                    </div>
                    <div className="mobile-block block-minicart">
                        <a className="link-to-cart" href="#">
                            <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                            <span className="text">Cart</span>
                        </a>
                    </div>
                    <div className="mobile-block block-global">
                        <a
                            className="menu-bar myaccount-toggle btn-toggle"
                            data-object="global-panel-opened"
                            href="javascript:void(0)"
                        >
                            <span className="fa fa-globe"></span>
                            <span className="text">Global</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mobile-block-global">
                <div className="biolife-mobile-panels">
                    <span className="biolife-current-panel-title">Global</span>
                    <a className="biolife-close-btn" data-object="global-panel-opened" href="#">
                        &times;
                    </a>
                </div>
                <div className="block-global-contain">
                    <div className="glb-item my-account">
                        <b className="title">My Account</b>
                        <ul className="list">
                            <li className="list-item">
                                <a href="#">Login/register</a>
                            </li>
                            <li className="list-item">
                                <a href="#">
                                    Wishlist <span className="index">(8)</span>
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="#">Checkout</a>
                            </li>
                        </ul>
                    </div>
                    <div className="glb-item currency">
                        <b className="title">Currency</b>
                        <ul className="list">
                            <li className="list-item">
                                <a href="#">€ EUR (Euro)</a>
                            </li>
                            <li className="list-item">
                                <a href="#">$ USD (Dollar)</a>
                            </li>
                            <li className="list-item">
                                <a href="#">£ GBP (Pound)</a>
                            </li>
                            <li className="list-item">
                                <a href="#">¥ JPY (Yen)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="glb-item languages">
                        <b className="title">Language</b>
                        <ul className="list inline">
                            <li className="list-item">
                                <a href="#">
                                    <img src="assets/images/languages/us.jpg" alt="flag" width="24" height="18" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="#">
                                    <img src="assets/images/languages/fr.jpg" alt="flag" width="24" height="18" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="#">
                                    <img src="assets/images/languages/ger.jpg" alt="flag" width="24" height="18" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="#">
                                    <img src="assets/images/languages/jap.jpg" alt="flag" width="24" height="18" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="biolife-quickview-block" className="biolife-quickview-block">
                <div className="quickview-container">
                    <a href="#" className="btn-close-quickview" data-object="open-quickview-block">
                        <span className="biolife-icon icon-close-menu"></span>
                    </a>
                    <div className="biolife-quickview-inner">
                        <div className="media">
                            <ul
                                className="biolife-carousel quickview-for"
                                data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".quickview-nav"}'
                            >
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_01.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_02.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_03.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_04.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_05.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_06.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/detail_07.jpg"
                                        alt=""
                                        width="500"
                                        height="500"
                                    />
                                </li>
                            </ul>
                            <ul
                                className="biolife-carousel quickview-nav"
                                data-slick='{"arrows":true,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":3,"slidesToScroll":1,"asNavFor":".quickview-for"}'
                            >
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_01.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_02.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_03.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_04.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_05.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_06.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="assets/images/details-product/thumb_07.jpg"
                                        alt=""
                                        width="88"
                                        height="88"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="product-attribute">
                            <h4 className="title">
                                <a href="#" className="pr-name">
                                    National Fresh Fruit
                                </a>
                            </h4>
                            <div className="rating">
                                <p className="star-rating">
                                    <span className="width-80percent"></span>
                                </p>
                            </div>

                            <div className="price price-contain">
                                <ins>
                                    <span className="price-amount">
                                        <span className="currencySymbol">£</span>85.00
                                    </span>
                                </ins>
                                <del>
                                    <span className="price-amount">
                                        <span className="currencySymbol">£</span>95.00
                                    </span>
                                </del>
                            </div>
                            <p className="excerpt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis
                                ut mauris eget justo dictum tempus sed vel tellus.
                            </p>
                            <div className="from-cart">
                                <div className="qty-input">
                                    <input
                                        type="text"
                                        name="qty12554"
                                        value="1"
                                        data-max_value="20"
                                        data-min_value="1"
                                        data-step="1"
                                    />
                                    <a href="#" className="qty-btn btn-up">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="qty-btn btn-down">
                                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="buttons">
                                    <a href="#" className="btn add-to-cart-btn btn-bold">
                                        add to cart
                                    </a>
                                </div>
                            </div>

                            <div className="product-meta">
                                <div className="product-atts">
                                    <div className="product-atts-item">
                                        <b className="meta-title">Categories:</b>
                                        <ul className="meta-list">
                                            <li>
                                                <a href="#" className="meta-link">
                                                    Milk & Cream
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="meta-link">
                                                    Fresh Meat
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="meta-link">
                                                    Fresh Fruit
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-atts-item">
                                        <b className="meta-title">Tags:</b>
                                        <ul className="meta-list">
                                            <li>
                                                <a href="#" className="meta-link">
                                                    food theme
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="meta-link">
                                                    organic food
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="meta-link">
                                                    organic theme
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-atts-item">
                                        <b className="meta-title">Brand:</b>
                                        <ul className="meta-list">
                                            <li>
                                                <a href="#" className="meta-link">
                                                    Fresh Fruit
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span className="sku">SKU: N/A</span>
                                <div className="biolife-social inline add-title">
                                    <span className="fr-title">Share:</span>
                                    <ul className="socials">
                                        <li>
                                            <a href="#" title="twitter" className="socail-btn">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="facebook" className="socail-btn">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="pinterest" className="socail-btn">
                                                <i className="fa fa-pinterest" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="youtube" className="socail-btn">
                                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="instagram" className="socail-btn">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a className="btn-scroll-top">
                <i className="biolife-icon icon-left-arrow"></i>
            </a>
        </div>
    );
};

export default Footer;
