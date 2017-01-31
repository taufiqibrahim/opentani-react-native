'use strict'

import React, { Component } from 'react'
import {
  View,
  ScrollView,
  ListView,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import ButtonFillGreen from '../components/ButtonFillGreen'
import ButtonLineGreen from '../components/ButtonLineGreen'
import FlexGrid from '../components/FlexGrid'
import common_styles from '../styles/CommonStyles'
import text_styles from '../styles/TextStyles'
import box from '../styles/Box'
import grid from '../styles/Grid'

class MainMenuScreen extends Component {

  render () {
    return (
      <View style={grid.container}>
        <View style={grid.header}>
          <Text style={grid.title_text}>Opentani</Text>
        </View>
        <View style={grid.body}>
          <View style={grid.horizontal}>
            <FlexGrid
              label='Lahan'
            />
            <FlexGrid
              label='Pencarian'
            />     
          </View>

          <View style={grid.horizontal}>
            <FlexGrid
              label='Pantau Harga'
            />
            <FlexGrid
              label='Database Varietas'
            />     
          </View>

          <View style={grid.horizontal}>
            <FlexGrid
              label='Profil'
            />
            <FlexGrid
              label='Pengaturan'
            />     
          </View>

        </View>
        <View style={grid.footer}></View>
      </View>
    )
  
  }
}

export default connect(({route}) => ({route}))(MainMenuScreen)