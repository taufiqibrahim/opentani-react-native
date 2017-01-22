'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';

import { Actions } from 'react-native-router-flux';

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'

class LoginScreen extends Component {

  // componentDidMount() {
  //   console.log('LoginScreen mounted')
  //   console.log(this.props)
  // }

	state = {
		email: '',
		password: '',
	}

	loginButtonHandler = () => {
		const {email, password} = this.state;
		console.log(email, password, this.props.actions);
		this.props.actions.login({email, password});
	}

  render() {

  	const { email, password } = this.state;

    return (
      <View style={common_styles.container_row}>
        <View style={box.box_upper}>
          <Text style={common_styles.text_description}>Selamat datang kembali di komunitas Opentani</Text>
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
          <ButtonFillGreen 
          	label='Masuk' 
          	onPress={this.loginButtonHandler.bind(this)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

// export default connect(mapStateToProps)(LoginScreen)

// export default connect(({routes}) => ({routes}))(LoginScreen)