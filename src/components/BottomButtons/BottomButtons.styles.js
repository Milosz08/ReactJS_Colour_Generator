/**
 * @file BottomButtons.styles.js
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

const {
    LIGHTGRAY_COLOUR, PURPLE_COLOUR, WHITE_COLOUR, DARKGRAY_COLOUR, DARK_PURPLE_COLOUR, GRAY_TINT_COLOUR,
    BUTTONS_BOX_SHADOW, BORDER_RADIUS, BUTTON_MODES
} = THEME;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px 14px;
    margin: 10px 0;
    font-size: 1rem;
    box-shadow: ${BUTTONS_BOX_SHADOW};
    background-color: ${props => props.buttonMode === BUTTON_MODES.LIGHT ? LIGHTGRAY_COLOUR : PURPLE_COLOUR};
    color: ${props => props.buttonMode === BUTTON_MODES.LIGHT ? DARKGRAY_COLOUR : WHITE_COLOUR};
    border: none;
    border-radius: ${BORDER_RADIUS};
    cursor: pointer;
    transition: .2s;

    :hover {
        background-color: ${props => props.buttonMode === BUTTON_MODES.LIGHT ? GRAY_TINT_COLOUR : DARK_PURPLE_COLOUR};
    }

    @media only screen and (max-width: 637px) {
        width: 100%;
    }
`;