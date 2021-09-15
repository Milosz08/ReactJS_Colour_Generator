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

import { CenterColourContainer, HexInfo, RgbInfo } from './CenterColour.styles';

/**
 * Component responsible for generating the main colour panel along with rgb and hex value information.
 *
 * @returns { JSX.Element }
 */
const CenterColour = () => {

    const { colourString, textColour, rgbRef, hexRef } = useContext(StoreContext);

    return (
        <CenterColourContainer
            background={colourString.hexC}
        >
            <RgbInfo readOnly
                     value={colourString.rgbC}
                     colour={textColour}
                     ref={rgbRef}
            >
            </RgbInfo>
            <HexInfo readOnly
                     value={colourString.hexC.toLocaleUpperCase()}
                     colour={textColour}
                     ref={hexRef}
            >
            </HexInfo>
        </CenterColourContainer>
    );
};

export default CenterColour;