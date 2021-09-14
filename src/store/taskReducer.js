/**
 * @file taskReducer.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React TaskReducer and Reducer misc.
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

/**
 * Object that stores actions for the reducer (mimics an enum type).
 * @type { string }
 */
export const ACTIONS = {
    SETTING_R: 'SETTING_R',
    SETTING_G: 'SETTING_G',
    SETTING_B: 'SETTING_B',
    RAND_GEN: 'RAND_GEN'
};

/**
 * Function responsible for performing the appropriate modification of the state object
 * based on the action sent. Closely related to React Context and hook useReducer.
 *
 * @param state - storing color components in decimal and hexadecimal form.
 * @param action - dispatcher function (callback).
 * @returns { object } - change state reducer.
 */
const taskReducer = (state, action) => {
    const { SETTING_R, SETTING_G, SETTING_B, RAND_GEN } = ACTIONS;
    switch(action.type) {
        case SETTING_R:
            return {
                decC: { ...state.decC, r: action.counter },
                hexC: { ...state.hexC, r: toHex(action.counter) }
            };
        case SETTING_G:
            return {
                decC: { ...state.decC, g: action.counter },
                hexC: { ...state.hexC, g: toHex(action.counter) }
            };
        case SETTING_B:
            return {
                decC: { ...state.decC, b: action.counter },
                hexC: { ...state.hexC, b: toHex(action.counter) }
            };
        case RAND_GEN:
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            return {
                decC: { r, g, b },
                hexC: { r: toHex(r), g: toHex(g), b: toHex(b) }
            };
        default: throw new Error(`Unexpected task reducer action. Actions: ${action.type} not find!`);
    }
};

/**
 * Function responsible for converting decimal value to hex value (colour components).
 *
 * @param dec { number } - decimal value.
 * @returns { string }
 */
export const toHex = dec => {
    const decInt = parseInt(dec).toString(16);
    return decInt.length !== 1 ? decInt : `0${decInt}`;
};

export default taskReducer;