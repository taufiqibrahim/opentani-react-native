'use strict'

import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import grid from '../styles/Grid'
import button_styles from '../styles/ButtonStyles'

export default ({label, icon, onPress}) => (
  <View style={grid.item_plain}>
	  <TouchableHighlight
	    onPress={onPress} style={grid.button_grid_plain}>
	    <View>
	    	<Icon name={icon} style={grid.icon_green} />
	    	<Text style={grid.text_green}>{label}</Text>
	    </View>
	  </TouchableHighlight>
	 </View>
)