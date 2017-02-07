'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';

import { Actions } from 'react-native-router-flux';

import ButtonFillGreen from '../components/Button'

import container_styles from '../styles/ContainerStyles'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class SignupScreen extends Component {

  // componentDidMount() {
  //   console.log('LoginScreen mounted')
  //   console.log(this.props)
  // }

  constructor(props) {
    super(props);
  
    this.state = {
      ektp_id: "",
      username: "",
      email: "",
      password: "",
      errors: {},
      api_error: ""
    };
  }

	signupButtonHandler = () => {
		const {email, password} = this.state;
		console.log(email, password, this.props.actions);
		this.props.actions.login({email, password});
	}

  render() {

  	const { email, password } = this.state;

    return (
      <View style={container_styles.container_row}>
        <View style={box.box_upper}>
          <Text style={button_styles.text_description}>Bergabung bersama komunitas Opentani</Text>
          <View style={{height: 64}}></View>
          <TextInput
            onChangeText = {(value) => this.setState({ektp_id: value})}
            editable= {true}
            maxLength= {40}
            placeholder="Nomor EKTP"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText = {(value) => this.setState({username: value})}
            editable= {true}
            maxLength= {40}
            placeholder="Nama pengguna"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText = {(value) => this.setState({email: value})}
            editable= {true}
            maxLength= {40}
            placeholder="Email"
            style={text_styles.text_input}
          />
          <TextInput
            onChangeText = {(value) => this.setState({password: value})}
            editable= {true}
            maxLength= {40}
            placeholder="Kata sandi"
            secureTextEntry={true}
            style={text_styles.text_input}
          />      
        </View>         
        <View style={box.box_lower}>
          <ButtonFillLarge 
            label='Daftar' 
            onPress={this.signupButtonHandler.bind(this)}
          />
          <Text style={text_styles.text_error}>{this.state.api_error}</Text>   
        </View>                                
      </View>
    )
  }
}

function mapStateToProps(state) {
	const email = state.email;
	const password = state.password
  // conn = state.conn
  // console.log(state.conn.isConnected)
	
	return { email, password}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(loginActions, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

// export default connect(mapStateToProps)(LoginScreen)

// export default connect(({routes}) => ({routes}))(LoginScreen)