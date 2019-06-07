import {
    GET_PROS_CONS_DATA_SUCCESS,
    GET_PROS_CONS_DATA_FAILURE
} from "../actions";

const initialState = {
    pros: [],
    cons: []
};

export function prosCons(state = initialState, action) {
    switch (action.type) {
        case GET_PROS_CONS_DATA_SUCCESS:
            const {prosCons: {pros, cons}} = action;
            return {
                ...state,
                pros: pros ? pros : [],
                cons: cons ? cons : []
            };

        case GET_PROS_CONS_DATA_FAILURE:
            return {
                ...state,
                pros: [],
                cons: []
            };

        default:
            return state;
    }
}
