import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContext } from 'react-navigation'

const BackButton = props => {
  const navigation = useContext(NavigationContext)

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" color="#4f4f4f" size={45} />
    </TouchableOpacity>
  )
}

export default BackButton
