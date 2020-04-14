import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import ToggleButton from '../SideMenu/ToggleButton';
import {
	HeaderWrapper,
	Navbar,
	LogoWrapper,
	Logo,
	ResponsiveNav
} from './Header.style';

const Header = ({ siteTitle, menuClickHandler }) => {

	return (
		<HeaderWrapper>
			<Navbar>
				<LogoWrapper>
					<ToggleButton click={ menuClickHandler } />
					<Logo>
						<Link to="/">
							{ siteTitle }
						</Link>
					</Logo>
				</LogoWrapper>
				<ResponsiveNav className="navigation" />
			</Navbar>
		</HeaderWrapper>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header;
