import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`
${reset}

body {
overflow-x: hidden;
}
`


export default GlobalStyle;