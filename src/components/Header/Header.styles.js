/**
 * @file Header.styles.js
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

const { TEXT_COLOUR, PURPLE_COLOUR } = THEME;

export const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
`;

export const HeaderTitle = styled.div`
    text-transform: uppercase;
    color: ${TEXT_COLOUR};
`;

export const HeaderLink = styled.div`
    font-size: 1rem;
    a {
        font-size: 1.5rem;
        color: ${TEXT_COLOUR};
    }
`;

export const LineSeparator = styled.aside`
    width: 100%;
    height: 1px;
    background-color: ${PURPLE_COLOUR};
    margin-top: 15px;
`;