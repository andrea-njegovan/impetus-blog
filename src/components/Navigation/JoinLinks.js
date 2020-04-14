import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import { respondTo } from '../../theme/respondTo';

const MobileAuthLink = styled(Link)`
    display: inline-block;
    ${respondTo.sm`
        display: none;
    `}
`;

const DesktopAuthLink = styled(Link)`
    display: none;
    ${respondTo.sm`
        display: inline-block;
    `}
`;

export const DesktopLoginLink = () => {
    return (
        <DesktopAuthLink to="/login" state={{ modal: true }}>
            Login
        </DesktopAuthLink>
    )
};

export const MobileLoginLink = () => {
    return (
        <MobileAuthLink to="/login">
            Login
        </MobileAuthLink>
    )
};

export const DesktopRegistrationLink = () => {
    return (
        <DesktopAuthLink to="/register" state={{ modal: true }}>
            Register
        </DesktopAuthLink>
    )
};

export const MobileRegistrationLink = () => {
    return (
        <MobileAuthLink to="/register">
            Register
        </MobileAuthLink>
    )
};