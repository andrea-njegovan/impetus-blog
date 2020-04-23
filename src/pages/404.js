import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import {Image} from "../components/common";

import Layout from "../components/layout"
import SEO from "../components/seo"
import color from '../utils/colors';
import { FaSmileWink } from 'react-icons/fa';
import { respondTo } from '../utils/respondTo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Container>
          <Content>
            <Title>Not Found</Title>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <p>Perhaps you are here because:</p>
            <ul>
              <li>The page was moved</li>
              <li>The page no longer exists</li>
              <li>You like 404 pages ... <FaSmileWink size="20" color={color.secondary}/> </li>
            </ul>
            <p>Do you want to return back <Link to="/">HOME</Link>?</p>
          </Content>
          <ImageWrapper>
            <Image src="/assets/404-error.png" />
          </ImageWrapper>
        </Container>
      </Layout>
    )
  }
}

export default NotFoundPage

const Container = styled.div`
  display: flex;
  background: ${color.white};
  justify-content: space-between;
  padding: 1rem;
  ${respondTo.sm`
    padding: 0 5rem;
  `}
  ${respondTo.lg`
  padding: 0 15rem;
  `}
  ${respondTo.xlg`
  padding: 0 25rem;
  `}
`;

const Content = styled.div`
  padding-top: 1rem;
`;

const Title = styled.h1`
  color: ${color.primary};
`;

const ImageWrapper = styled.div`
  width: 25rem;
  height: auto;
  display: none;
  padding-top: 1rem;
  ${respondTo.md`
    display: block;
  `}
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
