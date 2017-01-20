'use strict'

import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'

export default ({label, onPress}) => (
  <TouchableHighlight
    onPress={onPress} style={common_styles.button_large_fill_green}>
    <Text style={common_styles.text_button_large_fill}>{label}</Text>
  </TouchableHighlight>
)