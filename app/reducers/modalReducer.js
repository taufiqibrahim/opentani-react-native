'use strict'

import { MODAL_SHOW, MODAL_CLOSE } from '../actions/actionTypes'

const initialState = {
	modalVisible: false,
	modalMessage: null,
}

export default function user(state =  initialState, action) {
	switch(action.type) {
		case MODAL_SHOW:
			return Object.assign({}, state, {
				modalVisible: true,
				modalMessage: action.modalMessage,
			})
		case MODAL_CLOSE:
			return initialState;
		default:
			return state;
	}
}