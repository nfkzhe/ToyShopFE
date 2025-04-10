import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="contain-product layout-default">
            <div className="product-thumb">
                <a href="#" className="link-to-product">
                    <img src={product.image} alt={product.name} width="270" height="270" className="product-thumnail" />
                </a>
                <a className="lookup btn_call_quickview" href="#">
                    <i className="biolife-icon icon-search"></i>
                </a>
            </div>
            <div className="info">
                <b className="categories">{product.category}</b>
                <h4 className="product-title">
                    <a href="#" className="pr-name">
                        {product.name}
                    </a>
                </h4>
                <div className="price">
                    <ins>
                        <span className="price-amount">
                            <span className="currencySymbol">£</span>
                            {product.price}
                        </span>
                    </ins>
                    <del>
                        <span className="price-amount">
                            <span className="currencySymbol">£</span>
                            {product.oldPrice}
                        </span>
                    </del>
                </div>
                <div className="slide-down-box">
                    <p className="message">All products are carefully selected to ensure food safety.</p>
                    <div className="buttons">
                        <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="btn add-to-cart-btn">
                            <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart
                        </a>
                        <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
