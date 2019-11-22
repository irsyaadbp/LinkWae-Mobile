import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TextInput, ImageBackground, Text, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import Modal from 'react-native-modal';
import {Icon} from 'native-base';
import axios from 'axios';
import LottieView from 'lottie-react-native';

import { EnterPinComponent } from '../../components';

const {height, width} = Dimensions.get('window');
export default AuthScreen = props => {
  const [modalUp, setModalUp] = useState(false); // -300
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalPin, setModalPin] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [modalLogin, setModalLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowKeyboard = () => {
    setModalUp(!modalUp)
  }

  const handleKeyboardPress = key => {
    if (key == 'backspace') {
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else {
      if (phoneNumber.length == 0 && key == 0) null;
      else if (phoneNumber.length == 16) null;
      else setPhoneNumber(phoneNumber+key);
    }
  }

  const handleSubmit = () => {
    if (phoneValidation) {
      setIsLoading(true);
      axios.post('https://linkwae.herokuapp.com/users/checkAuth', {phone: phoneNumber})
      .then(r => {
        console.log(r.data);
        if (r.data.status == 'success') {
          if (r.data.response.isRegistered) {
            setIsLoading(false);
            setModalPin(true);
          } else {
            setModalLogin(false);
            setIsLoading(false);
            props.navigation.navigate('GetStartedScreen', {phoneNumber})
          };
        }
      })
      .catch(e => {
        setIsLoading(false);
        setIsOffline(true);
      });
    }
  }

  useEffect(()=>{
    if (phoneNumber.length >= 9) setPhoneValidation(true);
    else setPhoneValidation(false);
  }, [phoneNumber])
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    },
    backgoundImage: {
      flex: 1,
      resizeMode: 'cover'
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalBotom: {
      backgroundColor: 'white',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: 25,
      paddingTop: 30,
      height: modalUp ? 500 : 200,
      // marginBottom: modalMargin,
    },
    inputSection: {
      borderBottomWidth: 2,
      borderColor: '#E7E7E7',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
    },
    phoneCodeText: {
      fontSize: 18,
    },
    phoneInput: {
      fontSize: 18,
      paddingHorizontal: 25,
    },
    phoneClearIcon: {
      fontSize: 20,
      color: '#9CA4AC',
    },
    startButton: {
      marginVertical: 20,
      backgroundColor: phoneValidation ? '#FF0000' : '#9CA4AC',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
    startButtonText: {
      color: '#F2F3F4',
      fontWeight: 'bold',
    },
    textSection: {
      fontSize: 12,
      textAlign: "center",
      marginBottom: 30,
    },
    textRed: {
      color: '#FF0000',
    },
    keyboardSection: {
      flex: 1,
      flexDirection: 'row',
    },
    keyboardButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    keyboardButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    keyboardButtonIcon: {
      fontSize: 25,
      fontWeight: 'bold',
    }
  })
  
  return (
    <ImageBackground source={require('../../../assets/bg-auth.jpg')} style={styles.container}>
      {isLoading && <Modal animationIn='fadeIn' backdropOpacity={0} isVisible={isLoading}><LottieView style={{height: 100, width: 100, alignSelf: 'center'}} source={require('../../../assets/loading.json')} autoPlay loop /></Modal>}
      {/* {isLoading && <Modal isVisible={isLoading}><ActivityIndicator size='large' color='red'/></Modal>} */}
      <EnterPinComponent navigation={props.navigation} phoneNumber={phoneNumber} show={modalPin} hide={() => {setModalPin(false);setModalUp(false)}}/>
      
      <Modal
        isVisible={modalLogin}
        style={styles.modal}
        swipeDirection={modalUp ? ['down'] : ['up']}
        swipeThreshold={150}
        backdropOpacity={0}
        onSwipeComplete={()=>{
          setModalUp(!modalUp)
        }}
      >
        <View style={styles.modalBotom}>
            <View style={styles.inputSection}>
              <Text style={styles.phoneCodeText}>+62</Text>
              <TouchableOpacity onPress={()=>handleShowKeyboard()}>
                <TextInput style={styles.phoneInput} placeholder='Masukan Nomor Telpon...' editable={false} value={phoneNumber}/>
              </TouchableOpacity>
              <Icon name='md-close-circle' style={styles.phoneClearIcon} onPress={()=>setPhoneNumber('')}></Icon>
            </View>
          <TouchableOpacity style={styles.startButton} onPress={() => handleSubmit()}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
          <Text style={styles.textSection}>Dengan masuk atau mendaftar berarti kamu menyetujui <Text style={styles.textRed}>Syarat dan Ketentuan</Text> dan <Text style={styles.textRed}>Kebijakan Privasi</Text></Text>
          
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
      </Modal>
    </ImageBackground>
  )
};
