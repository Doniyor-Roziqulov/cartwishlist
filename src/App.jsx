import { Route, Routes } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<Login />} />
                    <Route path="product/:proId" element={<Detail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
