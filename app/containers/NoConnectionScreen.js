'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class NoConnectionScreen extends Component {

  render() {

    return (
      <View style={common_styles.container_row}>
        
        <View style={box.box_upper}>
          <Text style={common_styles.text_title_large}>Internet Tidak Tersedia</Text>
        </View>

        <View style={box.box_lower}>
          <Text style={common_styles.text_description}>Saat ini koneksi internet tidak tersedia.</Text>
          <View style={{height: 16}}></View>
          <Text style={common_styles.text_description}>Anda tetap bisa menggunakan aplikasi Opentani secara terbatas.</Text>
          <View style={{height: 48}}></View>
          <ButtonLineGreen onPress={Actions.landingScreen} label='Gunakan Tanpa Internet' />

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