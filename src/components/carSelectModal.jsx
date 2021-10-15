import React, { useState } from 'react';
import Modal from 'react-modal';

import CarMenu from './carMenu';


Modal.setAppElement("#root")

// const getCarValue = (input) => {
//     console.log("car value in Modal is ", input)
// }

const CarSelectModal = ({ btnName, selectedCar }) => {
    const [modalIsOpen, setModelIsOpen] = useState(false)


    return (
        <div>
            <button className="btn btn-sm btn-warning mx-3" onClick={() => setModelIsOpen(true)}>{btnName} <i className="fa fa-car"></i></button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModelIsOpen(false)} shouldCloseOnOverlayClick={false}>

                <div className="modalTop">
                    <button onClick={() => setModelIsOpen(false)} className="btn btn-danger btn-sm float-right">X</button>
                    <h4 className="modalTitle">Select</h4>
                </div>

                <div className="modalBody">

                    <CarMenu />

                </div>

            </Modal>

        </div>
    );

}

export default CarSelectModal;