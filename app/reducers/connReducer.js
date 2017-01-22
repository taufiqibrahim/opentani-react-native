'use strict'

import { UPDATE_CONNECTIVITY } from '../actions/actionTypes'

const initialState = {
	isConnected: false,		// The app is assumed to have offline default state
}

export default function conn (state=initialState, action) {
	switch (action.type) {
		case UPDATE_CONNECTIVITY:
			return Object.assign({}, state, {
				isConnected: action.isConnected,
			})
		default: 
			return state;
	}
}