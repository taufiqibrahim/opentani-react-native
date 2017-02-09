'use strict'

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage, } from 'react-native'
import * as ModalActions from './modalActions'

export function signupRequest(ektp_id, username, email, password) {
	const user = {ektp_id: ektp_id, username: username, email: email, password: password}
	return {
		type: SIGNUP_REQUEST,
		user,
	}
}

export function signupSuccess(response) {
	return dispatch => {
		dispatch({
			type: SIGNUP_SUCCESS,
			response,
		})
	}
}

export function signupFailure(error, errorMessage) {
	return {
		type: SIGNUP_FAILURE,
		error,
		errorMessage,
	}
}

export function storeToken(token) {
	// store token to Asyncstorage
	AsyncStorage.setItem('token', token)
}

export function signup(userdata) {
	return dispatch => {
		fetch('http://103.7.226.221:3000/signup', {
			method: 'post',
			headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',				
			},
			body: JSON.stringify({
				ektp_id: userdata.ektp_id,
				username: userdata.username,
				email: userdata.email,
				password: userdata.password,
			}),
		})
		.then(response => response.json())
		.then(res => {
			if (res.status >= 200 && res.status < 300) {
				// ----SIGNUP OK!
				dispatch(signupSuccess(res));
				storeToken(res.token);
				dispatch(Actions.mainMenuScreen);
			} else {
				// ----SIGNUP Failure!
				console.log(res);
				let error = res.text; 
				let errorMessage = res.error.message;
				dispatch(signupFailure(error, errorMessage));
				dispatch(ModalActions.modalShow(errorMessage));
			}
		})
	}
}