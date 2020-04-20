import React from "react";
import { Image } from '../components/common';

import {
    StyledSection,
    StyledLink,
    ArticleWrapper,
    ImageWrapper,
    ContentWrapper,
    ArticleTitle,
    ArticleDescription,
    ArticleInfo
} from './post-list.style';

const PostListTemplate = ({ posts, children }) => {
	return (
		<StyledSection>
			{ children }
			{posts.map(({ node }) => (
				<StyledLink	key={ node.id } to={`/${ node.fields.slug }`}>
                <ArticleWrapper>
                <ImageWrapper>
                    <Image src={ node.frontmatter.image } />
                </ImageWrapper>
                    <ContentWrapper>
                        <ArticleTitle>
                            { node.frontmatter.title || node.fields.slug }
                        </ArticleTitle>
                        <ArticleDescription dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                        />
                        <ArticleInfo>
                            { node.frontmatter.date }
                        </ArticleInfo>
                    </ContentWrapper>
                </ArticleWrapper>
				</StyledLink>
			))}
		</StyledSection>
	)
}

export default PostListTemplate;
