import React from 'react'

import styled from 'styled-components'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Baixar from './pages/Baixar'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <Baixar />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 2.5rem;
`



export default App;