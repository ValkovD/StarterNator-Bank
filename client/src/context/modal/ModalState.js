import React, { useReducer } from "react";

import ModalContext from "./ModalContext";
import ModalReducer from "./ModalReducer";

import {
    DELETE_MODAL_OPEN,
    EDIT_MODAL_OPEN,
    MODAL_CLOSE,

} from "../types";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const ModalState = (props) => {
    // init state
    const initialState = {
        showDeleteModal: false,
        showEditModal: false,
        currentCarId: ""
    }
    const [state, dispatch] = useReducer(ModalReducer, initialState);

    // open delete modal
    const openDeleteModal = (carId) => {
        dispatch({ type: DELETE_MODAL_OPEN, payload: carId })
    }
    // open edit modal
    const openEditModal = (carId) => {
        dispatch({ type: EDIT_MODAL_OPEN, payload: carId })
    }
    // close modal
    const closeModal = () => {
        dispatch({ type: MODAL_CLOSE })
    }



    return (
        <ModalContext.Provider
            value={{
                openDeleteModal,
                openEditModal,
                closeModal,
                showDeleteModal: state.showDeleteModal,
                showEditModal: state.showEditModal,
                currentCarId: state.currentCarId,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
};
export default ModalState;