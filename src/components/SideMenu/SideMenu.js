import React from 'react';

import Navigation from '../Navigation';
import Welcome from '../Welcome';
import { MenuNav } from './SideMenu.style';

const HamburgerMenu = ({ show, close }) => {
    return (
        <MenuNav show={!!show} onClick={ close }>
            <Navigation />
            <Welcome />
        </MenuNav>
    );
};

export default HamburgerMenu;