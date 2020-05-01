import styled from 'styled-components';
import { respondTo } from '../../utils/respondTo';
import color from '../../utils/colors';

export const SearchWrapper = styled.div` 
    width: 100%;
    ${respondTo.sm`
        width: 15rem;
    `}
    > .ais-SearchBox {
        width: 100%;
        > .ais-SearchBox-form {
            width: 100%;
            margin-bottom: 0.45rem;
            > .ais-SearchBox-reset {
                display: none;
            }
            > .ais-SearchBox-submit {
                display: none;
                ${respondTo.sm`
                    display: inline-block;
                    border-top-right-radius: 0.5rem; 
                    border-bottom-right-radius: 0.5rem;
                    border-color: ${color.secondary};
                    border-left: none;
                    border-width: 0.05rem;
                    padding: 0.03rem 0.5rem 0.04rem 0.5rem;
                `}
            }
            > .ais-SearchBox-input {
                width: 80%;
                height: 4rem;
                width: 100%;
                color: ${color.primary};
                font-size: 18px;
                ${respondTo.sm`
                    height: auto;
                    width: auto;
                    border-right: none;
                    border-top-left-radius: 0.5rem; 
                    border-bottom-left-radius: 0.5rem;
                    border-color: ${color.secondary};
                    border-width: 0.05rem;
                    padding-left: 0.5rem;
                `}  
            }
        }
    }
`;