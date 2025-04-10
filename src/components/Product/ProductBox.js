import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick"; // Import react-slick
import ProductItem from ".";

function ProductBox({products ,topProducts }) {
    return (       
    <section className="py-5">
      <div className="Product-box sm-margin-top-96px">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="advance-product-box">
                  <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                    <h3 className="title">Deals of the day</h3>
                  </div>
                  <Slider {...{
                    arrows: true,
                    dots: false,
                    infinite: false,
                    speed: 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // Add any other settings you need
                  }}>
                    {products.map((product) => (
                      <div key={product._id}>
                        <ProductItem item={product} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="advance-product-box">
                  <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                    <h3 className="title">Top sản phẩm bán chạy</h3>
                  </div>
                  <Slider {...{
                    arrows: true,
                    dots: false,
                    infinite: false,
                    speed: 400,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // Add any other settings you need
                  }}>
                    {topProducts.map((topProducts) => (
                      <div key={topProducts._id}>
                        <ProductItem item={topProducts} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section> );
}

export default ProductBox;