import About from "../components/frontend/About";
import Contact from "../components/frontend/Contact";
import Home from "../components/frontend/Home";
import Page403 from '../components/errors/Page403';
import Page404 from '../components/errors/Page404';
import Register from '../components/frontend/auth/Register';
import Login from '../components/frontend/auth/Login';
import ViewCategory from '../components/frontend/collections/ViewCategory';
import ViewProduct from '../components/frontend/collections/ViewProduct';
import ProductDetails from '../components/frontend/collections/ProductDetails';
import Cart from '../components/frontend/Cart';
import Checkout from '../components/frontend/Checkout';




const publicRouterList = [
    { path: '/', exact:true, name: 'Home', component: Home },
    { path: '/about', exact:true, name: 'About', component: About },
    { path: '/contact', exact:true, name: 'Contact', component: Contact },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/404', exact: true, name: 'Page404', component: Page404 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/collections', exact: true, name: 'ViewCategory', component: ViewCategory },
    { path: '/collections/:slug', exact: true, name: 'ViewProduct', component: ViewProduct },
    { path: '/collections/:category/:product', exact: true, name: 'ProductDetails', component: ProductDetails },
    { path: '/cart', exact: true, name: 'Cart', component: Cart },
    { path: '/checkout', exact: true, name: 'Checkout', component: Checkout },
    

];


export default publicRouterList;
