'use strict';

import React, {Component, PropTypes} from 'react';
import {Router, Scene, ActionConst, Modal} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';

import configureStore from './store/configureStore';

import StatusModal from './components/StatusModal';

import SplashScreen from './containers/SplashScreen';
import WelcomeScreen from './containers/WelcomeScreen';
import NoConnectionScreen from './containers/NoConnectionScreen';
import SignupScreen from './containers/SignupScreen';
import LoginScreen from './containers/LoginScreen';
import LandingScreen from './containers/LandingScreen';

import MainMenuScreen from './containers/MainMenuScreen';
import LahanScreen from './containers/LahanScreen';

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<RouterWithRedux>
						<Scene key='root' hideNavBar>
							<Scene 
								key='splashScreen' component={SplashScreen} duration={2000} initial
							/>						
							<Scene 
								key='welcomeScreen' component={WelcomeScreen} type={ActionConst.RESET}
							/>
							<Scene 
								key='noConnectionScreen' component={NoConnectionScreen} type={ActionConst.RESET}
							/>	
							<Scene 
								key='signupScreen' component={SignupScreen} 
							/>
							<Scene 
								key='loginScreen' component={LoginScreen} 
							/>						
							<Scene 
								key='landingScreen' component={LandingScreen} type={ActionConst.REPLACE}
							/>
							<Scene 
								key='mainMenuScreen' component={MainMenuScreen} type={ActionConst.REPLACE} 
							/>
							<Scene 
								key='lahanScreen' component={LahanScreen}
							/>
						</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}