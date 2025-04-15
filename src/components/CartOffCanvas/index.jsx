import { useCart } from "~/contexts/CartContext";
import { Link } from "react-router-dom";

function CartOffcanvas() {
  const { cartItems, totalPrice } = useCart();
  console.log("Giỏ hàng nè: ", cartItems);
  return (
    <div
      className="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title mx-auto">🛒 Giỏ hàng</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <p className="text-center text-muted">
            Không có sản phẩm nào trong giỏ hàng.
          </p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item) => {
                const quantity = item?.quantity ?? 0;
                const price = item?.ProductPrice ?? 0;
                const total = (quantity * price).toLocaleString();
                const image = item?.image?.[0] || "/images/default.png";

                return (
                  <li
                    key={item._id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <img
                      src={image}
                      alt={item.ProductName || "Sản phẩm"}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                        borderRadius: 8,
                        marginRight: 10,
                      }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1" style={{ fontSize: "0.9rem" }}>
                        {item.ProductName || "Tên sản phẩm"}
                      </h6>
                      <small className="text-muted">
                        SL: {quantity} x {price.toLocaleString()}₫
                      </small>
                    </div>
                    <span className="text-end fw-bold">{total}₫</span>
                  </li>
                );
              })}

              <li className="list-group-item d-flex justify-content-between">
                <strong>Tổng cộng</strong>
                <strong>{totalPrice.toLocaleString()}₫</strong>
              </li>
            </ul>

            <Link to="/cart" className="btn btn-primary w-100">
              Đi tới trang giỏ hàng
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CartOffcanvas;
