/**
 * @file BottomButtons.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { Button, ButtonsContainer } from './BottomButtons.styles';
import THEME from './../../utils/styles';

/**
 * Component responsible for generating buttons for copying colour to clipboard and generating random colour.
 *
 * @returns { JSX.Element }
 */
const BottomButtons = () => {

    const { randomGenerator, setModal } = useContext(StoreContext);

    const { LIGHT, DARK } = THEME.BUTTON_MODES;
    const { DEC, HEX } = MODAL_TYPE;

    const handleRandom = () => randomGenerator();

    const handleOpenModal = type => {
        setModal({ ifOpen: true, type });
    };

    return (
        <ButtonsContainer>
            <Button
                buttonMode = {DARK}
                onClick = {handleRandom}
            >
                Generate Random Colour
            </Button>
            <Button
                buttonMode = {LIGHT}
                onClick = {() => handleOpenModal(DEC)}
            >
                Copy to Clipboard RGB Colour
            </Button>
            <Button
                buttonMode = {LIGHT}
                onClick = {() => handleOpenModal(HEX)}
            >
                Copy to Clipboard HEX Colour
            </Button>
        </ButtonsContainer>
    );
};

/**
 * Object that stores the modal type (decimal or hex).
 * @type { object }
 */
export const MODAL_TYPE = {
    DEC: 'dec',
    HEX: 'hex',
};

export default BottomButtons;