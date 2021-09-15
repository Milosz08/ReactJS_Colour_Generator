/**
 * @file Header.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { HeaderContainer, HeaderLink, HeaderTitle, LineSeparator } from './Header.styles';

/**
 * Component responsible for generating header (static content), with link to github account.
 *
 * @returns { JSX.Element }
 */
const Header = () => (
    <HeaderContainer>
        <HeaderTitle>Colour Generator</HeaderTitle>
        <HeaderLink>
            <a
                href="https://github.com/Milosz08"
                target="_blank"
                rel="noreferrer"
                title="Go to my Github profile"
            >
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </HeaderLink>
        <LineSeparator/>
    </HeaderContainer>
);

export default Header;