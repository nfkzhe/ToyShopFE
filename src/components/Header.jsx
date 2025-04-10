import React from 'react';

const Header = () => {
    const handleCurrencyChange = (event) => {
        // Handle currency change
    };

    const handleLanguageChange = (event) => {
        // Handle language change
    };

    return (
        <header id="header" className="header-area style-01 layout-03">
            <div className="header-top bg-main hidden-xs">
                <div className="container">
                    <div className="top-bar left">
                        <ul className="horizontal-menu">
                            <li>
                                <a href="#">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>Organic@company.com
                                </a>
                            </li>
                            <li>
                                <a href="#">Free Shipping for all Order of $99</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar right">
                        <ul className="social-list">
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="horizontal-menu">
                            <li className="horz-menu-item currency">
                                <select name="currency" onChange={handleCurrencyChange} defaultValue="usd">
                                    <option value="eur">€ EUR (Euro)</option>
                                    <option value="usd">$ USD (Dollar)</option>
                                    <option value="gbp">£ GBP (Pound)</option>
                                    <option value="jpy">¥ JPY (Yen)</option>
                                </select>
                            </li>
                            <li className="horz-menu-item lang">
                                <select name="language" onChange={handleLanguageChange} defaultValue="en">
                                    <option value="fr">French (EUR)</option>
                                    <option value="en">English (USD)</option>
                                    <option value="ger">Germany (GBP)</option>
                                    <option value="jp">Japan (JPY)</option>
                                </select>
                            </li>
                            <li>
                                <a href="login.html" className="login-link">
                                    <i className="biolife-icon icon-login"></i>Login/Register
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle biolife-sticky-object">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                            <a href="home-03-green.html" className="biolife-logo">
                                <img
                                    src="assets/images/organic-3-green.png"
                                    alt="biolife logo"
                                    width="135"
                                    height="36"
                                />
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                            <div className="primary-menu">
                                <ul
                                    className="menu biolife-menu clone-main-menu clone-primary-menu"
                                    id="primary-menu"
                                    data-menuname="main menu"
                                >
                                    <li className="menu-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children has-megamenu">
                                        <a href="#" className="menu-name" data-title="Shop">
                                            Shop
                                        </a>
                                        <div className="wrap-megamenu lg-width-900 md-width-750">
                                            <div className="mega-content">{/* Add megamenu content here */}</div>
                                        </div>
                                    </li>
                                    {/* Add other menu items here */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                            <div className="biolife-cart-info">{/* Add cart info here */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
