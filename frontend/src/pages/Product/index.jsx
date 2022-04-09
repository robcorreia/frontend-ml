/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/styles";
import Header from "../../components/Header";
import ProductComponent from "./styles";
import api from "../../service/api";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
            const { data } = await api.get(`api/items/${id}`);
            setProduct(data);
        } catch (e) {
            return e.message;
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                <Breadcrumbs>
                    <ul>
                        <li>
                            <Link to="/">Produtos</Link>
                        </li>
                        <span>/</span>
                        <li>
                            <Link to="/items">Produto {id}</Link>
                        </li>
                    </ul>
                </Breadcrumbs>
            </div>
            <div className="container">
                <ProductComponent>
                    <div className="product-content">
                        <img src={product.thumbnail} alt="imagem produto" />
                        <h4>Descrição del producto</h4>
                        <p>{product.title}</p>
                    </div>
                    <div className="product-action">
                        <span>
                            {product.condition} - {product.sold_quantity}{" "}
                            vendidos
                        </span>
                        <h4>{product.title}</h4>
                        <h2>$ {product.price}</h2>
                        <button>Comprar</button>
                    </div>
                </ProductComponent>
            </div>
        </>
    );
};

export default Product;
