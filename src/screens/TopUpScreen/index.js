import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, FlatList, TextInput} from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import { EnterPinComponent } from '../../components';

import styles from './styles';
import Axios from 'axios';

export default Amount = props => {
  const [amount, setAmount] = useState('');
  // const [userId, setUserId] = useState('');
  const [pin, setPin] = useState('');
  const [modalPin, setModalPin] = useState(false);

  const handleKeyboardPress = key => {
    if (key == 'backspace') {
      setAmount(amount.slice(0, -1));
    } else {
      if (amount.length == 0 && key == 0) null;
      else if (amount.length == 16) null;
      else setAmount(amount+key);
    }
  };

  const {authResponse} = useSelector(state => state.auth);

  const handleSubmit = (pin) => {
    const data = {
      user_id: authResponse.user.id,
      amount,
      code_number: authResponse.user.phone,
      detail_transaction: 'Top up',
      pin,
      category_name: 'topup'
    }
    console.log(data)
    if (amount != 0 && pin != '') {
      Axios.post('http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/transactions', data)
      .then(r => {
        console.log(r.data);
        setModalPin(false);
        props.hide();
      })
      .catch(e => console.log(e));
    }
  }

  return (
    <>
    <EnterPinComponent mode={'sendMoney'} submit={(pin) => {console.log(pin);setPin(pin); handleSubmit(pin)}} navigation={props.navigation} phoneNumber={authResponse.user.phone} show={modalPin} hide={() => {setModalPin(false);setModalUp(false)}}/>
    <Modal
      isVisible={props.visible}
      style={styles.modal}
      onBackButtonPress={() => props.hide()}
    >
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <Icon style={{fontSize: 20}} name='close' onPress={() => props.hide()}></Icon>
          <Text style={{fontSize: 10, textAlign: 'center', flex: 1}}>Send to{'\n'}*aqi ******ani</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{}}>Amount</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Rp </Text>
            <Text style={{}}>{amount == '' ? '0' : amount}</Text>
          </View>
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(1)}><Text style={{fontSize: 20}}>1</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(2)}><Text style={{fontSize: 20}}>2</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(3)}><Text style={{fontSize: 20}}>3</Text></TouchableOpacity>
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(4)}><Text style={{fontSize: 20}}>4</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(5)}><Text style={{fontSize: 20}}>5</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(6)}><Text style={{fontSize: 20}}>6</Text></TouchableOpacity>
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(7)}><Text style={{fontSize: 20}}>7</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(8)}><Text style={{fontSize: 20}}>8</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(9)}><Text style={{fontSize: 20}}>9</Text></TouchableOpacity>
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress('000')}><Text style={{fontSize: 20}}>000</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress(0)}><Text style={{fontSize: 20}}>0</Text></TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={()=>handleKeyboardPress('backspace')}><Icon name='backspace'></Icon></TouchableOpacity>
        </View>
        <Icon style={{color: 'white', paddingHorizontal: 5, marginBottom: 20, alignSelf: 'center', backgroundColor: 'red', borderRadius: 30,}} name='checkmark' onPress={() => setModalPin(true)}></Icon>
      </View>
    </Modal>
    </>
  )
}