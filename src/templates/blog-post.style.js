import styled from 'styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx";
import color from '../utils/colors';
import { respondTo } from '../utils/respondTo';

export const ArticleWrapper = styled.div`
    padding: 1.5rem;
    ${respondTo.md`
        padding: 3rem 5rem;
    `}
    ${respondTo.lg`
        padding: 3rem 15rem;
    `}
    ${respondTo.xlg`
        padding: 3rem 30rem;
    `}
`;

export const Header = styled.header`
    margin: 2rem auto;
    padding: 0px 40px;
    max-width: 749px;
    ${respondTo.md`
        position: relative;
        z-index: 10;
        padding-left: 68px;
    `}
`;

export const Title = styled.h1`
    word-break: keep-all;
    color: ${color.header};
    font-size: 32px;
    margin-bottom: 25px;
    font-weight: bold;
    line-height: 1.32;
    ${respondTo.md`
        font-size: 48px;
    `}
`;

export const Details = styled.div`
    position: relative;
    display: flex;
    font-size: 14px;
    flex-direction: column;
    color: ${color.secondary};
    border: 0.5px solid ${color.border};
    border-radius: 5px;
    padding: 0.5rem;
    ${respondTo.md`
        flex-direction: row;
        font-size: 18px;
        border: none;
        padding: 0;
    `}
`;

export const Author = styled.div`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    ${respondTo.md`
        padding-right: 0.5rem;
        border-right: 0.5px solid ${color.border};
    `}
`;

export const Date = styled.div`
    font-size: 14px;
    ${respondTo.md`
        padding-left: 0.5rem;
    `}
`;

export const ArticleImage = styled.div`
    position: relative;
    z-index: 1;
    width: calc(100vw - 40px);
    height: 220px;
    margin: 0px auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -10px, rgba(0, 0, 0, 0.22) 0px 18px 36px -18px;
    overflow: hidden;
    ${respondTo.md`
        width: 100%;
        height: auto;
        max-width: 944px;
        margin: 0px auto;
    `}
`;

export const ArticleContent = styled(MDXRenderer)`
    position: relative;
    color: ${color.articleText};
    transition: background 0.2s linear 0s;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 18px;
    padding: 2rem;
`;

export const PostsNav = styled.ul`
    display: flex;
    flexWrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 1.5rem;
    margin-left: 0;
    ${respondTo.md`
        padding: 1rem 4rem;
    `}
`;