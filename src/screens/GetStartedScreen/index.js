import React, {useState, useEffect} from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import Axios from 'axios';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

export default EnterPinComponent = props => {
  const phoneNumber = props.navigation.state.params.phoneNumber
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [pin, setPin] = useState('');
  const [chance, setChance] = useState(0)
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyboardPress = key => {
    if (key == 'backspace') {
      setPin(pin.slice(0, -1));
    } else {
      setPin(pin + key);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const data = {user: phoneNumber, otp: pin};
    console.log(data)
    Axios.post('https://linkwae.herokuapp.com/users/verifyOtp', data)
    .then(r => {
      console.log(r.data);
      if (r.data.status == 'success') props.navigation.navigate('RegisterScreen', {phoneNumber});    
      else {setIsIncorrect(true); setPin('')}
      setIsLoading(false);
    })
    .catch(e => {
      // console.log(e);
      setIsLoading(false)
      setIsIncorrect(true);
      setPin('');
    });
  };

  const handleResend = () => {
    if (chance < 3) {
      setIsLoading(true);
      setChance(chance + 1);
      Axios.post('https://linkwae.herokuapp.com/users/checkAuth', {phone: phoneNumber})
      .then(()=> setIsLoading(false))
      .catch(()=> setIsLoading(false));
    }
  }

  useEffect(() => {
    // console.log(pin);
    if (pin.length == 6) handleSubmit();
  }, [pin]);

  return (
    <View style={styles.container}>
      {isLoading && <Modal animationIn='fadeIn' backdropOpacity={0} isVisible={isLoading}><LottieView style={{height: 100, width: 100, alignSelf: 'center'}} source={require('../../../assets/loading.json')} autoPlay loop /></Modal>}
      {/* {isLoading && <Modal isVisible={isLoading}><ActivityIndicator size='large' color='red'/></Modal>} */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Get Started</Text>
      </View>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>The verification code has been sent via SMS to</Text>
          <Text style={styles.subtitle}>+62{phoneNumber}</Text>
        </View>
        <View style={styles.pinSection}>
          <View style={styles.singlePin}>{pin.length > 0 ? <View style={styles.filledPin}/> : <View/>}</View>
          <View style={styles.singlePin}>{pin.length > 1 ? <View style={styles.filledPin}/> : <View/>}</View>
          <View style={styles.singlePin}>{pin.length > 2 ? <View style={styles.filledPin}/> : <View/>}</View>
          <View style={styles.singlePin}>{pin.length > 3 ? <View style={styles.filledPin}/> : <View/>}</View>
          <View style={styles.singlePin}>{pin.length > 4 ? <View style={styles.filledPin}/> : <View/>}</View>
          <View style={styles.singlePin}>{pin.length > 5 ? <View style={styles.filledPin}/> : <View/>}</View>
        </View>
        <View style={styles.message}>
          {(!isTimeOut) ? <Text style={styles.subtitle}>Haven't receive your OTP yet?.</Text> : <Text>Please wait 01:30 seconds to resend the code.</Text>}
          {(!isTimeOut) ? <TouchableOpacity style={styles.resendButton} onPress={() => handleResend()}><Text style={styles.resendButtonText}>Resend {chance} from 3</Text></TouchableOpacity> : null }
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
  )
}