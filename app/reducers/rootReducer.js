'use strict';

import {combineReducers} from 'redux';
import modal from './modalReducer';
import conn from './connReducer';
import route from './routeReducer';
import login from './loginReducer';

export default combineReducers({
	route,
	conn,
	modal,
	login,
})