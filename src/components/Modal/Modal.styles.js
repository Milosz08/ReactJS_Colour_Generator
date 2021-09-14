/**
 * @file Modal.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Styled Components file.
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import styled from 'styled-components';
import THEME from '../../utils/styles';
import { Button } from '../BottomButtons/BottomButtons.styles';

const { WHITE_COLOUR, BORDER_RADIUS, MODAL_BOX_SHADOW, TEXT_COLOUR, BUTTONS_BOX_SHADOW } = THEME;

export const ModalContainer = styled.div`
    display: ${props => props.visible};
    opacity: ${props => props.opacity};
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    transition: .2s opacity ease-in-out;
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${WHITE_COLOUR};
    padding: 25px 30px 30px;
    border-radius: ${BORDER_RADIUS};
    width: 600px;
    box-shadow: ${MODAL_BOX_SHADOW};
    transform: ${props => props.translate};
    opacity: ${props => props.opacity};
    transition: .2s ease-in-out;
`;

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    color: ${TEXT_COLOUR};
`;

export const CloseButton = styled.button`
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    ::after, ::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        left: 0;
        background-color: ${TEXT_COLOUR};
        transform: rotate(45deg);
    }
    ::before {
        transform: rotate(-45deg);
    }
`;

export const OuterBase = styled.div`
    margin: 20px;
    align-items: center;
    color: ${TEXT_COLOUR};
    text-align: center;
`;

export const CenterBase = styled.div.attrs(props => ({
    style: { backgroundColor: props.actualPickColour }
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    margin: 20px auto;
    border-radius: ${`${Number(BORDER_RADIUS.substring(0, 1)) * 1.5}px`};
    color: ${props => props.textColour};
    font-size: 1.4rem;
    box-shadow: ${BUTTONS_BOX_SHADOW};
`;

export const SecondCloseButton = styled(Button)`
    width: calc(100% - 60px);
    margin: 20px auto 0 auto;
`;