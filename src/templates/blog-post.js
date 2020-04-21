import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import SEO from "../components/seo"
import { Avatar, Image } from "../components/common";
import References from '../components/References';
import { rhythm } from "../utils/typography"

import {
  ArticleWrapper,
  Header,
  Title,
  Details,
  AuthorName,
  Date,
  ArticleContent,
  ArticleBody,
  PostsNav,
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
                  {!!post.frontmatter.author && 
                    <Avatar src={post.frontmatter.author.frontmatter.image} size={50}/>
                  }
                  <div>
                      {!!post.frontmatter.author && 
                        <AuthorName>{post.frontmatter.author.frontmatter.id} {post.frontmatter.author.frontmatter.surname}</AuthorName>
                      }
                      <Date>{ post.frontmatter.date }</Date>
                    </div>
                </Details>
            </Header>
            <Image src={post.frontmatter.image} />
            <br />
            <ArticleContent>
              <ArticleBody>
                { post.body }
              </ArticleBody>
              {!!post.frontmatter.references &&
                <References references={post.frontmatter.references} />
              }
            </ArticleContent>
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
        image
        references
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
