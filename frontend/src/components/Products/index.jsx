/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import shippingIcon from "../../assets/shipping-icon.png";
import Breadcrumbs from "../Breadcrumbs/styles";
import api from "../../service/api";
import ProductsComponent from "./styles";
import { ProductsContext } from "../../providers/ProdocutsContext";

const Products = () => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            <Breadcrumbs>
                <ul>
                    <li>
                        <Link to="/items">Produtos</Link>
                    </li>
                </ul>
            </Breadcrumbs>
            <ProductsComponent>
                {products.map((item) => {
                    return (
                        <Link key={item.id} to={`/items/${item.id}`}>
                            <img src={item.thumbnail} alt="image" />
                            <div>
                                <h4>
                                    $ {item.price}{" "}
                                    {item?.shipping?.logistic_type ===
                                        "fulfillment" && (
                                            <img
                                                src={shippingIcon}
                                                alt="imagem de envio"
                                            />
                                        )}
                                </h4>
                                <p>{item.title}</p>
                            </div>
                            <span>{item.local}</span>
                        </Link>
                    );
                })}
            </ProductsComponent>
        </>
    );
};
export default Products;
