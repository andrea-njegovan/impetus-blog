import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import {
  ArticleWrapper,
  Header,
  Title,
  Details,
  Author,
  Date,
  ArticleContent,
  PostsNav
} from './blog-post.style';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    console.log(this.props);

    return (
      <>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ArticleWrapper>
            <Header>
                <Title>{ post.frontmatter.title }</Title>
                <Details>
                    <Date>Published on { post.frontmatter.date }</Date>
                </Details>
            </Header>
            <ArticleContent>{ post.body }</ArticleContent>
            <hr
          style={{
            marginTop: rhythm(1),
            }}
          />
          <Bio {...post.frontmatter.author.frontmatter } />
        </ArticleWrapper>

        <PostsNav>
          <li>
            {previous && previous.frontmatter.title && (
              <Link to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.title && (
              <Link to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PostsNav>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author {
          frontmatter {
            id
            surname
            bio
            image
         }
        }
      }
    }
  }
`
