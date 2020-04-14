import React from 'react';
import {
    ToggleButton,
    ToggleButtonLine
} from './ToggleButton.style';

const drawerToggleButton = props => (
    <ToggleButton onClick={ props.click }>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
    </ToggleButton>
);

export default drawerToggleButton;