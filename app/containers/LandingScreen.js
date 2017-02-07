'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class LandingScreen extends Component {
  static propTypes = {
    routes: React.PropTypes.object
  }

  componentDidMount() {
    // const token = AsyncStorage.getItem('token');
    // console.log(token);
    this._getStoredToken();
  }

  async _getStoredToken() {
    var token = await AsyncStorage.getItem('token')
    console.log(token);
    return token
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