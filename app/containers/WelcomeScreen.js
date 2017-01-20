'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

export default class WelcomeScreen extends Component {
  render () {
    return (
      <View style={common_styles.container_row}>
        
        <View style={box.box_upper}>
          <Text style={common_styles.text_title_large}>Opentani</Text>
        </View>

        <View style={box.box_lower}>
          <Text style={common_styles.text_description}>Belum punya akun?</Text>
          <ButtonLineGreen onPress={Actions.signup} label='Bergabung' />

          <View style={{height: 16}}></View> 

          <ButtonFillGreen onPress={Actions.loginScreen} label='Masuk' />
          <Text style={common_styles.text_description}>Sudah terdaftar?</Text>

        </View>

      </View>  
    )
  
  }
}

