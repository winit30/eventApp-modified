import { combineReducers } from 'redux';
import form from './formReducer';
import input from './inputReducer';
import auth from './authReducer';
import utils from './utilsReducer';

export default combineReducers({
 form, input, auth, utils
});
