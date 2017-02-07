'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';

import { Actions } from 'react-native-router-flux';

import TitleBar from '../components/TitleBar'

class LahanScreen extends Component {

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
      <View>
        <TitleBar label='Lahan' />
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

export default connect(mapStateToProps, mapDispatchToProps)(LahanScreen)

// export default connect(mapStateToProps)(LoginScreen)

// export default connect(({routes}) => ({routes}))(LoginScreen)