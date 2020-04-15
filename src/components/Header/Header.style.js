import styled from 'styled-components';
import Navigation from '../Navigation';
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

export const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	height: 100%;
	align-items: center;
	padding: 0 1rem;
	${respondTo.sm`
		padding: 0 3rem;
	`}
`;

export const LogoWrapper = styled.div`
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

export const ResponsiveNav = styled(Navigation)`
	display: none;
	${respondTo.sm`
		display: block;
	`}
`;