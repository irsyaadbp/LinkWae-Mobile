import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import Axios from 'axios';

export default EnterPinComponent = props => {
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [pin, setPin] = useState('');

  const handleKeyboardPress = key => {
    if (key == 'backspace') {
      setPin(pin.slice(0, -1));
    } else {
      setPin(pin + key);
    }
  };

  const handleSubmit = () => {
    const data = {
      phone: props.phoneNumber,
      pin,
    };
    Axios.post('https://linkwae.herokuapp.com/users/login', data)
    .then(r => {
      console.log(r.data);
      console.log(props);
      props.hide();
      if (r.data.status == 'success') AsyncStorage.setItem('token', r.data.response.jwt)
      .then(r => props.navigation.navigate('HomeScreen'));
      else setIsIncorrect(true);
    })
    .catch(e => {
      console.log(e)
    })
  };

  useEffect(() => {
    if (pin.length == 6) handleSubmit();
  }, [pin]);

  return (
    <Modal
      isVisible={props.show}
      swipeDirection={['down']}
      onSwipeComplete={() => props.hide()}
      style={styles.modal}
      backdropOpacity={0}
    >
      <View style={styles.container}>
        <Icon name='md-close' style={styles.closeIcon}></Icon>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Enter Your PIN</Text>
          <View style={styles.pinSection}>
            <View style={styles.singlePin}>{pin.length > 0 ? <View style={styles.filledPin}/> : <View/>}</View>
            <View style={styles.singlePin}>{pin.length > 1 ? <View style={styles.filledPin}/> : <View/>}</View>
            <View style={styles.singlePin}>{pin.length > 2 ? <View style={styles.filledPin}/> : <View/>}</View>
            <View style={styles.singlePin}>{pin.length > 3 ? <View style={styles.filledPin}/> : <View/>}</View>
            <View style={styles.singlePin}>{pin.length > 4 ? <View style={styles.filledPin}/> : <View/>}</View>
            <View style={styles.singlePin}>{pin.length > 5 ? <View style={styles.filledPin}/> : <View/>}</View>
          </View>
          <View>
            {(isIncorrect) ? <Text style={styles.errorMessage}>The PIN you've entered is incorrect. Please try again.</Text>: null}
            <TouchableOpacity style={styles.forgotButton}><Text style={styles.forgotButtonText}>Forgot PIN ?</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.keyboardSection}>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(1)}>
              <Text style={styles.keyboardButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(2)}>
              <Text style={styles.keyboardButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(3)}>
              <Text style={styles.keyboardButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(4)}>
              <Text style={styles.keyboardButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(5)}>
              <Text style={styles.keyboardButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(6)}>
              <Text style={styles.keyboardButtonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(7)}>
              <Text style={styles.keyboardButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(8)}>
              <Text style={styles.keyboardButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(9)}>
              <Text style={styles.keyboardButtonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress(0)}>
              <Text style={styles.keyboardButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleKeyboardPress('backspace')}>
              <Icon name='md-backspace' style={styles.keyboardButtonIcon}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}