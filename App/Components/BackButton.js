import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContext } from 'react-navigation'
import { apply } from '../Themes/OsmiProvider'

const BackButton = props => {
  const navigation = useContext(NavigationContext)

  return (
    <TouchableOpacity activeOpacity={0.9} style={apply('mx-1')} onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" color="#4f4f4f" size={35} />
    </TouchableOpacity>
  )
}

export default BackButton
