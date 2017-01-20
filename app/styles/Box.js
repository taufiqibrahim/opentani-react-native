'use strict'

import {StyleSheet} from 'react-native';

export default StyleSheet.create({

	box_upper: {
		flex: 3,
		alignItems: 'stretch',
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20,
	},
	box_lower: {
		flex: 2,
		alignItems: 'stretch',
		alignSelf: 'stretch',
		justifyContent: 'flex-start',
		paddingLeft: 20,
		paddingRight: 20,		
	},	
	text: {
		color: '#505050',
		alignSelf: 'stretch',
		height: 60	//height must be defined in text if flex is used
	},
	texterror: {
		color: 'red',
		alignSelf: 'center',
		height: 60,	//height must be defined in text if flex is used		
		marginTop: 50
	},
})