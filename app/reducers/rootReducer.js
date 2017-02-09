'use strict';

import {combineReducers} from 'redux';
import modal from './modalReducer';
import conn from './connReducer';
import route from './routeReducer';
import login from './loginReducer';
import signup from './signupReducer';

export default combineReducers({
	route,
	conn,
	modal,
	login,
	signup,
})