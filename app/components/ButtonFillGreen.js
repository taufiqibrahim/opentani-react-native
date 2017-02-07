'use strict'

import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'

export default ({label, onPress}) => (
  <TouchableHighlight
    onPress={onPress} style={button_styles.button_large_fill_green}>
    <Text style={button_styles.text_button_large_fill}>{label}</Text>
  </TouchableHighlight>
)