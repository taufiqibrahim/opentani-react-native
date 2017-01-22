'use strict'

import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Dimensions, NetInfo } from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as connActions from '../actions/connActions';

import { Actions } from 'react-native-router-flux'

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class SplashScreen extends Component {

  componentDidMount() {
    console.log('SplashScreen loaded')
    console.log(this)
    NetInfo.isConnected.addEventListener(
      'change', this.handleConnectivityChange
    );
    // setTimeout(function() {
    //   // Actions.loginScreen
    //   Actions.landingScreen
    // },3000)
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change', this.handleConnectivityChange
    )
  }

  handleConnectivityChange = (isConnected) => {
    console.log(isConnected);
    this.props.actions.checkConnectivity(isConnected); // Dispatching action after 2 secs
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
            fontSize: 40,
            color: '#FCFFFC',
            alignSelf: 'center',
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          ..bikin pertanian keren lagi..
        </Text>
      </View>  
    )  
  }
}

function mapStateToProps(state) {
  const isConnected = ''
  
  return { isConnected }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(connActions, dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashScreen)