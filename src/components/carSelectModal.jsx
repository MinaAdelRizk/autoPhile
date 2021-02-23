import React, { useState } from 'react';
import Modal from 'react-modal';
import CarSelectMenu from './carSelectMenu';

Modal.setAppElement("#root")


function CarSelectModal() {
    const [modalIsOpen, setModelIsOpen] = useState(false)

    return (
        <div>
            <button className="btn btn-sm btn-warning mx-3" onClick={() => setModelIsOpen(true)}>Select Car <i className="fa fa-car"></i></button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModelIsOpen(false)} shouldCloseOnOverlayClick={false}>

                <div className="modalTop">
                    <button onClick={() => setModelIsOpen(false)} className="btn btn-danger btn-sm float-right">X</button>
                    <h4 className="modalTitle">Select Car</h4>
                </div>

                <div className="modalBody">
                    <CarSelectMenu />
                </div>

            </Modal>

        </div>
    );

}

export default CarSelectModal;