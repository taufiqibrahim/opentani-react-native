'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../actions/signupActions';
import * as modalActions from '../actions/modalActions';

import { Actions } from 'react-native-router-flux';

import { ButtonLineLarge } from '../components/Button'
import StatusModal from '../components/StatusModal'

import container_styles from '../styles/ContainerStyles'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class SignupScreen extends Component {

  state = {
    ektp_id: '',
    username: '',
    email: '',
    password: '',
  }

  toogleModal = () => {
    this.props.actions.modalClose();
  }

	signupButtonHandler = () => {
		const {ektp_id, username, email, password} = this.state;
		this.props.actions.signup({ektp_id, username, email, password});
	}

  render() {

  	const { ektp_id, username, email, password } = this.state;

    return (
      <View style={container_styles.container_row}>

      <StatusModal 
        transparent={true}
        visible={this.props.modalVisible}
        message={this.props.modalMessage}
        onPress={this.toogleModal}
      />      

        <View style={box.box_upper}>
          <Text style={text_styles.text_description}>Bergabung bersama komunitas Opentani</Text>
          <View style={{height: 64}}></View>
          <TextInput
            onChangeText={ektp_id => this.setState({ektp_id})}
            editable= {true}
            maxLength= {40}
            placeholder="Nomor EKTP"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText={username => this.setState({username})}
            editable= {true}
            maxLength= {40}
            placeholder="Nama pengguna"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText={email => this.setState({email})}
            editable= {true}
            maxLength= {40}
            placeholder="Email"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText={password => this.setState({password})}
            editable= {true}
            maxLength= {40}
            placeholder="Kata sandi"
            secureTextEntry={true}
            style={text_styles.text_input}
          />      
        </View>         
        <View style={box.box_lower}>
          <ButtonLineLarge 
            label='Bergabung' 
            onPress={this.signupButtonHandler.bind(this)}
          />
        </View>                                
      </View>
    )
  }
}

function mapStateToProps(state) {
	const ektp_id = state.signup.ektp_id
  const username = state.signup.username
  const email = state.signup.email
	const password = state.signup.password
  const error = state.signup.error
  const errorMessage = state.signup.errorMessage  
  const modalVisible = state.modal.modalVisible
  const modalMessage = state.modal.modalMessage
	
	return { ektp_id, username, email, password, error, errorMessage, modalVisible, modalMessage}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators( Object.assign({}, signupActions, modalActions ) , dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)