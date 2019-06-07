import {GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS} from "../actions";
import {APIService} from "../../shared/services/APIService";

const API = APIService();

function getUserDataSuccess(userData) {
    return {
        type: GET_USER_DATA_SUCCESS,
        userData
    }
}

function getUserDataFailure(error) {
    return {
        type: GET_USER_DATA_FAILURE,
        error
    }
}

export function getUserData() {
    return (dispatch) => {
        return API.getUserData()
            .then(response => dispatch(getUserDataSuccess(response)))
            .catch(error => dispatch(getUserDataFailure(error)))
    };
}
