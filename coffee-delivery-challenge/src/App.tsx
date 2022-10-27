/* eslint-disable prettier/prettier */
import { ThemeProvider } from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { Router} from './Router'

import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'



export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>

    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    <GlobalStyle/>
   </ThemeProvider>
  )
}

