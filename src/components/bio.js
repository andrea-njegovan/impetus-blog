/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Avatar } from './common';
import styled from "styled-components"

function Bio({author}) {

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Avatar src="/assets/profile.jpg" />
            <p>
              Written by <strong>{author}</strong>
              {` `}
              <a href={`http://linkedin.com/in//${social.linkedin}`}>
                You should follow her on Linkedin
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
