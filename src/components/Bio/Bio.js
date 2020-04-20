import React from "react"
import { Avatar } from '../common';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  Container,
  AuthorContent,
  IntroAuthor,
  AuthorDetals,
  Text,
  AuthorName,
  Description,
  SocialMedia
} from './Bio.style';

function Bio({id, surname, bio, image, linkedin, facebook, twitter}) {
    return (
      <Container>
        <AuthorContent>
          <AuthorDetals>
            <Avatar src={image} />
            <Text>
              <IntroAuthor>Written by</IntroAuthor>
              <AuthorName>{id} {surname}</AuthorName>
            </Text>
          </AuthorDetals>
          <Description>
            { bio }
          </Description>
        </AuthorContent>
        <SocialMedia >
          { linkedin &&
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={23}  color="#1E1D26" />
            </a>
          }
          { facebook &&
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={23} color="#1E1D26" />
            </a>
          }
          { twitter &&
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={23} color="#1E1D26" />
            </a>
          }
        </SocialMedia>
      </Container>
    )
}

export default Bio
