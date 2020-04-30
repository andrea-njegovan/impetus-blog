import styled from 'styled-components';
import { Link } from "gatsby";
import color from '../utils/colors';
import { respondTo } from '../utils/respondTo';

export const StyledSection = styled.div`
    position: absolute;
    background: ${color.white};
`;

export const StyledLink = styled(Link)``;