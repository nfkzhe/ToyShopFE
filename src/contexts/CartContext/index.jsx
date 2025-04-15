import { createContext, useContext, useState, useEffect } from 'react';
import { getCart, addCart } from '~/untils/ApiHelper';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Lấy cart từ server khi load
    useEffect(() => {
        const fetchCart = async () => {
            const res = await getCart();
            setCartItems(res.cart || []);
        };
        fetchCart();
    }, []);

    // Cập nhật server mỗi khi cartItems thay đổi
    useEffect(() => {
        if (cartItems.length > 0) {
            addCart(cartItems); // Gửi giỏ hàng lên server khi có sự thay đổi
        }
    }, [cartItems]);

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product, quantity) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item._id === product._id);
            if (existing) {
                return prev.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item,
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updateQuantity = (productId, newQuantity) => {
        setCartItems((prev) => {
            const updatedCart = prev.map((item) =>
                item._id === productId ? { ...item, quantity: newQuantity } : item,
            );
            addCart(updatedCart); // Gửi giỏ hàng đã thay đổi lên server
            return updatedCart; // Trả về giỏ hàng đã thay đổi
        });
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCartItems((prev) => {
            const updatedCart = prev.filter((item) => item._id !== productId); // Lọc sản phẩm đã xóa
            addCart(updatedCart); // Gửi giỏ hàng mới lên server
            return updatedCart; // Trả về giỏ hàng đã thay đổi
        });
    };

    // Tính tổng giá trị của giỏ hàng
    const totalPrice = cartItems.reduce((sum, item) => sum + item.ProductPrice * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalPrice, setCartItems }}
        >
            {children}
        </CartContext.Provider>
    );
}
