import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`

${reset};
a{
    text-decoration-style:none;
    color: inherit;
}
*{
    box-sizing: border-box
}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color:rgba(20,20,20,1);
    color: whitesmoke;
    padding-top: 40px;
}
`;

export default globalStyles;
