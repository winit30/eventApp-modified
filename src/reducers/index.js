import {combineReducers} from "redux";

import auth from "./authReducer";
import form from "./formReducer";
import utils from "./utilsReducer";

export default combineReducers({
    auth, form, utils
});
