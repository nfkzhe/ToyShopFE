import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../../contexts/CartContext"; // đường dẫn tùy theo cấu trúc project

function ProductItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // hook dùng context
  const VND = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

  const handleQuantityChange = (e) => {
    const val = e.target.value;
    if (!isNaN(val) && val > 0) setQuantity(Number(val));
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // nếu bạn dùng thẻ <a>
    addToCart(item, quantity);
  };

  return (
    <div className="col" style={{ marginRight: 10 }}>
      <div className="product-item" style={{ border: "1px solid #ccc" }}>
        <span className="badge bg-success position-absolute m-3">-30%</span>
        <a href="#" className="btn-wishlist">
          <svg width="24" height="24">
            <use xlinkHref="#heart"></use>
          </svg>
        </a>

        <figure>
          <Link
            to={`/product/detail/${item._id}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 210,
            }}
          >
            <img
              src={item.image?.[0] || "/default.jpg"}
              className="tab-image"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              alt={item.ProductName}
            />
          </Link>
        </figure>

        <h3 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {item.ProductName}
        </h3>
        <span className="qty">{item.ProductQuantity}</span>
        <span className="rating">
          <svg width="24" height="24" className="text-primary">
            <use xlinkHref="#star-solid"></use>
          </svg>{" "}
          4.5
        </span>
        <span className="price">{VND.format(item.ProductPrice)}</span>

        <div className="d-flex align-items-center justify-content-between">
          <QuantitySelector
            quantity={quantity}
            onIncrement={() => setQuantity(quantity + 1)}
            onDecrement={() => quantity > 1 && setQuantity(quantity - 1)}
            onChange={handleQuantityChange}
          />
          <a href="#" className="nav-link" onClick={handleAddToCart}>
            Add to Cart <AiOutlineShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
