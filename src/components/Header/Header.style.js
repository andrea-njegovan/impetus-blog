import styled from 'styled-components';
import color from '../../utils/colors';
import { respondTo } from '../../utils/respondTo';

export const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4rem;
	background: ${color.white};
	border-bottom: 1px solid ${color.border};
	z-index: 100;
`;

export const HeaderContent = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
`;


export const Logo = styled.div`
	font-family: Pacifico;
	margin-left: 1rem;
	${respondTo.sm`
		margin-left: 0;
	`}

	>a {
		color: ${color.primary};
		font-size: 2.3rem;
	}
`;

export const MobileSearch = styled.div`
	display: block;
	${respondTo.sm`
		display: none;
	`}
`;

export const DesktopSearch = styled.div`
	display: none;
	${respondTo.sm`
		display: block;
	`}
`;