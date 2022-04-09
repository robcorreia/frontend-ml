import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
    background-color: #eeeeee;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
  }

  @media (max-width: 500px) {

    .container {
        padding: 0 15px;
    }
  }
`;
