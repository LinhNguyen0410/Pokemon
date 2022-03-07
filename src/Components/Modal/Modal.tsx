import React from 'react';
import { CloseButton, ModalBottom, ModalPokemon, ModalTop } from './ModalStyled';

Modal.propTypes = {
    
};

function Modal() {
    return (
        <ModalPokemon>
            <ModalTop>
            </ModalTop>
            <ModalBottom></ModalBottom>
            <CloseButton>X</CloseButton>
        </ModalPokemon>
    );
}

export default Modal;