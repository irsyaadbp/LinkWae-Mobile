import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';

export default TopUpComponent = props => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name='arrow-back' style={styles.icon}></Icon>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>LinkWae Balance</Text>
          <View style={styles.balanceSection}>
            <Text style={styles.balance}><Text style={styles.rp}>Rp</Text> 0</Text>
            <Icon name='information-circle' style={styles.icon}></Icon>
          </View>
        </View>
      </View>
    </View>
  )
}