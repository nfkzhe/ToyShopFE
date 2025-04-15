import React from "react";
import { useCart } from "~/contexts/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e, productId) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(productId, value);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.ProductPrice * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image?.[0] || "/default.jpg"}
                    alt={item.ProductName}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }}
                    className="me-3"
                  />
                  <div>
                    <strong>{item.ProductName}</strong>
                    <div className="d-flex align-items-center gap-2 mt-2">
                    <label>Số lượng:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item._id)}
                      style={{ width: 60 }}
                    />
                  </div>
                    <div>
                      Giá:{" "}
                      {item.ProductPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-outline-danger mt-3 mt-md-0"
                  onClick={() => removeFromCart(item._id)}
                >
                  <AiOutlineDelete /> Xóa
                </button>
              </li>
            ))}
          </ul>

          <div className="text-end">
            <h4>
              Tổng tiền:{" "}
              <span className="text-primary">
                {totalPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </h4>
            <button className="btn btn-primary mt-3">Thanh toán</button>
          </div>  
        </>
      )}
    </div>
  );
}

export default CartPage;
