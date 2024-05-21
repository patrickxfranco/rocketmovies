import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import { Note } from './pages/Note'

import GlobalStyles from './styles/global'
import Theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Note />
    </ThemeProvider>
  </React.StrictMode>,
)
