'use strict';

import {combineReducers} from 'redux';
import conn from './connReducer';
import route from './routeReducer';
import user from './userReducer';

export default combineReducers({
	route,
	conn,
	user,
})