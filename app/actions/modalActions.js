'use strict'

import { MODAL_SHOW, MODAL_CLOSE } from './actionTypes'
import { Actions } from 'react-native-router-flux'

export function modalShow(modalMessage) {
	return {
		type: MODAL_SHOW,
		modalMessage,
	}
}

export function modalClose() {
	return {
		type: MODAL_CLOSE,
	}
}