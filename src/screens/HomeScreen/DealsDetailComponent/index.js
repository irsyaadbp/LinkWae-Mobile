import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Image} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';

export default DealsDetail = props => {
  const [content, setContent] = useState('promo');
  const [imageUri, setImageUri] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [valid, setValid] = useState('');
  const [text, setText] = useState('');

  return (
    <>
      <View style={styles.header}>
        <Icon style={styles.icon} name='arrow-back'></Icon>
        <Text style={styles.headerTitle}>
          {content == 'recommendation' && 'Recommendation'}
          {content == 'promo' && 'Promo Details'}
          {content == 'information' && 'Promo Details'}
        </Text>
      </View>
      <ScrollView style={styles.scroll}>
        <Image style={styles.image} source={{uri: 'https://image.prntscr.com/image/HsrBiYcZQTqxUC5VtNi2lw.png'}}></Image>
        <Text style={styles.title}>
          {'Cashback 10% Beli Pulsa Data Semua Operator'}
        </Text>
        <Text style={styles.subtitle}>{'Pulsa dan Data Diskonnya Nggak Abis-abis'}</Text>
        <View style={styles.dashedline}></View>
        <View style={styles.row}>
          <Text style={styles.validInfo}>Valid Until</Text>
          <Text style={styles.validInfo}>{'20 Nov 2019'}</Text>
        </View>

        <View style={styles.line}/>

        <View style={styles.row}>
          <Text style={styles.text}>
            {'1. Promo merupakan cashback sebesar 10% yang berlaku untuk pembelian pulsa dan paket data semua operator menggunakan aplikasi LinkAja (aplikasi LinkAja tidak bisa digunakan di rooted-devices, termasuk factory-rooted).\n2. Promo hanya berlaku untuk pembelian pulsa dan paket data XL, Indosat, AXIS, Smartfren, Tri.'.replace('\n','\n\n')}
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dapatkan Promo</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}