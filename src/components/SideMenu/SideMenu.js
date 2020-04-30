import React from 'react';

import Search from '../Search';
import { MenuNav } from './SideMenu.style';

const HamburgerMenu = ({ show, close }) => {
    return (
        <MenuNav show={!!show} >
            <Search />
        </MenuNav>
    );
};

export default HamburgerMenu;