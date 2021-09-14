/**
 * @file ColourGeneratorApp.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import * as React from 'react';

import StoreProvider from '../../store/StoreProvider';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ColourRangeInputs from '../ColorRangeInputs/ColourRangeInputs';
import CenterColour from '../CenterColour/CenterColour';
import BottomButtons from '../BottomButtons/BottomButtons';

import { GlobalStyles, Container } from './ColourGeneratorApp.styles';

const ColourGeneratorApp = () => (
    <StoreProvider>
        <GlobalStyles/>
        <Modal/>
        <Container>
            <Header/>
            <ColourRangeInputs/>
            <CenterColour/>
            <BottomButtons/>
        </Container>
    </StoreProvider>
);


export default ColourGeneratorApp;
