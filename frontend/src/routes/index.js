import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<Product />} />
        <Route path="*" element={<p>Rota inexistente!!</p>} />
    </Routes>
);

export default AppRoutes;
