import React from 'react';
import styled from 'styled-components';
import color from '../utils/colors';

const BackdropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const Backdrop = props => (
    <BackdropStyled onClick={ props.click } />
);

export default Backdrop;