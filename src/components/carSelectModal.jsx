import React, { useState } from 'react';
import Modal from 'react-modal';
import CarSelectMenu from './carSelectMenu';

Modal.setAppElement("#root")

function CarSelectModal() {
    const [modalIsOpen, setModelIsOpen] = useState(false)
    return (
        <div>
            <button className="btn btn-sm btn-warning mx-2" onClick={() => setModelIsOpen(true)}>Select Car <i className="fa fa-car"></i></button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModelIsOpen(false)} shouldCloseOnOverlayClick={false}>
                <h4>Modal Title</h4>

                <CarSelectMenu />

                <button onClick={() => setModelIsOpen(false)}>close</button>
            </Modal>

        </div>
    );

}

export default CarSelectModal;