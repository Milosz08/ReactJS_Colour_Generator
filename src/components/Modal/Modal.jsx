/**
 * @file Modal.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Stateless functional component (simplify state with React Hooks).
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import { LineSeparator } from '../Header/Header.styles';
import { MODAL_TYPE } from '../BottomButtons/BottomButtons';

import THEME from '../../utils/styles';
import {
    CenterBase, CloseButton, ModalContainer, ModalHeader, ModalWrapper, OuterBase, SecondCloseButton
} from './Modal.styles';

/**
 * Component responsible for generating a modal responsible for generating information about the
 * colour copied to the clipboard.
 *
 * @returns { JSX.Element }
 */
const Modal = () => {

    const { modal, setModal, colourString, textColour, rgbRef, hexRef } = useContext(StoreContext);
    const { LIGHT } = THEME.BUTTON_MODES;

    const [ opacity, setOpacity ] = useState('0');
    const [ display, setDisplay ] = useState('none');

    const handleCloseModal = () => {
        setOpacity('0');
        setTimeout(() => setDisplay('none'), 200);
        setModal({ ...modal, ifOpen: false });
    }

    useEffect(() => {
        if (modal.ifOpen) {
            let currentElement;
            if (rgbRef !== null && modal.type === MODAL_TYPE.DEC) {
                currentElement = rgbRef.current;
            } else if (hexRef !== null && modal.type === MODAL_TYPE.HEX) {
                currentElement = hexRef.current;
            }
            currentElement.select();
            currentElement.setSelectionRange(0, currentElement.value.length);
            document.execCommand('copy');
            setDisplay('flex');
            setTimeout(() => setOpacity('1'), 200);
        }
    }, [ hexRef, modal.ifOpen, modal.type, rgbRef ]);

    return (
        <ModalContainer
            visible={display}
            opacity={opacity}
        >
            <ModalWrapper
                opacity={opacity}
                translate={`translateY(${opacity === '1' ? '0' : '10'}px)`}
            >
                <ModalHeader>
                    <div>Colour Detail</div>
                    <CloseButton
                        onClick={handleCloseModal}
                        title="Close Modal"
                    />
                </ModalHeader>
                <LineSeparator/>
                <OuterBase>The following color value has just been copied to the clipboard:</OuterBase>
                <CenterBase
                    actualPickColour={colourString.hexC}
                    textColour={textColour}
                >
                    {modal.type === MODAL_TYPE.DEC ? colourString.rgbC : colourString.hexC.toLocaleUpperCase()}
                </CenterBase>
                <OuterBase>You can put it in CSS file or anywhere you need.</OuterBase>
                <SecondCloseButton
                    buttonMode={LIGHT}
                    onClick={handleCloseModal}
                >
                    Close Modal
                </SecondCloseButton>
            </ModalWrapper>
        </ModalContainer>
    );
};

export default Modal;