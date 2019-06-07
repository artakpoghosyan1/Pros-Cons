import {
    GET_PROS_CONS_DATA_FAILURE,
    GET_PROS_CONS_DATA_SUCCESS
} from "../actions";
import {APIService} from "../../shared/services/APIService";

const API = APIService();

function getProsConsDataSuccess(prosCons) {
    return {
        type: GET_PROS_CONS_DATA_SUCCESS,
        prosCons
    }
}

function getProsConsDataFailure(error) {
    return {
        type: GET_PROS_CONS_DATA_FAILURE,
        error
    }
}

export function getProsConsData(groupId, userId) {
    return (dispatch) => {
        return API.getProsConsData(groupId, userId)
            .then(response => dispatch(getProsConsDataSuccess(response)))
            .catch(error => dispatch(getProsConsDataFailure(error)))
    };
}

export function updateProsConsData(userData, prosCons) {
    return (dispatch) => {
        return API.updateProsConsData(userData, prosCons)
            .then(response => dispatch(getProsConsDataSuccess(response)))
            .catch(error => dispatch(getProsConsDataFailure(error)))
    };
}
