'use strict'

import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import grid from '../styles/Grid'
import common_styles from '../styles/CommonStyles'

export default ({label, onPress}) => (
  <View style={grid.item_plain}>
	  <TouchableHighlight
	    onPress={onPress} style={grid.button_grid_plain}>
	    <Text style={grid.text_green}>{label}</Text>
	  </TouchableHighlight>
	 </View>
)