import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

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
  Divider
} from './blog-post.style';

const BlogPostTemplate = ( props ) => {

  const post = props.data.mdx;
  const site = props.data.site.siteMetadata.siteShortName;
  const { previous, next } = props.pageContext
  const disqusConfig = {
    shortname: site,
    config: { identifier: post.fields.slug, title: site },
  }

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
          <Divider/>
        { !!post.frontmatter.author && <Bio {...post.frontmatter.author.frontmatter } /> }
        <Divider/>
        <DiscussionEmbed {...disqusConfig} />
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteShortName
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
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
