import React, { createContext } from "react";
import UseProducts from "./useProducts";

const ProductsContext = createContext({ loadingPage: false });

// eslint-disable-next-line react/prop-types
const ProductsProvider = ({ children }) => {
    const { products, setProducts } = UseProducts();
    return (
        <ProductsContext.Provider
            /* eslint-disable-next-line react/jsx-no-constructed-context-values */
            value={{
                products,
                setProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsProvider, ProductsContext };
