import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ModalContext from '../../context/modal/ModalContext';
import SubmitCar from '../SubmitCar';


const EditCarModal = () => {
    //init context ===========================
    const modalContext = useContext(ModalContext);
    const { showEditModal, closeModal } = modalContext;
    // ==========================================
    const close = () => closeModal();
    return (
        <>
            <Modal
                show={showEditModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header>
                    <Modal.Title>Edit Vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SubmitCar />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCarModal;