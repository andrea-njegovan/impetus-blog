import styled from 'styled-components';
import color from '../../utils/colors';
import { respondTo } from '../../utils/respondTo';

export const WelcomeWrapper = styled.div`
    position: absolute;
    font-family: Indie Flower;
    font-size: 26px;
    color: ${color.primary};
    padding: 10rem 1rem 0 1rem;

    ${respondTo.md`
        left: 0;
        top: 0;
        width: 100%;
        padding: 5rem 1rem 1rem 1rem;
    `}

    ${respondTo.xlg`
        position: absolute;
        top: 5rem;
        left: 0;
        width: 18rem;
        padding: 5rem 0 0 2rem;
        transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        -moz-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
        -o-transform: rotate(-20deg);
    `}
`;