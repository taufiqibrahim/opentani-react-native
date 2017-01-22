'use strict';

import React, {Component, PropTypes} from 'react';
import { NetInfo } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as connActions from './actions/connActions';

import SplashScreen from './containers/SplashScreen';
import WelcomeScreen from './containers/WelcomeScreen';
import LoginScreen from './containers/LoginScreen';
import LandingScreen from './containers/LandingScreen';

const RouterWithRedux = connect()(Router);

// export default class AppRouter extends Component {
class AppRouter extends Component {

	// state = {
	// 	isConnected: '',
	// }

	componentDidMount() {
    NetInfo.isConnected.addEventListener(
    	'change', this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
  	NetInfo.isConnected.removeEventListener(
  		'change', this.handleConnectivityChange
  	)
  }

  handleConnectivityChange(isConnected) {
  	console.log(isConnected);
  	// console.log(this.props.actions);
  	// this.props.dispatch(actions.updateConnectivity({isConnected : true}));
  }

	render() {
		return (
				<RouterWithRedux>
					<Scene key='root' hideNavBar>
						<Scene 
							key='splashScreen' component={SplashScreen} 
						/>						
						<Scene 
							key='welcomeScreen' component={WelcomeScreen} initial 
						/>						
						<Scene 
							key='loginScreen' component={LoginScreen}
						/>						
						<Scene 
							key='landingScreen' component={LandingScreen} 
						/>	
					</Scene>
				</RouterWithRedux>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(connActions, dispatch),
	}
}

export default connect(mapDispatchToProps) (AppRouter)

// export default connect(
// 	state => ({ isConnected: state.isConnected})
// )(AppRouter)

// export default connect()(AppRouter)