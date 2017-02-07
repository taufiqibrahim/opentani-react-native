'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import * as modalActions from '../actions/modalActions';

import { Actions } from 'react-native-router-flux';

import { ButtonFillLarge } from '../components/Button'
import StatusModal from '../components/StatusModal'

import container_styles from '../styles/ContainerStyles'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class LoginScreen extends Component {

	state = {
		email: '',
		password: '',

	}

	toogleModal = () => {
    this.props.actions.modalClose();
  }

  loginButtonHandler = () => {
		const {email, password} = this.state;
		this.props.actions.login({email, password});
	}

  render() {

  	const { email, password } = this.state;

    return (
      <View style={container_styles.container_row}>

      <StatusModal 
        transparent={true}
        visible={this.props.modalVisible}
        message={this.props.modalMessage}
        onPress={this.toogleModal}
      />

        <View style={box.box_upper}>
          <Text style={button_styles.text_description}>Selamat datang kembali di komunitas Opentani</Text>
          <View style={{height: 64}}></View>

          <TextInput           
            editable= {true}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={email}
            style={text_styles.text_input}
          />

          <TextInput          
            editable= {true}
            placeholder="Kata Sandi"
            onChangeText={password => this.setState({password})}
            value={password}
            style={text_styles.text_input}
          />

        </View>
        <View style={box.box_lower}>
          <ButtonFillLarge 
          	label='Masuk' 
          	onPress={this.loginButtonHandler.bind(this)}
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
	const email = state.login.email
	const password = state.login.password
  const error = state.login.error
  const errorMessage = state.login.errorMessage
  const modalVisible = state.modal.modalVisible
  const modalMessage = state.modal.modalMessage
	// console.log(state.login)
	
  return { email, password, error, errorMessage, modalVisible, modalMessage}
}

function mapDispatchToProps(dispatch) {
	return {
    actions: bindActionCreators( Object.assign({}, loginActions, modalActions ) , dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)