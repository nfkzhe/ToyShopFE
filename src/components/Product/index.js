import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ProductItem({ item }) {
  const navigate = useNavigate();
  let VND = new Intl.NumberFormat('vi-VN', {style: 'currency',currency: 'VND'})
  // Khởi tạo state cho số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    // Kiểm tra nếu giá trị nhập vào là một số hợp lệ
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(Number(newQuantity));
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    
    <div className="col" style={{ marginRight: 10 }}>
        <div className="product-item" style={{ border: "1px solid #ccc" }} onClick={()=> {
          navigate("/product/detail/" + item._id, { id:  item._id  })
        }}>
          <span className="badge bg-success position-absolute m-3">-30%</span>
          <a href="#" className="btn-wishlist">
            <svg width="24" height="24">
              <use xlinkHref="#heart"></use>
            </svg>
          </a>
          <figure>
            <div title="Product Title">
              <img src={item.image} className="tab-image" />
            </div>
          </figure>
          <h3>{item.ProductName}</h3>
          <span className="qty">{item.ProductQuantity}</span>
          <span className="rating">
            <svg width="24" height="24" className="text-primary">
              <use xlinkHref="#star-solid"></use>
            </svg>{" "}
            4.5
          </span>
          <span className="price">{VND.format(item.ProductPrice)}</span>
          <div className="d-flex align-items-center justify-content-between">
            <div className="input-group product-qty">
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-left-minus btn btn-danger btn-number"
                  data-type="minus"
                  onClick={decrementQuantity}
                >
                  <svg width="16" height="16">
                    <use xlinkHref="#minus"></use>
                  </svg>
                </button>
              </span>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="form-control input-number"
                value={quantity}  // Giá trị động từ state
                onChange={handleQuantityChange}  // Cập nhật giá trị khi thay đổi
              />
              <span className="input-group-btn">
                <button
                  type="button"
                  className="quantity-right-plus btn btn-success btn-number"
                  data-type="plus"
                  onClick={incrementQuantity}
                >
                  <svg width="16" height="16">
                    <use xlinkHref="#plus"></use>
                  </svg>
                </button>
              </span>
            </div>
            <a href="#" className="nav-link">
              Add to Cart <AiOutlineShoppingCart />
            </a>
          </div>
        </div>
    </div>
  );
}

export default ProductItem;
