import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, FlatList, TextInput} from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

export default SendMoneyScreen = props => {
  const [content, setContent] = useState('default');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon} name='arrow-back' onPress={() => props.navigation.goBack()}></Icon>
        <Text style={styles.title}>Send Money</Text>
      </View>
      {content == 'default' && 
      <View style={styles.body}>
        <Text style={styles.label}>Which method would you like to use?</Text>
        <FlatList
          style={styles.list}
          data={[
            {
              title: 'Snap QR',
              image: require('../../../assets/sendMoney/snapQr.png'),
              destination: () => props.navigation.navigate('ComingSoonScreen'),
            },
            {
              title: 'Phone Number',
              image: require('../../../assets/sendMoney/phoneNumber.png'),
              destination: () => setContent('phoneNumber'),
            },
            {
              title: 'Bank Account',
              image: require('../../../assets/sendMoney/bankAccount.png'),
              destination: () => props.navigation.navigate('ComingSoonScreen'),
            },
          ]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={() => item.destination()}>
              <Image style={styles.image} source={item.image}></Image>
              <Text style={styles.text}>{item.title}</Text>
              <Icon style={styles.arrow} name='arrow-dropright'></Icon>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
        ></FlatList>
      </View>}
      {/* ================================================================== */}
      {content == 'phoneNumber' && 
      <View style={styles.body}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputSection}>
          <View style={styles.bordered}>
            <Text style={styles.prefix}>+62</Text>
            <TextInput value={phone} onChangeText={(text) => setPhone(text)} style={styles.phone} placeholder='81212341234'></TextInput>
          </View>
          <Icon style={styles.icon} name='bookmarks'></Icon>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <View style={styles.history}>
          <Text style={styles.subtitle}>Recent Transaction</Text>
          <View style={styles.noHistory}>
            <Image style={styles.image2} source={require('../../../assets/blankScreen/comingsoon.png')}></Image>
            <Text style={styles.subtitle}>Oops, no transaction history yet!</Text>
            <Text style={styles.content}>You have not sent money to anyone! Send money now?</Text>
          </View>
        </View>
      </View>}
    </View>
  )
};