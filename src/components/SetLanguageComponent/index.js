import React from 'react';
import Modal from 'react-native-modal';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons'

export default SetLanguageComponent = props => {
  return (
    <Modal
      isVisible={props.isVisible}
      swipeDirection={['down']}
      backdropOpacity={0}
      style={styles.modal}
      onSwipeComplete={() => props.hide()}
    >
      <View style={styles.container}>
        <View style={styles.topLine}></View>
        <View style={styles.checkListSection}>
          <TouchableOpacity style={styles.checkList} onPress={()=>{props.setLanguage(true); props.hide()}}>
            <View style={styles.language}>
              <View style={styles.languageCode}><Text>ID</Text></View>
              <Text>Indonesia</Text>
            </View>
            <Ionicons name='md-checkmark' style={{color: props.language ? 'black' : 'white'}}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkList} onPress={()=>{props.setLanguage(false); props.hide()}}>
            <View style={styles.language}>
              <View style={styles.languageCode}><Text>EN</Text></View>
              <Text>English</Text>
            </View>
            <Ionicons name='md-checkmark' style={{color: props.language ? 'white' : 'black'}}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};