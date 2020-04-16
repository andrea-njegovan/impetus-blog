import React, { useMemo } from "react";
import styled from 'styled-components';
import safeGet from 'lodash.get';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const StyledImg = styled(Img)`
    -webkit-transition: transform 1.01s ease-in-out;
    -moz-transition:transform 1.01s ease-in-out;
    -ms-transition:transform 1.01s ease-in-out;
    
    :hover {
        -moz-transform: scale(1.01);
        -webkit-transform: scale(1.01);
        -o-transform: scale(1.01);
        -ms-transform: scale(1.01);
        -webkit-transform: scale(1.01);
        transform: scale(1.01);
        transform-origin: 50% 50%;
    }
`;

export const Image = ({ src, avatar, ...props }) => {
  console.log(props);

  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {dir: {regex: "/\/static\/.*/"}}) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
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
    <StyledImg
      fluid={fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      style={{height: 'inherit'}}
      {...props}
    />
    ) : null;
};