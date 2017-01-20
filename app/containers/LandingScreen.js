'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class LandingScreen extends Component {
  static propTypes = {
    routes: React.PropTypes.object
  }
  render () {
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2BA84A',
        height: Dimensions.get('window').height,
      }}>
        <Text
          style={{
            fontFamily: 'sans-serif',
            fontSize: 48,
            color: '#FCFFFC',
            alignSelf: 'center'
          }}
        >Opentani</Text>
      </View>  
    )
  
  }
}

export default connect(({route}) => ({route}))(LandingScreen)