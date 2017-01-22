'use strict'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes'
import { Actions } from 'react-native-router-flux'

export function loginRequest(email, password) {
	const user = {email: email, password: password}
	return {
		type: LOGIN_REQUEST,
		user,
	}
}

export function loginSuccess(response) {
	return dispatch => {
		dispatch({
			type: LOGIN_SUCCESS,
			response,
		})
	}
}

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error,
	}
}

export function logout() {
	return {
		type: LOGOUT,
	}
}

export function login(userdata) {
	return dispatch => {
		fetch('http://103.7.226.221:3000/auth', {
			method: 'post',
			headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',				
			},
			body: JSON.stringify({
				email: userdata.email,
				password: userdata.password,
			}),
		})
		.then(response => response.json())
		.then(res => {
			if (res.status >= 200 && res.status < 300) {
				// ----Login OK
				dispatch(loginSuccess(res));
				console.log(res);
				dispatch(Actions.landingScreen);
			} else {
				// ----Login Failure
				console.log(res);
				// const error = new Error(res.text);
				let error = res.text;
				dispatch(loginFailure(error));
				// throw error;
			}
		})
	}
}