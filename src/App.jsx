import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout/index';
import { Fragment, useEffect } from 'react';
import { CartProvider, useCart } from '~/contexts/CartContext';
import CartOffcanvas from '~/components/CartOffCanvas';
import { getAllCategories, getCart } from '~/untils/ApiHelper'; // Import API

function App() {
    const { setCartItems } = useCart(); // Bây giờ gọi sau khi CartProvider đã bọc ứng dụng

    useEffect(() => {
        const fetchData = async () => {
            const cartRes = await getCart();
            if (cartRes && cartRes.data) {
                setCartItems(cartRes.cart);
            } else {
                setCartItems([]);
            }
            const categoriesRes = await getAllCategories();
            // Lưu categories nếu cần thiết
        };
        fetchData();
    }, [setCartItems]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <CartOffcanvas />
        </Router>
    );
}

export default App;
