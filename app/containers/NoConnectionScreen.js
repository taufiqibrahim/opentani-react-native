'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonLineLarge from '../components/Button'

import container_styles from '../styles/ContainerStyles'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class NoConnectionScreen extends Component {

  render() {

    return (
      <View style={container_styles.container_row}>
        
        <View style={box.box_upper}>
          <Text style={button_styles.text_title_large}>Internet Tidak Tersedia</Text>
        </View>

        <View style={box.box_lower}>
          <Text style={button_styles.text_description}>Saat ini koneksi internet tidak tersedia.</Text>
          <View style={{height: 16}}></View>
          <Text style={button_styles.text_description}>Anda tetap bisa menggunakan aplikasi Opentani secara terbatas.</Text>
          <View style={{height: 48}}></View>
          <ButtonLineLarge onPress={Actions.landingScreen} label='Gunakan Tanpa Internet' />

        </View>

      </View>
    )
  }
}

// function mapStateToProps(state) {
// 	const email = state.email;
// 	const password = state.password
//   // conn = state.conn
//   // console.log(state.conn.isConnected)
	
// 	return { email, password}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators(loginActions, dispatch),
// 	}
// }

export default connect()(NoConnectionScreen)

// export default NoConnectionScreen