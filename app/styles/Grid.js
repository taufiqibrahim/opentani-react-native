'use strict'

import {StyleSheet} from 'react-native';

export default StyleSheet.create({

	header: {
		flex: 0.1,
	},
	body: {
		flex: 0.8
	},
	footer: {
		flex: 0.1,
		backgroundColor: '#FCFFFC',
	},	
	container: {
		flex: 1,
		backgroundColor: '#2BA84A',
	},
	horizontal: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-around',
	},
	vertical: {
		flex: 1,
		flexDirection: 'column',
	},
	item_plain: {
		flex: 1,
		backgroundColor: '#FCFFFC',
		borderColor: '#505050',
	},
	button_grid_plain: {
		flex: 1,
		backgroundColor: '#FCFFFC',
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
	},
	title_text: {
		fontFamily: 'sans-serif',
		fontSize: 40,
		color: '#FCFFFC',
		alignSelf: 'center',
		textAlign: 'center',
	},	
	text_green: {
		fontFamily: 'sans-serif',
		fontSize: 16,
		color: '#2BA84A',
		alignSelf: 'center',
		textAlign: 'center',
	},	
	icon_green: {
		fontFamily: 'sans-serif',
		fontSize: 32,
		color: '#2BA84A',
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 16,
	},		
	
})