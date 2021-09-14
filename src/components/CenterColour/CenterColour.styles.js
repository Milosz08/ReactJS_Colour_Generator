/**
 * @file CenterColour.styles.js
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
const { BORDER_RADIUS, BUTTONS_BOX_SHADOW } = THEME;

export const CenterColourContainer = styled.div.attrs(props => ({
    style: { backgroundColor: props.background }
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 200px;
    margin-bottom: 50px;
    border-radius: ${`${Number(BORDER_RADIUS.substring(0, 1)) * 1.5}px`};
    box-shadow: ${BUTTONS_BOX_SHADOW};
    @media only screen and (max-width: 637px) {
        width: 100%;
    }
`;

export const RgbInfo = styled.input`
    text-align: center;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 2.5rem;
    color: ${props => props.colour};
    @media only screen and (max-width: 637px) {
        width: 100%;
        font-size: 2rem;
    }
`;

export const HexInfo = styled(RgbInfo)`
    font-size: 2rem;
    color: ${props => props.colour};
    @media only screen and (max-width: 637px) {
        font-size: 1.6rem;
    }
`;