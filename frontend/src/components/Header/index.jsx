import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent, Form } from "./styles";
import brandImg from "../../assets/brand-ml.png";
import api from "../../service/api";
import { ProductsContext } from "../../providers/ProdocutsContext";

const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const { setProducts } = useContext(ProductsContext);

    const handleChange = async (e) => {
        setInputValue(e.target.value);
        try {
            const { data } = await api.get(`/api/items?q=${e.target.value}`);
            setProducts(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <HeaderComponent>
            <div className="container">
                <Link to="/">
                    <img className="brand" src={brandImg} alt="Mercado Livre" />
                </Link>
                <Form>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Nunca dejes de buscar"
                    />
                    <button type="submit">Search</button>
                </Form>
            </div>
        </HeaderComponent>
    );
};

export default Header;
