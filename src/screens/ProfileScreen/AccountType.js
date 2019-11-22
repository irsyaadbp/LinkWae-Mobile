import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';

export default AccountType = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View>
        <Icon style={{fontSize: 20, marginBottom: 20}} name='close' onPress={() => props.hide()}></Icon>
        <Text style={{fontSize: 17, marginBottom: 10}}>Let's Upgrade to Full Service!</Text>
        <Text style={{fontSize: 13, paddingBottom: 10, borderBottomWidth: 0.3, borderColor: '#F2F2F2'}}>Simple and easy steps to get these nomerous benefits of LinkWae Full Service</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: ''}}></Image>
          <View>
            <Text>Cash Out</Text>
            <Text>Easily cash out your money at LinkWae partners and ATM Himbara (Bank Mandiri, BNI, BRI, and BTN)</Text>
          </View>
        </View>
        <View>
          <Image></Image>
          <View>
            <Text>Send Money</Text>
            <Text>A safe & seamless way to send money to LinkWae users and other bank accounts</Text>
          </View>
        </View>
        <View>
          <Image></Image>
          <View>
            <Text>More Balance Limit</Text>
            <Text>Your maximum balance limit will be upgraded from Rp2000.000 to Rp10.000.000</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Text>Upgrade Now</Text>
      </TouchableOpacity>
    </View>
  )
}