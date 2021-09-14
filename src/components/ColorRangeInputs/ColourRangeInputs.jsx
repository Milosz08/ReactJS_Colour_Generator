/**
 * @file ColoursRangeInputs.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import * as React from 'react';
import { ACTIONS } from '../../store/StoreProvider';
import THEME from '../../utils/styles';

import ColourRangeSingleInput from './ColourRangeSingleInput';

import { RangeInputsContainer } from './ColourRangeInputs.styles';

/**
 * Component responsible for generating all inputs for entering color component values.
 *
 * @returns { JSX.Element }
 */
const ColourRangeInputs = () => {

    return (
        <RangeInputsContainer>
            <ColourRangeSingleInput
                colour = 'red'
                HEX = {THEME.RED_COLOUR}
                actionType = {ACTIONS.SETTING_R}
            />
            <ColourRangeSingleInput
                colour = 'green'
                HEX = {THEME.GREEN_COLOUR}
                actionType = {ACTIONS.SETTING_G}
            />
            <ColourRangeSingleInput
                colour = 'blue'
                HEX = {THEME.BLUE_COLOUR}
                actionType = {ACTIONS.SETTING_B}
            />
        </RangeInputsContainer>
    );
};

export default ColourRangeInputs;