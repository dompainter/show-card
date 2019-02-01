import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Card from './components/Card'
import ShowHero from './components/ShowHero'
import fetchChannels from './lib/channel-fetcher'
import fetchShows from './lib/show-fetcher'
import embellishShowWithChannelDetails from './lib/show-embellisher'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    font-family: sans-serif;
    background-color: #fafafa;
  }
`

const AppContainer = styled.div`
  text-align: center;
  height: 100%;
`

const AppHeader = styled.div`
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

const CardContainer = styled.div`
  background-image: url('./img/${props => props.img }');
  background-size: cover;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const Shows = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 70%;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeShow: {},
      shows: fetchShows()
    }

    this.handleShowClick = this.handleShowClick.bind(this)
  }

  componentWillMount() {
    this.setState({
      activeShow: this.state.shows[0]
    })
  }

  handleShowClick(show) {
    this.setState({
      activeShow: show
    })
  }

  render() {
    const channels = fetchChannels()
    const embellishedShows = embellishShowWithChannelDetails(this.state.shows, channels)
    return (
      <AppContainer>
        <AppHeader>
          <Title>Show Case</Title>
        </AppHeader>
        <ShowHero {...this.state.activeShow} />
        <Shows>
          { embellishedShows.map((show, i) => 
            <CardContainer key={i} img={show.image}>
              <Card {...show} onClick={() => this.handleShowClick(show)} />
            </CardContainer>
          )}
        </Shows>
        <GlobalStyle />
      </AppContainer>
    )
  }
}

export default App
