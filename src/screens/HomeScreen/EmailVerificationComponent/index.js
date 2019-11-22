import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';

export default EmailVerificationComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Email Verification</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.title}>Email Verification</Text>
          <Text style={styles.subtitle}>Enter and validate your email address to have access to LinkWae PIN reset feature</Text>
          <View style={styles.inputSection}>
            <TextInput style={styles.input} placeholder='Enter your email'></TextInput>
            <Icon name='close-circle' style={styles.icon}></Icon>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};