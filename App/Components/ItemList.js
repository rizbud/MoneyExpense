import React from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'
import styles from './Styles/ItemListStyle'

import { formatMoney } from '../Lib/NumberFormat'

const CategoryCard = (props) => {
  const { item } = props
  return (
    <View style={styles.categoryCard}>
        <View style={styles.bgIcon}>
          <Image style={styles.icon} source={item?.icon} />
        </View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.price}>Rp{formatMoney(item?.price)}</Text>
      </View>
  )
}

// Prop type warnings
CategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
}

// Defaults for props
CategoryCard.defaultProps = {
  item: {}
}

export default CategoryCard
