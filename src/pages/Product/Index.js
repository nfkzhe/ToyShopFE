import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { getProductDetail } from "~/untils/ApiHelper";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProducts] = useState([]);
  const { id } = useParams();
  const [image, setImage] = useState([]);

  let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const handleAddToCart = () => {
    console.log("Add to cart");
  };

  const getDetail = useCallback(async () => {
    try {
      const response = await getProductDetail(id);
      if( response && response.data) {
        setProducts(response.data);
        setImage(response.data.image[0])
      }
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    getDetail();
    return () => {}; // cleanup
  }, [getDetail]);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(Number(newQuantity));
    }
  };

  const incrementQuantity = () => {
    if (quantity >= product.ProductQuantity) {
      setQuantity(product.ProductQuantity);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleChooseImg = (item) => {
    setImage(item)
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-6 bg-white shadow-md">
          <div className="product-item row">
            <div className="col-lg-6">
              <img
                alt={product.ProductName}
                className="img-fluid"
                src={image ? image : product.image[0]}
              />
              <div className="mt-4 d-flex row">
                <Slider
                  {...{
                    arrows: true,
                    dots: false,
                    infinite: false,
                    speed: 400,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    // Add any other settings you need
                  }}
                >
                    {product.image?.map((img) => (
                      <div className="col ">
                      <img
                        alt="Sweet Potatoes 1"
                        className="w-20 h-20"
                        src={img}
                        style={{
                          maxHeight: 100,
                          maxWidth: 100,
                          marginRight: 10,
                        }}
                        onClick={() => {
                          handleChooseImg(img)
                        }}
                      />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text-2xl font-bold">{product.ProductName}</h2>
              <div className="d-flex align-items-center mt-2">
                <span className="rating text-primary">★★★★☆</span>
                <span className="rating ml-2 text-gray-600"> (0 Reviews)</span>
              </div>
              <div className="d-flex align-items-center mt-1">
                <span className="ml-2 text-gray-600">Mã SP: {product._id}</span>
              </div>
              <div className="d-flex align-items-center mt-1">
                <span className="ml-2 font-bold text-black">
                  Đã bán : {product.sold}
                </span>
              </div>
              <p className="mt-0 text-gray-700">{product.ProductDes}</p>
              <p className="mt-1 price">Giá:{VND.format(product.ProductPrice)}</p>
              <div className="mt-0">
                <label className="block text-gray-700" htmlFor="quantity">
                  Sẵn có : {product.ProductQuantity}
                </label>
                <div className="input-group">
                  <button
                    className="btn btn-danger"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input
                    className="w-25"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button
                    className="btn btn-success"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4 d-flex flex-row">
                <button className="btn btn-primary">
                  Thêm vào giỏ hàng <AiOutlineShoppingCart />
                </button>
              </div>
              <div className="mt-4 d-flex flex-row">
                <ul className=" d-flex flex-row list-group">
                  <li className="list-group-item">
                    <img
                      src="/images/card1.jpg"
                      alt=""
                      width="51"
                      height="36"
                    />
                  </li>
                  <li className="list-group-item">
                    <img
                      src="/images/card2.jpg"
                      alt=""
                      width="51"
                      height="36"
                    />
                  </li>
                  <li className="list-group-item ">
                    <img
                      src="/images/card3.jpg"
                      alt=""
                      width="51"
                      height="36"
                    />
                  </li>
                  <li className="list-group-item">
                    <img
                      src="/images/card4.jpg"
                      alt=""
                      width="51"
                      height="36"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
};

export default ProductDetail;
