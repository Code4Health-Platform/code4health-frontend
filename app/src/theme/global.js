import {injectGlobal} from 'styled-components'
import Colors from '@theme/colors'

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
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      font-family: 'Source Sans Pro', -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
      background-color: ${Colors.background};
    }
  `
}

export default GlobalStyles
