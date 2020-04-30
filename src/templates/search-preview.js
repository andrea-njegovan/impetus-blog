import React from "react";
import { Highlight } from 'react-instantsearch-dom';

import {
    StyledSection,
    StyledLink,
} from './search-preview.style';

const SearchPreview = ({hit}) => {

	return (
		<StyledSection>
            <StyledLink	key={ hit.fields.slug } to={`${ hit.fields.slug }`}>
                <Highlight
                    hit={hit}
                    attribute="frontmatter.title"
                    tagName="mark"
                />
            </StyledLink>
		</StyledSection>
	)
}

export default SearchPreview;
