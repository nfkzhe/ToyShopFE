import React from "react";
import { useCart } from "~/contexts/CartContext";

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="container mt-5">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.ProductName}</strong>
                <div>Số lượng: {item.quantity}</div>
                <div>Giá: {item.ProductPrice.toLocaleString()} VND</div>
              </div>
              <img src={item.image[0]} alt={item.ProductName} width={60} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
