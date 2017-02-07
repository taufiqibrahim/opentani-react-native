'use strict'

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ButtonFillSmall } from '../components/Button'

import modal_styles from '../styles/ModalStyles'

export default class StatusModal extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	message: props.message,
	  	visible: props.visible,
	  };
	}

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

	render() {
		return (
      <View style={modal_styles.container}>
        <Modal
          animationType={"fade"}
          transparent={this.props.transparent}
          visible={this.props.visible}
          onRequestClose={() => this._setModalVisible(false)}
          >
          <View style={modal_styles.header}></View>
	        <View style={modal_styles.main}>
	          <View style={modal_styles.modal_box}>
	            <Text>{this.props.message}</Text>
		          <ButtonFillSmall label='Tutup' onPress={this.props.onPress} />
	          </View>         
          </View>
          <View style={modal_styles.footer}></View>	           
        </Modal>
      </View>
		)
	}

}