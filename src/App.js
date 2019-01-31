import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: #d1daec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`

const Title = styled.h1`
  font-size: 1.5em;
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppContainer>
          <AppHeader>
            <Title>Show Card</Title>
          </AppHeader>
          <Card />
        </AppContainer>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
