import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import {
  ArticleWrapper,
  Header,
  Title,
  Details,
  Date,
  ArticleContent,
  PostsNav
} from './blog-post.style';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

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
            marginTop: rhythm(2),
            }}
          />
          { !!post.frontmatter.author && <Bio {...post.frontmatter.author.frontmatter } /> }
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
            facebook
            linkedin
            twitter
          }
        }
      }
    }
  }
`
