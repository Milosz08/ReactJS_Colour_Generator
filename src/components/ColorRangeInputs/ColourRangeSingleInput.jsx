/**
 * @file ColoursRangeSingleInput.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import ColoursInfo from './ColoursInfo';

import { InfoLabel, RangeInput, RangeInputWrapper } from './ColourRangeInputs.styles';
import THEME from '../../utils/styles';

/**
 * Component responsible for generating a single slider for managing colour components.
 *
 * @param colour { string } - input type (colour).
 * @param HEX { object } - input colour.
 * @param actionType { enum } - dispatcher action type.
 * @returns { JSX.Element }
 */
const ColourRangeSingleInput = ({ colour, HEX, actionType }) => {

    const { state, dispatch } = useContext(StoreContext);
    const [ sliderBgc, setSliderBgc ] = useState('');

    const updateGradientBar = useCallback(valueListener => {
        const percentage = (valueListener - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN) * 100;
        setSliderBgc(`linear-gradient(90deg, ${HEX} ${percentage}%, ${THEME.LIGHTGRAY_COLOUR} ${percentage}%)`);
    }, [HEX]);

    const handleOnChange = ({ target }) => {
        dispatch({ type: actionType, counter: Number(target.value) });
        updateGradientBar(target.value);
    };

    useEffect(() => {
        updateGradientBar(decAndHexState(HEX, state).d);
    }, [HEX, state, updateGradientBar]);

    return (
        <RangeInputWrapper>
            <InfoLabel
                colourValue = {HEX}
            >
                {colour} Colour ({colour.substring(0, 1)})
            </InfoLabel>
            <RangeInput
                colourValue = {HEX}
                bgcValue = {sliderBgc}
                type = 'range'
                value = {decAndHexState(HEX, state).d}
                onChange = {handleOnChange}
                min = {SLIDER_MIN}
                max = {SLIDER_MAX}
            />
            <ColoursInfo
                callback = {decAndHexState}
                HEX = {HEX}
            />
        </RangeInputWrapper>
    );
};

/**
 * Function that returns an object with color values based on the passed enum value in the component parameters.
 *
 * @param value { string } - value from event listener or dispatcher state.
 * @param state { object } - current state from React Context.
 *
 * @returns { object } - object with hex and decimal colour value.
 */
const decAndHexState = (value, state) => {
    switch(value) {
        case THEME.RED_COLOUR:      return { d: state.decC.r, h: state.hexC.r };
        case THEME.GREEN_COLOUR:    return { d: state.decC.g, h: state.hexC.g };
        case THEME.BLUE_COLOUR:     return { d: state.decC.b, h: state.hexC.b };
        default:                    throw new Error(`Unexpected HEX color value! Color value: ${value} is not supported`);
    }
}

/**
 * Range of inputs.
 */
const SLIDER_MIN = 0;
const SLIDER_MAX = 255;

export default ColourRangeSingleInput;