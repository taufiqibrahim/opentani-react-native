import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

	button_large_fill_green: {
		height: 48,
		backgroundColor: '#2BA84A',
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_large_fill: {
		fontFamily: 'sans-serif',
		fontSize: 24,
		color: '#FCFFFC',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	button_large_line_green: {
		height: 48,
		borderColor: '#2BA84A',
		borderWidth: 2,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_large_line: {
		fontFamily: 'sans-serif',
		fontSize: 24,
		color: '#2BA84A',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	text_title_large: {
		fontFamily: 'sans-serif',
		fontSize: 56,
		color: '#2BA84A',
		alignSelf: 'center',
		textAlign: 'center',
	},

	text_description: {
		fontFamily: 'sans-serif',
		fontSize: 14,
		color: '#505050',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	container_row: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FCFFFC',
		height: Dimensions.get('window').height,
	},
	
})