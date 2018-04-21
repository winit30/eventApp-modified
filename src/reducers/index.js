import {combineReducers} from "redux";

import auth from "./authReducer";
import event from "./eventReducer";
import form from "./formReducer";
import utils from "./utilsReducer";

export default combineReducers({
    auth, form, utils, event
});
