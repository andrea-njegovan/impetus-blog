import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

import PostListTemplate from '../templates/post-list';

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