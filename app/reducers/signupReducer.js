'use strict'

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/actionTypes'

const initialState = {
	isSignedIn: false,
	isSigningIn: false,
	ektp_id: null,
	username: null,
	email: '',
	password: '',
	error: null,
	errorMessage: null,
}

export default function user(state =  initialState, action) {
	switch(action.type) {
		case SIGNUP_REQUEST:
			return Object.assign({}, state, {
				isSigningIn: true,
				isSignedIn: false,
				ektp_id: action.ektp_id,
				username: action.username,
				email: action.email,
				password: action.password,
			})
		case SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				isSigningIn: false,
				isSignedIn: true,
				token: action.response.token,
			})
		case SIGNUP_FAILURE:
			return Object.assign({}, state, {
				isLoggingIn: false,
				isLoggedIn: false,
				error: action.error,
				errorMessage: action.errorMessage,
			})
		default:
			return state;
	}
}