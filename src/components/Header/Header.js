import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GoSearch } from 'react-icons/go';
import Search from '../Search';
import {
	HeaderWrapper,
	HeaderContent,
	Logo,
} from './Header.style';

const Header = ({ siteTitle, menuClickHandler }) => {

	return (
		<HeaderWrapper>
			<HeaderContent>
				<Logo>
					<Link to="/" style={{position: `absolute`}}>
						{ siteTitle }
					</Link>
				</Logo>
				<Search />
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
