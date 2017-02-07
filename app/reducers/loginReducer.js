'use strict'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/actionTypes'

const initialState = {
	isLoggedIn: false,
	isLoggingIn: false,
	token: '',
	email: '',
	password: '',
	error: null,
	errorMessage: null,
}

export default function user(state =  initialState, action) {
	switch(action.type) {
		case LOGIN_REQUEST:
			return Object.assign({}, state, {
				isLoggingIn: true,
				isLoggedIn: false,
				email: action.email,
				password: action.password,
			})
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoggingIn: false,
				isLoggedIn: true,
				token: action.response.token,
				error: null,
			})
		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isLoggingIn: false,
				isLoggedIn: false,
				error: action.error,
				errorMessage: action.errorMessage,
			})
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
}