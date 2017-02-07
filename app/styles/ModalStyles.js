'use strict'

import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#FCFFFC',
		opacity: 0.8,
	},
	header: {
		flex: 2,
		backgroundColor: '#FCFFFC',
		opacity: 0.8,		
	},
	main: {
		flex: 1,
		alignItems: 'stretch',
		alignSelf: 'stretch',
		paddingLeft: 20,
		paddingRight: 20,	
		backgroundColor: '#FCFFFC',
		opacity: 0.8,		
	},		
	footer: {
		flex: 1,
		backgroundColor: '#FCFFFC',
		opacity: 0.8,		
	},	
	modal_box: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FCFFFC',
		borderColor: '#505050',
		borderRadius: 5,
		borderWidth: 1,
		elevation: 2,
		padding: 24,
	},
	modal_text: {
		alignSelf: 'stretch',
		color: '#505050',
		height: 60	//height must be defined in text if flex is used
	},
	
})