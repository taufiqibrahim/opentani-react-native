'use strict';

import React, {Component, PropTypes} from 'react';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';

import configureStore from './store/configureStore';

import SplashScreen from './containers/SplashScreen';
import WelcomeScreen from './containers/WelcomeScreen';
import NoConnectionScreen from './containers/NoConnectionScreen';
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
							key='splashScreen' component={SplashScreen} initial duration={2000}
						/>						
						<Scene 
							key='welcomeScreen' component={WelcomeScreen} type={ActionConst.REPLACE}
						/>
						<Scene 
							key='noConnectionScreen' component={NoConnectionScreen} type={ActionConst.REPLACE}
						/>	
						<Scene 
							key='loginScreen' component={LoginScreen} 
						/>						
						<Scene 
							key='landingScreen' component={LandingScreen} type={ActionConst.REPLACE}
						/>	
					</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}