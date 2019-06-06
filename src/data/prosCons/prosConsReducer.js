import {
    // UPDATE_PROS_CONS_DATA_SUCCESS,
    GET_PROS_CONS_DATA_SUCCESS,
    GET_PROS_CONS_DATA_FAILURE,
    ADD_PROS,
    ADD_CONS, REMOVE_CONS, REMOVE_PROS
} from "../actions";

const initialState = {
    pros: [],
    cons: []
};

export function prosCons(state = initialState, action) {
    switch (action.type) {
        case GET_PROS_CONS_DATA_SUCCESS:
            return {
                ...state,
                pros: action.payload.pros,
                cons: action.payload.cons
            };

        case GET_PROS_CONS_DATA_FAILURE:
            return {
                ...state,
                pros: [],
                cons: []
            };

        case ADD_PROS:
            return {
                ...state,
                pros: [...state.pros, action.pros],
            };

        case ADD_CONS:
            return {
                ...state,
                cons: [...state.cons, action.cons],
            };

        case REMOVE_PROS:
            const newPros = [...state.pros];
            newPros.splice(action.index, 1);

            return {
                ...state,
                pros: newPros
            };

        case REMOVE_CONS:
            const newCons = [...state.cons];
            newCons.splice(action.index, 1);

            return {
                ...state,
                cons: newCons
            };

        default:
            return state;
    }
}
