import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';
import 'instantsearch.css/themes/reset.css';


import {
    SearchWrapper
} from './Search.style';
import SearchPreview from '../../templates/search-preview';

const Search = () => {
    const searchClient = algoliasearch('OT2SKKDLYC', '5513bad78dee169f375696151c9fff71');

    const Results = connectStateResults(({ searchState, children }) =>
        searchState && searchState.query ? (
            <div>{children}</div>
        ) : (
            null
        )
    );
    
    return (
        <SearchWrapper>
            <InstantSearch searchClient={searchClient} indexName="impetus-blog">
                <SearchBox />
                <Results>
                    <Hits hitComponent={SearchPreview} />
                </Results>
            </InstantSearch>
        </SearchWrapper>
    );
}

export default Search;