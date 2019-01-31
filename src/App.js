import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'
import fetchChannels from './lib/channel-fetcher'
import fetchShows from './lib/show-fetcher'
import embellishShowWithChannelDetails from './lib/show-embellisher'

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
    const channels = fetchChannels()
    const shows = fetchShows()
    const embellishedShows = embellishShowWithChannelDetails(shows, channels)
    return (
      <Fragment>
        <AppContainer>
          <AppHeader>
            <Title>Show Card</Title>
          </AppHeader>
          { embellishedShows.map((show, i) => 
            <Card key={i} {...show} />
          )}
        </AppContainer>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
