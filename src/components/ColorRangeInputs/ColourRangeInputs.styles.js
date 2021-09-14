/**
 * @file ColourRangeInputs.styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Styled Components file.
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import styled from 'styled-components';
import THEME from '../../utils/styles';

const { WHITE_COLOUR, BORDER_RADIUS, TEXT_COLOUR } = THEME;

export const RangeInputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin: 50px 0;
`;

export const RangeInputWrapper = styled.div`
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 637px) {
        width: 100%;
        margin: 20px 0;
        :nth-child(1) {
            margin-top: 0;
        }
    }
`;

export const InfoLabel = styled.div`
    margin-bottom: 30px;
    text-transform: capitalize;
    color: ${props => props.colourValue};
    font-weight: 500;
`;

export const RangeInput = styled.input.attrs(props => ({
    style: {
        backgroundImage: props.bgcValue,
    }
}))`
    width: calc(100% - 40px);
    margin: 0 20px;
    appearance: none;
    ::-webkit-slider-thumb {
        appearance: none;
        background-color: ${props => props.colourValue};
        border: 5px solid ${WHITE_COLOUR};
        height: 23px;
        width: 23px;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -10px;
    }
    ::-webkit-slider-runnable-track {
        height: 3px;
        cursor: pointer;
        border-radius: ${BORDER_RADIUS};
    }
    :focus {
        outline: none;
    }
`;

export const InfoColoursWrapper = styled.div`
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
`;

export const InfoColour = styled.div`
    color: ${TEXT_COLOUR};
    strong {
        color: ${props => props.colourValue};
    }
`;