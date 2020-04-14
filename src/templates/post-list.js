import React from "react";
import { Image } from '../components/common';

import {
    StyledSection,
    StyledLink,
    BookItemWrapper,
    BookItemImageWrapper,
    StyledImg,
    BookItemContentWrapper,
    BookItemTitle,
    BookItemText,
    BookItemInfo
} from './post-list.style';

const PostListTemplate = ({ posts, children }) => {
    console.log(posts);
	return (
		<StyledSection>
			{ children }
			{posts.map(post => (
				<StyledLink	key={ post.node.id } to={`/blog/${post.node.fields.slug}`}>
                <BookItemWrapper>
                <BookItemImageWrapper>
                    <Image src={ post.node.frontmatter.imageUrl } />
                </BookItemImageWrapper>
                    <BookItemContentWrapper>
                        <BookItemTitle>
                            { post.node.frontmatter.title }
                        </BookItemTitle>
                        <BookItemText>
                            { post.node.frontmatter.description }
                        </BookItemText>
                        <BookItemInfo>
                            { post.node.frontmatter.date }
                        </BookItemInfo>
                    </BookItemContentWrapper>
                </BookItemWrapper>
				</StyledLink>
			))}
		</StyledSection>
	)
}

export default PostListTemplate;
