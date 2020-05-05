import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from '../components/layout'

import PostListTemplate from '../templates/post-list';

const IndexPage = (props) => {

	return (
    <Layout title={props.data.site.siteTitle}>
        <SEO title="All posts" />
        <PostListTemplate posts={ props.data.allMdx.edges }>
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