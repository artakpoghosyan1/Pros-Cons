import {
    GET_PROS_CONS_DATA_FAILURE,
    GET_PROS_CONS_DATA_SUCCESS,
    ADD_CONS,
    ADD_PROS,
    REMOVE_PROS,
    REMOVE_CONS,
    UPDATE_PROS_CONS_DATA_FAILURE,
    UPDATE_PROS_CONS_DATA_SUCCESS,
} from "../actions";
import {APIService} from "../../shared/services/APIService";

const API = APIService();

function getProsConsDataSuccess(prosCons) {
    return {
        type: GET_PROS_CONS_DATA_SUCCESS,
        payload: prosCons
    }
}

function getProsConsDataFailure(error) {
    return {
        type: GET_PROS_CONS_DATA_FAILURE,
        error
    }
}

// function updateProsConsDataSuccess(prosCons) {
//     return {
//         type: UPDATE_PROS_CONS_DATA_SUCCESS,
//         prosCons
//     }
// }

function updateProsConsDataFailure(error) {
    return {
        type: UPDATE_PROS_CONS_DATA_FAILURE,
        error
    }
}

export function addPros(pros) {
    return {
        type: ADD_PROS,
        pros
    }
}

export function addCons(cons) {
    return {
        type: ADD_CONS,
        cons
    }
}

export function removePros(index) {
    return {
        type: REMOVE_PROS,
        index
    }
}

export function removeCons(index) {
    return {
        type: REMOVE_CONS,
        index
    }
}

export function getProsConsData() {
    return (dispatch) => {
        return API.getProsConsData()
            .then(response => {
                dispatch(getProsConsDataSuccess(response))
            })
            .catch(error => {
                dispatch(getProsConsDataFailure(error));
            });
    };
}

// export function updateProsConsData() {
//     return (dispatch) => {
//         return API.getUserData()
//             .then(response => {
//                 dispatch(updateProsConsDataSuccess(response))
//             })
//             .catch(error => {
//                 dispatch(updateProsConsDataFailure(error));
//             });
//     };
// }
