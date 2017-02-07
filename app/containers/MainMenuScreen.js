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

import FlexGrid from '../components/FlexGrid'
import button_styles from '../styles/ButtonStyles'
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
              icon='list-alt'
              label='Lahan'
              onPress={Actions.lahanScreen}
            />
            <FlexGrid
              icon='tasks'
              label='Pekerjaan'
            />     
          </View>

          <View style={grid.horizontal}>
            <FlexGrid
              icon='calendar'
              label='Kalender Tanam'
            />
            <FlexGrid
              icon='feed'
              label='Berita'
            />     
          </View>

          <View style={grid.horizontal}>
            <FlexGrid
              icon='area-chart'
              label='Pantau Harga'
            />
            <FlexGrid
              icon='database'
              label='Database Varietas'
            />     
          </View>

          <View style={grid.horizontal}>
            <FlexGrid
              icon='user-circle'
              label='Profil'
            />
            <FlexGrid
              icon='gears'
              label='Pengaturan'
            />     
          </View>

        </View>
        <View style={grid.footer}>
        </View>
      </View>
    )
  
  }
}

export default connect(({route}) => ({route}))(MainMenuScreen)