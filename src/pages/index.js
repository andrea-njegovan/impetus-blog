import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
/*import styled from 'styled-components';
import { respondTo } from '../utils/respondTo';*/

import PostListTemplate from '../templates/post-list';
/*import Welcome from '../components/Welcome';

const WelcomeWrapper = styled.div`
    display: none;
    ${respondTo.md`
        display: inline-block;
    `}
`;*/

const IndexPage = (props) => {

	return (
    <>
      <SEO title="All posts" />
      <PostListTemplate posts={ props.data.allMdx.edges }>
      </PostListTemplate>
    </>
	)
}

export default IndexPage


// allMdx(filter: {frontmatter: {author: {frontmatter: {title: {regex: "/^$|\\s+/"}}}}}) {
//   edges {
//     node {
//       frontmatter {
//         title
//         author {
//           frontmatter {
//             bio
//             id
//             surname
//           }
//         }
//       }
//     }
//   }
// }

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {author: {frontmatter: {title: {regex: "/^$|\\\\s+/"}}}}}) {
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