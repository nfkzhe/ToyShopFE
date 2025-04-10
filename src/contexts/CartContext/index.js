import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // 👉 Thêm phần tính tổng tiền ở đây
  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = item?.quantity ?? 0;
    const price = item?.ProductPrice ?? 0;
    return total + quantity * price;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}