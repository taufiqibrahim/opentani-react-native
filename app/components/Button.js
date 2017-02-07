'use strict'

import React, { Component, PropTypes } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import button_styles from '../styles/ButtonStyles'
import text_styles from '../styles/TextStyles'

export class ButtonFillLarge extends Component {
	render() {
		return (
		  <TouchableHighlight
		    onPress={this.props.onPress} style={button_styles.button_fill_large}>
		    <Text style={button_styles.text_button_fill_large}>{this.props.label}</Text>
		  </TouchableHighlight>
		)	
	}
}

export class ButtonLineLarge extends Component {
	render() {
		return (
		  <TouchableHighlight
		    onPress={this.props.onPress} style={button_styles.button_line_large}>
		    <Text style={button_styles.text_button_line_large}>{this.props.label}</Text>
		  </TouchableHighlight>
		)	
	}
}

export class ButtonFillSmall extends Component {
	render() {
		return (
		  <TouchableHighlight
		    onPress={this.props.onPress} style={button_styles.button_fill_small}>
		    <Text style={button_styles.text_button_fill_small}>{this.props.label}</Text>
		  </TouchableHighlight>
		)	
	}
}

export class ButtonLineSmall extends Component {
	render() {
		return (
		  <TouchableHighlight
		    onPress={this.props.onPress} style={button_styles.button_line_small}>
		    <Text style={button_styles.text_button_line_small}>{this.props.label}</Text>
		  </TouchableHighlight>
		)	
	}
}