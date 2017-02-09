'use strict';

import { UPDATE_CONNECTIVITY } from './actionTypes'
import { Actions } from 'react-native-router-flux'

export function updateConnectivity(isConnected) {
	return dispatch => {
		dispatch({
			type: UPDATE_CONNECTIVITY,
			isConnected,
		})
	}
}

export function checkConnectivity(isConnected) {
	return dispatch => {
		console.log(isConnected);
		dispatch(updateConnectivity(isConnected))
		if (isConnected) {
			console.log('jalur konek');
    	setTimeout(function(){
    		dispatch(Actions.welcomeScreen)
    	},2000)
			// dispatch(Actions.welcomeScreen)
		} else {
			console.log('internet modar')
		}	
	}
}