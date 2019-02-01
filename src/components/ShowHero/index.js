import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`

const Hero = styled.img`
  width: 100%;
  max-width: 800px;
`

const ShowHero = ({ name, image, channel, __channelDetails }) => {
  return (
    <HeroContainer>
      <Hero src={`./img/${image}`} alt={name} />
    </HeroContainer>
  )
}

export default ShowHero