'use strict'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage, } from 'react-native'
import * as ModalActions from './modalActions'

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

export function loginFailure(error, errorMessage) {
	return {
		type: LOGIN_FAILURE,
		error,
		errorMessage,
	}
}

export function logout() {
	return {
		type: LOGOUT,
	}
}

export function storeToken(token) {
	// store token to Asyncstorage
	AsyncStorage.setItem('token', token)
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
				// console.log(res);
				storeToken(res.token);
				dispatch(Actions.mainMenuScreen);
			} else {
				// ----Login Failure
				console.log(res);
				let error = res.text; 
				let errorMessage = res.error.message;
				dispatch(loginFailure(error, errorMessage));
				dispatch(ModalActions.modalShow(errorMessage));
				// dispatch(Actions.statusModal);
			}
		})
	}
}