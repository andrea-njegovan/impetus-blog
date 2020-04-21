import styled from 'styled-components';
import color from '../../utils/colors';
import { respondTo } from '../../utils/respondTo';
import { FaFolderOpen } from 'react-icons/fa';

export const Container = styled.div`
    padding-top: 1rem;
`;

export const ReferencesButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    color: ${props => {
        return props.show ? color.primary : '';
    }};
    :hover {
        color: ${color.primary};
    }
`;

export const ButtonIcon = styled(FaFolderOpen)`
    color: inherited;
`;

export const ButtonText = styled.h5`
    padding: 0.2rem 0 0 0.3rem;
    font-size: 18px;
    color: inherited;
`;

export const ReferencesList = styled.ol`
    display:
        ${props => {
            return props.show ? 'block' : 'none'
        }};
`;
