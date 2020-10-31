import React, { useState, useEffect } from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../Components/BackButton'
import InputText from '../Components/InputText'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from 'react-native-modal-datetime-picker'

import { formatMoney } from '../Lib/NumberFormat'
import moment from 'moment'
import 'moment/locale/id'
import { apply } from '../Themes/OsmiProvider'

// Styles
import styles from './Styles/TambahScreenStyle'


const TambahScreen = () => {
  const [value, setValue] = useState('')
  const [showDate, setShowDate] = useState(false)
  const [date, setDate] = useState('')
  const [category, setCategory] = useState({
    icon: require('../Icons/Category/food.png'),
    name: 'Makanan'
  })

  useEffect(() => {
    moment.locale('id')
  }, [])

  const confirmDate = (da) => {
    moment.locale('id')
    const dt = moment(da).locale('id').format('dddd, DD MMMM YYYY')
    setDate(dt)
    setShowDate(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <DateTimePicker 
        isVisible={showDate}
        mode="date"
        onConfirm={confirmDate}
        onCancel={() => setShowDate(false)}
      />
      <StatusBar backgroundColor="#e5e5e5" barStyle="dark-content" />
      <Text style={styles.header}>Tambah Pengeluaran Baru</Text>
      <ScrollView style={styles.form}>
        <KeyboardAvoidingView>
          <InputText label="Nama pengeluaran" placeholder="Nasi goreng" />
          <View style={styles.catGroup}>
            <Text style={styles.label}>Kategori</Text>
            <TouchableOpacity style={styles.selectCat} activeOpacity={1.0} onPress={() => alert('aa')}>
              <View style={styles.icon}>
                <Image source={category?.icon} style={apply('w-20 h-20')} />
              </View>
              <Text style={styles.cat}>{category?.name}</Text>
              <Icon name="chevron-right" color="#000" style={styles.ico} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setShowDate(true)} activeOpacity={1.0}>
            <InputText label="Tanggal" editable={false} color="#000" icon={true} value={!date ? 'Pilih tanggal' : date} />
          </TouchableOpacity>
          <InputText
            label="Nominal"
            prefix="Rp"
            value={formatMoney(value)}
            onChangeText={(value) => setValue(value)}
            keyboardType="numeric"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.btnSave} activeOpacity={0.9} onPress={() => alert('Saved')}>
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
