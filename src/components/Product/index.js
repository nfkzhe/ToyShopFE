import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../../contexts/CartContext";

function ProductItem({ item }) {

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const VND = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

  const handleQuantityChange = (e) => {
    const val = e.target.value;
    if (!isNaN(val) && val > 0) setQuantity(Number(val));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(item, quantity);
  };

  return (
    <div className="product-item h-100 p-3 border rounded position-relative me-4">
      <span className="badge bg-success position-absolute m-2">-30%</span>
      <a href="#" className="btn-wishlist position-absolute top-0 end-0 m-2">
        <svg width="24" height="24">
          <use xlinkHref="#heart"></use>
        </svg>
      </a>

      <figure
        style={{
          height: 180,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Link to={`/product/detail/${item._id}`}>
          <img
            src={item.image?.[0] || "/default.jpg"}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
            alt={item.ProductName}
          />
        </Link>
      </figure>

      <h3
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: 16,
          marginTop: 10,
        }}
      >
        {item.ProductName}
      </h3>
      <span className="qty d-block">Kho: {item.ProductQuantity}</span>
      <span className="rating d-block mb-2">
        <svg width="16" height="16" style={{ color: "#ffc107" }} className="me-1">
          <use xlinkHref="#star-solid"></use>
        </svg>
        4.5
      </span>
      <span className="price fw-bold mb-2 d-block">{VND.format(item.ProductPrice)}</span>

      <div className="d-flex align-items-center justify-content-between">
        <QuantitySelector
          quantity={quantity}
          onIncrement={() => setQuantity(quantity + 1)}
          onDecrement={() => quantity > 1 && setQuantity(quantity - 1)}
          onChange={handleQuantityChange}
        />
        <a href="#" className="nav-link" onClick={handleAddToCart}>
          <AiOutlineShoppingCart /> Thêm
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
