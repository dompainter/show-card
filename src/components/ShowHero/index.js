import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`

const Hero = styled.img`
  width: 100%;
  max-width: 800px;
  transition: all 0.1s ease-in-out;
  opacity: 0.8;
`

const Icon = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 6em;
  color: #ff0000;
  cursor: pointer;
`
const HeroContents = styled.div`
  position: relative;
  display: inline-block;
`


const ShowHero = ({ name, image }) => {
  return (
    <HeroContainer>
      <HeroContents>
        <Hero src={`./img/${image}`} alt={name} />
        <Icon className="far fa-play-circle" />
      </HeroContents>
    </HeroContainer>
  )
}

export default ShowHero