import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CategoryRoundedStyle'

const CategoryRounded = (props) => {
  const { item, ...restProps } = props
  return (
    <TouchableOpacity
    style={styles.round}
    {...restProps}>
      <View style={styles.icon}>
        <Image source={item?.icon} style={styles.iconImg} />
      </View>
      <Text style={styles.label}>{item?.name}</Text>
    </TouchableOpacity>
  )
}

// Prop type warnings
CategoryRounded.propTypes = {
  item: PropTypes.object.isRequired,
}

// Defaults for props
CategoryRounded.defaultProps = {
  item: {}
}

export default CategoryRounded
