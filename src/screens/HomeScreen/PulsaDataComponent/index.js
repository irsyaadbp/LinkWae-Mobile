import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { Icon } from "native-base";

import styles from './styles';

export default PulsaDataComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='arrow-back' style={styles.icon}></Icon>
        <Text style={styles.headerTitle}>Pulsa & Data</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.phone}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputSection}>
          <Text style={styles.prefix}>+62</Text>
          <TextInput style={styles.input} placeholder='Enter your phone number'></TextInput>
          <Icon name='bookmarks' style={styles.icon}></Icon>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.myphoneSection}>
        <View style={styles.left}>
          <Text style={styles.label}>My phone number</Text>
          <Text style={styles.myphone}>6285229302095</Text>
        </View>
        <Icon name='arrow-dropright' style={styles.icon}></Icon>
      </View>
      <View style={styles.divider}></View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Recent Transaction</Text>
        <View style={styles.nodata}>
          <Image style={styles.image} source={{uri: 'https://image.prntscr.com/image/LC6OocJfTo6630lC_Vxk_g.png'}}></Image>
          <Text style={styles.subtitle}>No history</Text>
          <Text style={styles.message}>Do more transaction and enjoy your attractive promos from LinkWae</Text>
        </View>
      </ScrollView>
    </View>
  )
};