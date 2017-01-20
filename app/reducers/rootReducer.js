'use strict';

import {combineReducers} from 'redux';
import route from './routeReducer';
import user from './userReducer'

export default combineReducers({
	route,
	user,
})