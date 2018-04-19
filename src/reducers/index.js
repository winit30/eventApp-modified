import {combineReducers} from "redux";

import auth from "./authReducer";
import form from "./formReducer";
import input from "./inputReducer";
import utils from "./utilsReducer";

export default combineReducers({
    form, input, auth, utils
});
