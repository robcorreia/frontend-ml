import Header from "../../components/Header";
import Products from "../../components/Products";

const Home = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <Products />
            </div>
        </>
    );
};

export default Home;
