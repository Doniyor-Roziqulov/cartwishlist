import { Route, Routes } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
