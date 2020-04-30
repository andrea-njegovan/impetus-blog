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
            > button {
                display: none;
                ${respondTo.sm`
                    display: inline-block;
                `}
            }
            > .ais-SearchBox-input {
                width: 80%;
                height: 4rem;
                width: 100%;
                ${respondTo.sm`
                    height: auto;
                    width: auto;
                `}  
            }
        }
    }
`;