import styled from "styled-components";

const ProductsComponent = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    background: #ffffff;
    flex-direction: column;
    justify-content: center;

    a {
        display: block;
        width: 100%;
        padding: 16px;
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        transition: box-shadow 300ms;
        position: relative;

        &:hover {
            box-shadow: inset 1px 1px 5px 1px rgba(0, 0, 0, 0.18);
        }

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: calc(100% - 32px);
            height: 1px;
            background-color: #eeeeee;
        }
        &:last-child::before {
            display: none;
        }
    }

    img {
        display: block;
        width: 180px;
        height: 180px;
        border-radius: 4px;
        margin-right: 16px;
    }

    div {
        padding-top: 16px;
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h4 {
            font-size: 24px;
            color: #333333;
            margin-bottom: 32px;

            img {
                width: 18px;
                height: 18px;
                display: inline-block;
            }
        }

        p {
            font-size: 18px;
            color: #333333;
        }
    }

    span {
        margin-top: 16px;
        display: block;
        font-size: 12px;
        color: #999999;
    }
`;

export default ProductsComponent;
