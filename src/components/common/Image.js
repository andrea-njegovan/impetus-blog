import React, { useMemo } from "react";
import safeGet from 'lodash.get';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Image = ({ src, ...props }) => {

  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {dir: {regex: "/\/static\/.*/"}}) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 700, quality: 100) {
                      ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `);

  const match = useMemo(() => (
    data.allFile.nodes.find(({ relativePath }) => src === '/assets/' + relativePath)
  ), [ data, src ])

  const fluid = safeGet(match, 'childImageSharp.fluid')

  return fluid ? (
    <Img
      fluid={fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      style={{height: 'inherit'}}
      {...props}
    />
    ) : null;
};