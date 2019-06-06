import {combineReducers } from 'redux';
import {prosCons} from './prosCons/prosConsReducer';
import {user} from "./user/userReducer";

export default combineReducers({
    prosCons,
    user
});
