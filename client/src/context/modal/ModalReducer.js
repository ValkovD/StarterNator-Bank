import {
    DELETE_MODAL_OPEN,
    EDIT_MODAL_OPEN,
    MODAL_CLOSE
} from "../types";

export default (state, action) => {
    switch (action.type) {
        // delete modal open
        case DELETE_MODAL_OPEN:
            return {
                showDeleteModal: true,
                currentCarId: action.payload
            }

        // edit modal open
        case EDIT_MODAL_OPEN:
            return ({
                showEditModal: true,
                currentCarId: action.payload
            }
            )
        // modal close
        case MODAL_CLOSE:
            return {
                showDeleteModal: false,
                currentCarId: ""
            }
        default:
            return state;
    }
};
