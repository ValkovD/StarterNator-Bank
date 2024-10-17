import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import ModalContext from '../context/modal/ModalContext';
import Button from 'react-bootstrap/esm/Button';
import CarContext from '../context/car/CarContext';

const DeleteCarModal = () => {
    // context init=============================
    // modal context
    const modalContext = useContext(ModalContext);
    const { showDeleteModal, closeModal, currentCarId } = modalContext;
    // car context
    const carContext = useContext(CarContext)
    const { deleteCar } = carContext;
    // =========================================
    const close = () => closeModal()
    const del = (e) => {
        deleteCar(currentCarId);
        closeModal()
    };
    return (
        <Modal
            show={showDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header>
                <Modal.Title>ARE YOU SURE ???</Modal.Title>
            </Modal.Header>
            <Modal.Body>{`You will delete `}</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={close} >
                    CANCEL
                </Button>
                <Button variant="danger" onClick={del}>
                    DELETE
                </Button>
            </Modal.Footer>
        </Modal>


    )
};
export default DeleteCarModal;
{/* <Modal show={showDeleModal} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>ARE YOU SURE ???</Modal.Title>
</Modal.Header>
<Modal.Body>{`You will delete `}</Modal.Body>
<Modal.Footer>
    <Button variant="dark" onClick={handleClose}>
        CANCEL
    </Button>
    <Button id={car._id} variant="danger" onClick={handleDelete}>
        DELETE
    </Button>
</Modal.Footer>
</Modal> */}