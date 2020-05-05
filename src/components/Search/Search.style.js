import styled from 'styled-components';
import { respondTo } from '../../utils/respondTo';
import color from '../../utils/colors';
import img from './search-icon.svg';

export const SearchWrapper = styled.div` 
    > .ais-SearchBox {
        padding-right: 0;
        ${respondTo.sm`
            padding-right: 1rem;
        `}

        > .ais-SearchBox-form {
            justify-content: flex-end;
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            -webkit-flex: 0 0 auto;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            -webkit-box-align: center;
            -webkit-align-items: center;

            > .ais-SearchBox-input {
                cursor: pointer;
                position: relative;
                vertical-align: top;
                font-size: 16px;
                width: 16px;
                transition: width 0.2s ease, padding 0.2s ease;
                padding-left: 16px;
                -webkit-transition: width 0.2s ease, padding 0.2s ease;
                -moz-transition: width 0.2s ease, padding 0.2s ease;
                appearance: none;
                background: transparent;
                border: 0;
                color: ${color.black};
                font-size: 18px;
                font-weight: 300;
                font-family: inherit;
                position: relative;
                padding: 4px 4px 4px 29px;
                background-image: url("${img}");
                background-size: 26px 26px;
                background-repeat: no-repeat;
                background-position-y: center;
                background-position-x: 4px;
                -webkit-appearance: none;
                -moz-appearance: none;
                &:focus {
                    padding-left: 37px;
                    width: 24rem;
                    outline: none;
                    background-color: ${color.background};
                    height: 3rem;
                    margin-top: -0.5rem;
                    ${respondTo.sm`
                        width: 15rem;
                        height: auto;
                        margin-top: 0;
                    `}
                }
                > svg {
                    width: 50px;
                    height: 50px;
                }
            }

            > .ais-SearchBox-submit {
                display: none;
            }
        }
    }
    > div > .ais-Hits {
        background-color: ${color.white};

        > ul {
            display: flex;
            flex-direction: column;
            ${respondTo.sm`
                flex-direction: row;
            `}

            > li {
                width: 100%;
            }
        }
    }
`;