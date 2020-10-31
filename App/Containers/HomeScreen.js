import React from 'react'
import { 
  SafeAreaView,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { apply } from '../Themes/OsmiProvider'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import CategoryCard from '../Components/CategoryCard'
import ItemList from '../Components/ItemList'

// Styles
import styles from './Styles/HomeScreenStyle'
import Icon from 'react-native-vector-icons/Feather'

const HomeScreen = (props) => {

  const listA = [{
    icon: require('../Icons/Category/foodWhite.png'),
    name: 'Makanan',
    price: 50000
  }, {
    icon: require('../Icons/Category/internetWhite.png'),
    name: 'Internet',
    price: 50000
  }, {
    icon: require('../Icons/Category/transportWhite.png'),
    name: 'Transport',
    price: 20000
  }]

  const ListB = [{
    icon: require('../Icons/Category/food.png'),
    name: 'Ayam Geprek',
    price: 15000
  }, {
    icon: require('../Icons/Category/internet.png'),
    name: 'Voucher 10GB',
    price: 50000
  }, {
    icon: require('../Icons/Category/food.png'),
    name: 'Pecel',
    price: 15000
  }, {
    icon: require('../Icons/Category/food.png'),
    name: 'Mie Gacoan',
    price: 20000
  }, {
    icon: require('../Icons/Category/transport.png'),
    name: 'Gojek',
    price: 20000
  }]

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.ava}>
          <Image source={require('../Icons/userIcons.png')} style={styles.userIcon} />
        </View>
        <Text style={styles.capt}>Pengeluaran Anda hari ini</Text>
        <Text style={styles.expense}>Rp. 120,000</Text>
      </View>

      <View style={styles.category}>
        <Text style={styles.title}>Pengeluaran berdasarkan kategori</Text>
        <FlatList 
          data={listA}
          contentContainerStyle={apply('pb-2')}
          keyExtractor={(i, index) => index.toString()}
          renderItem={({ item, index }) => <CategoryCard item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={apply('mb-2')}
        />
      </View>

      <View style={styles.list}>
        <Text style={styles.title}>Semua Pengeluaran</Text>
        <FlatList 
          data={ListB}
          contentContainerStyle={apply('pb-6')}
          keyExtractor={(i, index) => index.toString()}
          renderItem={({ item, index }) => <ItemList item={item} />}
          showsVerticalScrollIndicator={false}
          style={[apply('px-3 rounded-12 shadow-md bg-white'), { height: 245 }]}
        />
      </View>
      
      <TouchableOpacity style={styles.add} activeOpacity={0.9} onPress={() => props.navigation.navigate('TambahScreen')}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
