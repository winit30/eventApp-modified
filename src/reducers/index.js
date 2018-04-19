import {combineReducers} from "redux";

import auth from "./authReducer";
import element from "./elementReducer";
import form from "./formReducer";
import utils from "./utilsReducer";

export default combineReducers({
    auth, element, form, utils
});
