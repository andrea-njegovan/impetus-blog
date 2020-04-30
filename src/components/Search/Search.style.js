import styled from 'styled-components';
import { respondTo } from '../../utils/respondTo';
import color from '../../utils/colors';

export const SearchWrapper = styled.div`
    display: none;
	${respondTo.sm`
		display: block;
	`}  
    width: 15rem;
    > .ais-SearchBox {
        width: 100%;
        > .ais-SearchBox-form {
            > .ais-SearchBox-input {
                width: 80%;
            }
        }
    }
`;