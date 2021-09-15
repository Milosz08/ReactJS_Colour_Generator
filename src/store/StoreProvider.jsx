/**
 * @file StoreProvider.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import React, { createContext, useEffect, useReducer, useRef, useState } from 'react';
import taskReducer, { ACTIONS } from './taskReducer';

import { MODAL_TYPE } from '../components/BottomButtons/BottomButtons';

import THEME from '../utils/styles';

/**
 * Create the context of the store. Function exported and used to destructurize context members.
 * @type { React.Context<{}> }
 */
export const StoreContext = createContext({});

/**
 * Component responsible for generating and delivering application state to all components.
 *
 * @param children { React.ReactNode } - all nodes of the virtual DOM React tree covered by the Provider.
 * @returns { JSX.Element }
 */
const StoreProvider = ({ children }) => {

    const coloursObject = {
        decC: { r: 0, g: 0, b: 0 },
        hexC: { r: '', g: '', b: '' }
    };

    const [ state, dispatch ] = useReducer(taskReducer, coloursObject);

    const [ modal, setModal ] = useState({ ifOpen: false, type: MODAL_TYPE.DEC });
    const [ colourString, setColourString ] = useState({ rgbC: '', hexC: '' });
    const [ textColour, setTextColour ] = useState(THEME.BLACK_COLOUR);

    const rgbRef = useRef(null);
    const hexRef = useRef(null);

    const randomGenerator = () => {
        dispatch({ type: ACTIONS.RAND_GEN });
    }

    useEffect(() => {
        randomGenerator();
    }, []);

    useEffect(() => {
        const colorSwitcher = () => {
            const yiq = ((state.decC.r * 299) + (state.decC.g * 587) + (state.decC.b * 114)) / 1000;
            const colour = yiq > 140 ? THEME.BLACK_COLOUR : THEME.WHITE_COLOUR;
            setTextColour(colour);
        };
        colorSwitcher();
    }, [ state ]);

    return (
        <StoreContext.Provider
            value={{
                state, dispatch,
                modal, setModal,
                colourString, setColourString,
                textColour, setTextColour,
                rgbRef, hexRef,
                randomGenerator
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;