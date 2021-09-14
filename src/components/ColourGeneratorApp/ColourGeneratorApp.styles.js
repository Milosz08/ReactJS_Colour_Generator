/**
 * @file ColourGeneratorApp.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Styled Components file.
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import THEME from '../../utils/styles';

const { BACKGROUND_GRADIENT, WHITE_COLOUR, BORDER_RADIUS, BOX_SHADOW } = THEME;

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        backface-visibility: hidden;
    }
    body, button, input {
        font-family: 'Ubuntu', sans-serif;
    }
    body {
        background: ${BACKGROUND_GRADIENT};
    }
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    background-color: ${WHITE_COLOUR};
    border-radius: ${BORDER_RADIUS};
    padding: 30px;
    margin: 0 15px;
    box-shadow: ${BOX_SHADOW};
    @media only screen and (max-width: 637px) {
        width: calc(100% - 30px);
        margin: 15px;
    }
`;