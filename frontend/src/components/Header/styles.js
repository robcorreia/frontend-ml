import styled from "styled-components";
import searchIcon from "../../assets/search-icon.png";

export const HeaderComponent = styled.header`
    width: 100%;
    background-color: #ffe600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;

    .brand {
        display: block;
        margin: 0 25px;
    }

    .container {
        flex-direction: row;
    }

    @media (max-width: 500px) {
        .brand {
            margin: 0 15px;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    input {
        width: 100%;
        font-size: 18px;
        padding: 10px 15px;
        border: none;
        color: #333333;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        &::placeholder {
            color: #999999;
        }
    }

    @media (max-width: 500px) {
        input {
            font-size: 14px;
            padding: 5px 10px 5px 10px;
        }
    }

    button {
        border: none;
        background: #eeeeee url(${searchIcon}) center no-repeat;
        color: transparent;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        transition: background 300ms;

        &:hover {
            background: #999999 url(${searchIcon}) center no-repeat;
        }
    }
`;
