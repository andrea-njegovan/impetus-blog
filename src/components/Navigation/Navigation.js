import React from 'react';
import { Link } from "gatsby";

import {
    NavItems,
    NavItem,
} from './Navigation.style';

const Navigation = ({ className }) => {

    return (
        <div className={className}>
            <NavItems>
                <ul>
                    <NavItem>
                        <Link to="/" >
                            Search
                        </Link>
                    </NavItem>
                </ul>
            </NavItems>
        </div>
    );
}

export default Navigation;