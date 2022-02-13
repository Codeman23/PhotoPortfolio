import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px) {
            font-size: 75%;
        }
    }

    body {
        background:#1a1a1a;
        font-family: "Source Sans Pro", sans-serif;
        overflow-x: hidden;
    }
    .button {
        display: inline-block;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 1rem 2.5rem;
        border: none;
        background-color: #245bfe;
        color: #eef2ff;
        transition: background-color .5s ease;
        font-family: "Source Sans Pro", sans-serif;
        border-radius: 3px;
        a {
            color: #eef2ff;
            text-decoration: none;
            transition: color .5s ease;
        }
        &:hover {
            background-color: #2254e9;
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
    h2 {
        font-size: 4rem;
        text-transform: uppercase;
        color: #c7c7c7;
        @media (max-width: 576px) {
            font-size: 2.5rem;
        }
        @media (max-width: 375px) {
            font-size: 2rem;
        }
    }
    h3 {
        color: #b0b0b0;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    a {
        font-size: 1.2rem;
    }
    span {
        font-weight: bold;
        color: #245bfe;
    }
    p {
        padding: 3rem 0;
        color: #959595;
        font-size: 1.7rem;
        line-height: 140%;
        @media (max-width: 576px) {
            padding: 2rem 0;
        }
        @media (max-width: 375px) {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyle;
