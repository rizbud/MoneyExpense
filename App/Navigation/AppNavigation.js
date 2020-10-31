import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Containers/HomeScreen'
import TambahScreen from '../Containers/TambahScreen'

import styles from './Styles/NavigationStyles'

import BackButton from '../Components/BackButton'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  TambahScreen: { screen: TambahScreen },
}, {
  // Default config for all screens
  initialRouteName: 'HomeScreen'
})

export default createAppContainer(PrimaryNav)
