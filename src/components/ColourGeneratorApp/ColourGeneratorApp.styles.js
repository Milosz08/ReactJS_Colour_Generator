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

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        backface-visibility: hidden;
    }
    body, button {
        font-family: 'Ubuntu', sans-serif;
        background: ${THEME.BACKGROUND_GRADIENT};
    }
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    background-color: ${THEME.WHITE_COLOUR};
    border-radius: ${THEME.BORDER_RADIUS};
    padding: 30px;
    margin: 0 15px;
    box-shadow: ${THEME.BOX_SHADOW};
`;