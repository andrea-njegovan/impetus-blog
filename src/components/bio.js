import React from "react"
import { Avatar } from './common';
import styled from "styled-components"
import color from '../utils/colors';

function Bio({id, surname, bio, image, linkedin}) {
    return (
      <Container>
        <Avatar src={image} />
        <Info>
          <IntroAuthor>Written by</IntroAuthor>
          <AuthorName>{id} {surname}</AuthorName>
          <Description>
            { bio }
          </Description>
        </Info>
        <Socal>
          
        </Socal>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  width: 35rem;
`
const IntroAuthor = styled.span`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 14px;
  color: ${color.secondary};
`

const AuthorName = styled.h2`
  width: 40rem;
  line-height: 34px;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${color.dark};
`

const Description = styled.div`
  line-height: 24px;
  font-size: 15px;
  font-weight: 300;
  color: ${color.grey};
`

const Socal = styled.div`
  width: 10rem;
`

export default Bio
