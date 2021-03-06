import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  min-height: 175px;
  min-width: 315px;
  position: relative;
`

const CardBanner = styled.div`
  color: white;
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

const ChannelLogo = styled.div`
  flex: 1;
  width: 100%;
  padding: 5px 8px;
`

const CardContents = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`

const ShowTitle = styled.span`
  flex: 8;
  text-align: left;
  font-weight: bold;
  font-size: 1.3em;
  margin: auto;
`

const Card = (props) => {
  const { name, image, __channelDetails = {}, onClick } = props
  const { id, logo } = __channelDetails
  const imgStyle = {
    maxWidth: '40px'
  }
  
  return (
    <CardContainer img={image} onClick={onClick}>
      <CardBanner>
        <CardContents>
          <ChannelLogo>
            <img style={imgStyle} src={`./img/${logo}`} alt={id} />
          </ChannelLogo>
          <ShowTitle>{name}</ShowTitle>
        </CardContents>
      </CardBanner>
    </CardContainer>
  )
}

export default Card