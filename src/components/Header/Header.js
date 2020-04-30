import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GoSearch } from 'react-icons/go';
import {
	HeaderWrapper,
	HeaderContent,
	Logo,
	MobileSearch,
	DesktopSearch
} from './Header.style';

const Header = ({ siteTitle, menuClickHandler }) => {

	return (
		<HeaderWrapper>
			<HeaderContent>
				<Logo>
					<Link to="/">
						{ siteTitle }
					</Link>
				</Logo>
				<MobileSearch onClick={ menuClickHandler }>
					<GoSearch size={30} />
				</MobileSearch>
				<DesktopSearch />
			</HeaderContent>
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
