import styled from 'styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx";
import color from '../utils/colors';
import { respondTo } from '../utils/respondTo';

export const ArticleWrapper = styled.div`
    padding: 1.5rem;
    width: 100%;
    font-size: 19px;
    ${respondTo.sm`
        display: block;
        position: relative;
        left: 15%;
        width: 70%;
        vertical-align: middle;
    `}
    ${respondTo.lg`
        display: block;
        position: relative;
        left: 25%;
        width: 50%;
        vertical-align: middle;
    `}
    ${respondTo.xlg`
        display: block;
        position: relative;
        left: 30%;
        width: 40%;
        vertical-align: middle;
    `}
`;

export const Header = styled.header`
    margin: 1rem auto;
    padding: 1rem;
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
    flex-direction: row;
    color: ${color.secondary};
    ${respondTo.md`
        font-size: 18px;
        padding: 0;
    `}
`;

export const AuthorName = styled.div`
    font-size: 15px;
    color: ${color.dark};
    line-height: 20px;
`;

export const Date = styled.div`
    font-size: 15px;
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

export const ArticleContent = styled.div`
    font-size: 19px;
    line-height: 2rem;
`;

export const ArticleBody = styled(MDXRenderer)`
    position: relative;
    color: ${color.articleText};
    transition: background 0.2s linear 0s;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 18px;
    padding: 2rem;
    font-size: 21px;
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