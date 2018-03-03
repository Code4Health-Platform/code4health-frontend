import {injectGlobal} from 'styled-components'

const GlobalStyles = () => {
  injectGlobal`
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.5%;
    }
    body {
      font-size: 1.6rem;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      font-family: 'Nunito', -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    }
  `
}

export default GlobalStyles
