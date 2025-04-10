import AddCate from "~/pages/AddCate/Index";
import Home from "~/pages/Home/Index";
import Product from "~/pages/Product/Index";
import Profile from "~/pages/Profile/Index";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/product/detail/:id', component: Product },
    { path: '/addCate', component: AddCate, layout: null }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
