import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'
import fetchChannels from './lib/channel-fetcher'
import fetchShows from './lib/show-fetcher'
import embellishShowWithChannelDetails from './lib/show-embellisher'
import cardImg from './assets/img/card.png'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    height: 100%;
  }
`

const AppContainer = styled.div`
  text-align: center;
  height: 100%;
`

const AppHeader = styled.div`
  background-color: #d1daec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Container = styled.div`
  background-image: url('./img/${props => props.img }');
  background-size: cover;
  /* min-height: 160px; */
  /* max-height: 250px; */
  /* height: 100%; */
`

const Shows = styled.div`
  display: flex;
  justify-content: space-around;

`

class App extends Component {
  render() {
    const channels = fetchChannels()
    const shows = fetchShows()
    const embellishedShows = embellishShowWithChannelDetails(shows, channels)
    return (
      <AppContainer>
        <AppHeader>
          <Title>Show Card</Title>
        </AppHeader>
        <img src={cardImg} alt="card" />
        <Shows>
          { embellishedShows.map((show, i) => 
            <Container id="container" img={show.image}>
              <Card key={i} {...show} />
            </Container>
          )}
        </Shows>
        <GlobalStyle />
      </AppContainer>
    )
  }
}

export default App
