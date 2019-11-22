import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';

export default ComingSoonScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon} name='arrow-back' onPress={() => props.navigation.goBack()}></Icon>
        <Text style={styles.title}>{props.title || 'Coming Soon'}</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={require('../../../assets/blankScreen/comingsoon.png')}></Image>
        <Text style={styles.subtitle}>Coming Soon!</Text>
        <Text style={styles.content}>Want to know? We'll be here soon with our new feature, stay tuned.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
        <Text style={styles.text}>Exit</Text>
      </TouchableOpacity>
    </View>
  )
}