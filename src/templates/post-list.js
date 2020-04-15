import React from "react";
import { Image } from '../components/common';

import {
    StyledSection,
    StyledLink,
    BookItemWrapper,
    BookItemImageWrapper,
    BookItemContentWrapper,
    BookItemTitle,
    BookItemText,
    BookItemInfo
} from './post-list.style';

const PostListTemplate = ({ posts, children }) => {
	return (
		<StyledSection>
			{ children }
			{posts.map(({ node }) => (
				<StyledLink	key={ node.id } to={`/blog/${ node.fields.slug }`}>
                <BookItemWrapper>
                <BookItemImageWrapper>
                    <Image src={ node.frontmatter.image } />
                </BookItemImageWrapper>
                    <BookItemContentWrapper>
                        <BookItemTitle>
                            { node.frontmatter.title || node.fields.slug }
                        </BookItemTitle>
                        <BookItemText dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                        />
                        <BookItemInfo>
                            { node.frontmatter.date }
                        </BookItemInfo>
                    </BookItemContentWrapper>
                </BookItemWrapper>
				</StyledLink>
			))}
		</StyledSection>
	)
}

export default PostListTemplate;
