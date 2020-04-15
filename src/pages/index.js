import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';

import Welcome from '../components/Welcome';
import PostListTemplate from '../templates/post-list';

const WelcomeWrapper = styled.div`
    display: none;
    ${respondTo.md`
        display: inline-block;
    `}
`;

const IndexPage = (props) => {
  console.log(props);

	return (
    <Layout>
      <PostListTemplate posts={ props.data.allMdx.edges }>
        <WelcomeWrapper>
          <Welcome />
        </WelcomeWrapper>
      </PostListTemplate>
    </Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`