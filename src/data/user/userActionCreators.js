import {
    GET_PROS_CONS_DATA_FAILURE,
    GET_PROS_CONS_DATA_SUCCESS,
} from "../actions";
import {APIService} from "../../shared/services/APIService";

const API = APIService();

function getUserDataSuccess(prosCons) {
    return {
        type: GET_PROS_CONS_DATA_SUCCESS,
        payload: prosCons
    }
}

function getUserDataFailure(error) {
    return {
        type: GET_PROS_CONS_DATA_FAILURE,
        payload: error
    }
}

export function getUserData() {
    return (dispatch) => {
        return API.getUserData()
            .then(response => {
                dispatch(getUserDataSuccess(response))
            })
            .catch(error => {
                dispatch(getUserDataFailure(error));
            });
    };
}
