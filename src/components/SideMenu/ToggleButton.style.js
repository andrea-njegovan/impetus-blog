import styled from 'styled-components';
import { respondTo } from '../../utils/respondTo';

export const ToggleButton = styled.div`
    display: flex;
    ${respondTo.sm`
		display: none;
	`}
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    
    &:focus {
        outline: none;
    }
`;

export const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: #000;
`;