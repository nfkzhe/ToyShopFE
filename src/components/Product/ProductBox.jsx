import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import react-slick
import ProductItem from ".";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";

function ProductBox({ products, topProducts }) {
  const sliderRef = useRef(null);
  const dealsSliderRef = useRef(null);

  const sliderSettings = {
    arrows: false, // Tắt arrows mặc định để dùng nút custom
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="py-5">
      <div className="Product-box sm-margin-top-96px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-6">
              <div className="advance-product-box">
                <div className="biolife-title-box bold-style biolife-title-box__bold-style d-flex justify-content-between">
                  <h5 className="title">Deals of the day</h5>
                  <div className=" d-flex justify-content-end">
                  <button
                    onClick={() => dealsSliderRef.current?.slickPrev()}
                    className="btn me-2"
                  >
                    <BsArrowLeft />
                  </button>
                  <button
                    onClick={() => dealsSliderRef.current?.slickNext()}
                    className="btn"
                  >
                    <BsArrowRight />
                  </button>
                  </div>
                </div>
                <Slider
                  ref={dealsSliderRef}
                  {...{
                    arrows: true,
                    dots: false,
                    infinite: false,
                    speed: 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }}
                >
                  {products?.length > 0 &&
                    products.map((product) => (
                      <div key={product._id}>
                        <ProductItem item={product} />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-6">
              <div className="advance-product-box">
                <div className="biolife-title-box bold-style biolife-title-box__bold-style d-flex justify-content-between">
                  <h3 className="title">Top sản phẩm bán chạy</h3>
                  <div className=" d-flex justify-content-end">
                    <button
                      onClick={() => sliderRef.current?.slickPrev()}
                      className="btn me-2"
                    >
                      <BsArrowLeft />
                    </button>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      className="btn"
                    >
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
                <Slider ref={sliderRef} {...sliderSettings}>
                  {topProducts.map((product) => (
                    <div key={product._id} className="row">
                      <ProductItem item={product} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductBox;
