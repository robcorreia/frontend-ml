import { useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    return {
        products,
        setProducts,
    };
}
export default Products;
