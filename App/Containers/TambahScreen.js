import React, { useState, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  ScrollView,
  StatusBar,
  Image,
  Text,
  View,
  FlatList
} from 'react-native'
import BackButton from '../Components/BackButton'
import InputText from '../Components/InputText'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Modal from 'react-native-modal'
import CategoryRounded from '../Components/CategoryRounded'

import { formatMoney } from '../Lib/NumberFormat'
import moment from 'moment'
import 'moment/locale/id'
import { apply } from '../Themes/OsmiProvider'

// Styles
import styles from './Styles/TambahScreenStyle'


const TambahScreen = () => {
  const [form, setForm] = useState({
    name: '',
    category: {
      icon: require('../Icons/Category/food.png'),
      name: 'Makanan'
    },
    date: '',
    nominal: ''
  })
  const [showDate, setShowDate] = useState(false)
  const [modal, setModal] = useState(false)

  const catList = [{
    icon: require('../Icons/Category/food.png'),
    name: 'Makanan'
  }, {
    icon: require('../Icons/Category/internet.png'),
    name: 'Internet'
  }, {
    icon: require('../Icons/Category/edu.png'),
    name: 'Edukasi'
  }, {
    icon: require('../Icons/Category/gift.png'),
    name: 'Hadiah'
  }, {
    icon: require('../Icons/Category/transport.png'),
    name: 'Transport'
  }, {
    icon: require('../Icons/Category/shop.png'),
    name: 'Belanja'
  }, {
    icon: require('../Icons/Category/house.png'),
    name: 'Alat Rumah'
  }, {
    icon: require('../Icons/Category/sport.png'),
    name: 'Olahraga'
  }, {
    icon: require('../Icons/Category/entertainment.png'),
    name: 'Hiburan'
  }]

  useEffect(() => {
    moment.locale('id')
  }, [])

  const confirmDate = (da) => {
    const dt = moment(da).format('dddd, DD MMMM YYYY')
    setForm({ ...form, date: dt })
    setShowDate(false)
  }

  const changeCategory = (item) => {
    setForm({
      ...form,
      category: {
        icon: item?.icon,
        name: item?.name
      }
    })
    setModal(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />

      <DateTimePicker 
        isVisible={showDate}
        mode="date"
        onConfirm={confirmDate}
        onCancel={() => setShowDate(false)}
      />

      <Modal 
      isVisible={modal}
      onBackdropPress={() => setModal(false)}
      onBackButtonPress={() => setModal(false)}
      style={styles.modal}
      backdropTransitionOutTiming={100}
      onSwipeComplete={() => setModal(false)}
      swipeDirection={['down']}>
        <View style={styles.modalContainer}>
          <View style={apply('row')}>
            <Text style={apply('text-base flex opensans-bold')}>Pilih Kategori</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={() => setModal(false)}>
              <Icon name="x" size={25} style={apply('flex-end')} />
            </TouchableOpacity>
          </View>

          <FlatList 
            data={catList}
            initialNumToRender={9}
            keyExtractor={(i, index) => index.toString()}
            numColumns={3}
            horizontal={false}
            contentContainerStyle={apply('py-2 items-center')}
            renderItem={({ item, index }) => (
              <CategoryRounded key={index} item={item} onPress={() => changeCategory(item)} />
            )}
          />
        </View>
      </Modal>
      
      <Text style={styles.header}>Tambah Pengeluaran Baru</Text>
      <ScrollView style={styles.form}>
        <KeyboardAvoidingView>
          <InputText 
            label="Nama pengeluaran"
            placeholder="Nasi goreng"
            onChangeText={(value) => setForm({ ...form, nama: value })}
          />

          <View style={styles.catGroup}>
            <Text style={styles.label}>Kategori</Text>
            <TouchableOpacity style={styles.selectCat} activeOpacity={0.9} onPress={() => setModal(true)}>
              <View style={styles.icon}>
                <Image source={form?.category?.icon} style={apply('w-20 h-20')} />
              </View>
              <Text style={styles.cat}>{form?.category?.name}</Text>
              <Icon name="chevron-right" color="#000" style={styles.ico} size={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setShowDate(true)} activeOpacity={1.0}>
            <InputText
              label="Tanggal"
              editable={false}
              color="#000"
              icon={true}
              value={form?.date ?? 'Pilih tanggal'}
            />
          </TouchableOpacity>

          <InputText
            label="Nominal"
            prefix="Rp"
            value={formatMoney(form?.nominal)}
            onChangeText={(value) => setForm({ ...form, nominal: value })}
            keyboardType="numeric"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.btnSave} activeOpacity={0.9} onPress={() => ToastAndroid.show('Tersimpan!', ToastAndroid.SHORT)}>
          <Text style={styles.btnLabel}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

TambahScreen.navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation.state

  return {
    headerStyle: {
      backgroundColor: '#e5e5e5',
      shadowOpacity: 0,
      elevation: 0
    },
    headerLeft: () => <BackButton />
  }
}

export default TambahScreen
