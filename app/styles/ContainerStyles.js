import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

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