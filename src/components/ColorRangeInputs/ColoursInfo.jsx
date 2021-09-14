/**
 * @file ColoursInfo.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-coluor-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { InfoColour, InfoColoursWrapper } from './ColourRangeInputs.styles';

/**
 * Component responsible for generating information about individual colour components (decimal and hex values).
 *
 * @param HEX { object } - object storing component background colours
 * @param callback { function } - callback function to update the progress bar.
 * @returns { JSX.Element }
 */
const ColoursInfo = ({ HEX, callback }) => {

    const { state } = useContext(StoreContext);

    return (
        <InfoColoursWrapper>
            <InfoColour
                colourValue = {HEX}
            >
                Dec: <strong>{callback(HEX, state).d}</strong>
            </InfoColour>
            <InfoColour
                colourValue = {HEX}
            >
                Hex: <strong>#{callback(HEX, state).h}</strong>
            </InfoColour>
        </InfoColoursWrapper>
    );
};

export default ColoursInfo;