import React, { useMemo } from "react";
import safeGet from 'lodash.get';
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../../utils/typography"

export const Avatar = ({ src, size }) => {

  const data =
    useStaticQuery(graphql`
      query {
        allFile(filter: {dir: {regex: "//static/.*/"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
        nodes {
          relativePath
          childImageSharp {
            fixed(width: 75, height: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => src === '/assets/' + relativePath)
  ), [ data, src ])

  const fixed = safeGet(match, 'childImageSharp.fixed')

  return (
    <Image
      fixed={fixed}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        maxWidth: size || 75,
        maxHeight: size || 75,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
  )
};