import styled from 'styled-components';
import { respondTo } from '../../utils/respondTo';

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    height: 100%;
    ${respondTo.sm`
        height: 2rem;
        flex-direction: row;
        height: 1.3rem;
        font-size: 18px;
    `}

	>ul {
        display: flex;
        flex-direction: column;
		list-style: none;
		margin: 0;
        padding: 1rem 0;
        
        ${respondTo.sm`
            flex-direction: row;
            padding: 0;
        `}
	}
`;

export const NavItem = styled.li`
    padding: 1rem;
    
    ${respondTo.sm`
        padding: 0 1rem;
    `}
`;