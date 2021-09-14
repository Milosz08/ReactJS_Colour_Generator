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

import React, { createContext, useEffect, useReducer } from 'react';
import taskReducer, { ACTIONS } from './taskReducer';

/**
 * Create the context of the store. Function exported and used to destructurize context members.
 * @type { React.Context<{}> }
 */
export const StoreContext = createContext({ });

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

    const randomGenerator = () => {
        dispatch({ type: ACTIONS.RAND_GEN });
    }

    useEffect(() => {
        randomGenerator();
    }, []);

    return (
        <StoreContext.Provider
            value = {{
                state, dispatch, randomGenerator
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;