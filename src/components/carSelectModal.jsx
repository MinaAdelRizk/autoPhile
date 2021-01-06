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

                <button onClick={() => setModelIsOpen(false)} className="btn btn-danger btn-sm float-right m-3">X</button>
                <h4>Select Car</h4>

                <CarSelectMenu />

                <button className="btn btn-sm btn-success">Save</button>
            </Modal>

        </div>
    );

}

export default CarSelectModal;