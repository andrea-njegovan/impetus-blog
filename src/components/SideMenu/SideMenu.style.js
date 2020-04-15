import styled from 'styled-components';
import { rhythm } from "../../utils/typography"
import color from '../../utils/colors';
import { respondTo } from '../../utils/respondTo';

export const MenuNav = styled.div`
    display: block;
    ${respondTo.sm`
		display: none;
	`}
    height: 100%;
    background-color: ${color.white};
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    lett: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translate(
        ${props => {
            return props.show ? '0' : '-100%'
        }}
    );
    transition: transform 0.3s ease-out;

    >ul {
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const MenuItem = styled.li`
    margin: ${rhythm(1 / 2)};

    a {
        font-size: 1.2rem;
    }
`;