import styled from 'styled-components';
import { Link } from "gatsby";
import color from '../utils/colors';
import { respondTo } from '../utils/respondTo';

export const StyledSection = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 3.5rem 1.5rem;
    max-width: 100%;
    ${respondTo.md`
        padding: 2rem 1rem;
        max-width: 1150px;
    `}
`;

export const StyledLink = styled(Link)`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    z-index: 1;
    -webkit-transition: -webkit-transform 0.33s var(--ease-out-quart);
    -webkit-transition: transform 0.33s var(--ease-out-quart);
    transition: transform 0.33s var(--ease-out-quart);
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    color: ${color.dark};

    :hover {
        color: ${color.hover};
    }

    >img {
        -webkit-transition: transform 1.01s ease-in-out;
        -moz-transition:transform 1.01s ease-in-out;
        -ms-transition:transform 1.01s ease-in-out;
        
        :hover {
            -moz-transform: scale(1.01);
            -webkit-transform: scale(1.01);
            -o-transform: scale(1.01);
            -ms-transform: scale(1.01);
            -webkit-transform: scale(1.01);
            transform: scale(1.01);
            transform-origin: 50% 50%;
        }
    }

`;

export const ArticleWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-bottom: 50px;
    grid-column-gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 40px;
    border-radius: 5px;

    ${respondTo.sm`
        grid-template-columns: 1fr 50%;
        margin-bottom: 0;
        box-shadow: none;
        border-radius: 0;
    `}

    :hover {
        .gatsby-image-wrapper {
            -webkit-transition: transform 1.01s ease-in-out;
            -moz-transition:transform 1.01s ease-in-out;
            -ms-transition:transform 1.01s ease-in-out;
            -moz-transform: scale(1.01);
            -webkit-transform: scale(1.01);
            -o-transform: scale(1.01);
            -ms-transform: scale(1.01);
            -webkit-transform: scale(1.01);
            transform: scale(1.01);
            transform-origin: 50% 50%;
        }
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 0px;
    overflow: hidden;
    height: 220px;
    ${respondTo.sm`
        box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -10px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px;
    `}
`;

export const ContentWrapper = styled.div`
    flex-grow: 1;
    padding: 0.5rem 1rem;
    ${respondTo.sm`
        padding: 3rem 2rem;
    `}
`;

export const ArticleTitle = styled.h2`
    word-break: keep-all;
    line-height: 1.333;
    font-weight: bold;
    margin: 0.2rem 0;
    -webkit-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    font-size: 32px;
    -webkit-line-clamp: 3;
    ${respondTo.sm`
        font-size: 22px;
        -webkit-line-clamp: 2;
    `}
`;

export const ArticleDescription = styled.p`
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    font-size: 18px;
    line-height: 1.5rem;
    color: ${color.grey};
    display: box;
    max-width: 100%;
    margin-bottom: 20px;
    -webkit-line-clamp: 4;

    ${respondTo.sm`
        max-width: 515px;
        margin-bottom: 10px;
    `}
`;

export const ArticleInfo = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: var(--theme-ui-colors-grey,#73737D);
    opacity: 0.33;
`;