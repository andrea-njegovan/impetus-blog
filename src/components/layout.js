import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header";
import SideMenu from "./SideMenu";
import Backdrop from './Backdrop';

const Layout = ({ children }) => {
	const [ sideMenuOpen, setSideMenuOpen ] = useState(false);

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
		site {
			siteMetadata {
			title
			}
		}
		}
	`)

	function menuToggleClickHandler() {
		setSideMenuOpen(!sideMenuOpen);
	}
	
	function backdropClickHandler() {
		setSideMenuOpen(false);
	}

	return (
    <>
		<Header
			siteTitle={data.site.siteMetadata.title}
			menuClickHandler={menuToggleClickHandler}
		/>
		<SideMenu show={ sideMenuOpen } close={ backdropClickHandler } />
		{!!sideMenuOpen &&
			<Backdrop click={ backdropClickHandler }/>
		}
		<div
			style={{
				margin: `0 auto`,
				width: `100%`,
				paddingTop: `4rem`,
			}}
		>
			<main>{children}</main>
		</div>
		</>
	)
}

Layout.propTypes = {
		children: PropTypes.node.isRequired,
}

export default Layout;
