import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Containers/HomeScreen'
import TambahScreen from '../Containers/TambahScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  TambahScreen: { screen: TambahScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
