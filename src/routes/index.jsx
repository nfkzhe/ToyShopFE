import AddCate from '~/pages/AddCate';
import CartPage from '~/pages/Cart';
import Home from '~/pages/Home';
import LoginPage from '~/pages/Login';
import Product from '~/pages/Product';
import ProductByCate from '~/pages/ProductByCate';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/product/detail/:id', component: Product },
    { path: '/addCate', component: AddCate, layout: null },
    { path: '/cart', component: CartPage },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/danhmuc/:id', component: ProductByCate },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
