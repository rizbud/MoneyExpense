import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Image } from 'react-native'
import styles from './Styles/InputTextStyle'
import { apply } from '../Themes/OsmiProvider'

const InputText = (props) => {
  const { label, icon, prefix, ...restProps } = props
  const [isFocused, setFocused] = useState(false)

  const underlineStyle = {
    borderBottomWidth: isFocused ? 2 : 1,
    borderBottomColor: isFocused ? '#46B5A7' : '#BDBDBD'
  }

  return (
    <View style={[styles.input, underlineStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={apply('row items-center')}>
        <Text style={apply('text-gray-4f')}>{prefix}</Text>
        <TextInput
          style={styles.inputText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...restProps} 
        />
        {icon && <Image source={require('../Icons/calendar.png')} />}
      </View>
    </View>
  )
}

// Prop type warnings
InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  icon: PropTypes.bool
}

// Defaults for props
InputText.defaultProps = {
  label: '',
}

export default InputText
