import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default SetLanguageComponent = props => {
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = (isCamera) => {
    if (isCamera) {
      ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      })
      .then(result => {
        if (!result.cancelled) props.result(result.uri);
      })
    } else {
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      })
      .then(result => {
        if (!result.cancelled) props.result(result.uri);
      })
    };
    // if (!result.cancelled) {
    //   console.log(result.uri);
    //   props.result(result.uri);
    // }
  };

  const handleImagePicker = async (isCamera) => {
    await getPermissionAsync();
    await pickImage(isCamera);
  }

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
          <TouchableOpacity style={styles.checkList} onPress={()=>{handleImagePicker(true); props.hide()}}>
            <View style={styles.language}>
              <Icon name='camera'></Icon>
              <Text>Take foto from Camera</Text>
            </View>
            <Icon name='arrow-dropright' style={{color: 'red'}}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkList} onPress={()=>{handleImagePicker(false); props.hide()}}>
            <View style={styles.language}>
              <Icon name='image'></Icon>
              <Text>Upload from the Gallery</Text>
            </View>
            <Icon name='arrow-dropright' style={{color: 'red'}}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};