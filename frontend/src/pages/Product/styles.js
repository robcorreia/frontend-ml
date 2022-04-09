import styled from "styled-components";

const ProductComponent = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;

    .product-content {
        width: 100%;
        max-width: 680px;
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            margin-bottom: 120px;
        }

        h4 {
            font-size: 28px;
            color: #333333;
            margin-bottom: 32px;
        }

        p {
            font-size: 16px;
            color: #999999;
        }

        @media (max-width: 500px) {
            h4 {
                font-size: 20px;
            }

            img {
                margin-bottom: 60px;
            }
        }
    }

    @media (max-width: 500px) {
        padding: 0;
    }

    .product-action {
        padding: 32px;
        display: flex;
        flex: 1;
        flex-direction: column;

        h2 {
            font-size: 46px;
            color: #333333;
            margin: 32px 0;
        }

        h4 {
            font-size: 24px;
        }

        span {
            font-size: 14px;
            color: #999999;
            margin-bottom: 16px;
        }

        button {
            display: block;
            width: 100%;
            border: none;
            background-color: #3483fa;
            border-radius: 2px;
            padding: 12px;
            color: #ffffff;
            transition: opacity 300ms;

            &:hover {
                opacity: 0.75;
            }
        }

        @media (max-width: 500px) {
            padding: 15px;

            h2 {
                font-size: 30px;
            }

            h4 {
                font-size: 20px;
            }
        }
    }
`;

export default ProductComponent;
