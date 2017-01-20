'use strict';

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore';

import SplashScreen from './containers/SplashScreen';
import WelcomeScreen from './containers/WelcomeScreen';
import LoginScreen from './containers/LoginScreen';
import LandingScreen from './containers/LandingScreen';

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
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
			</Provider>
		)
	}
}