import {GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS} from "../actions";

const initialState = {
    groupId: null,
    userId: null
};

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
                groupId: action.userData[0].groupId,
                userId: action.userData[1].userId
            };

        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                userData: {}
            };

        default:
            return state;
    }
}
