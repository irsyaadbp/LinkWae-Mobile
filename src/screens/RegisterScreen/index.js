import React, { useState, useEffect } from "react";
import StepIndicator from "react-native-step-indicator";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  ToastAndroid
} from "react-native";
import { Icon } from "native-base";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import { TakePictureComponent } from "../../components";
import styles, { customStyles } from "./styles";
import Axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";

import { AsyncStorage } from "react-native";

export default RegisterScreen = props => {
  const phoneNumber = props.navigation.state.params.phoneNumber;
  const labels = ["Data Diri", "Email", "PIN"];
  const actions = ["Lanjut", "Kirim", ""];
  const [currentPosition, setCurrentPosition] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [isTakePicture, setIsTakePicture] = useState(false);

  const { isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState(
    "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
  );
  const [expoToken, setExpoToken] = useState("");

  const handleKeyboardPress = key => {
    if (key == "backspace") {
      confirmPin.length == 0
        ? setPin(pin.slice(0, -1))
        : setPin(pin.slice(0, -1));
    } else {
      pin.length != 6 ? setPin(pin + key) : setConfirmPin(confirmPin + key);
    }
  };

  // const getExpoToken = async () => {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;
  //   if (existingStatus !== 'granted') {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   };
  //   if (finalStatus !== 'granted') {
  //     return;
  //   };
  //   setExpoToken(await Notifications.getExpoPushTokenAsync());
  // };

  const handleSubmit = async () => {
    const data = { name, email, image: imageUri, pin, phone: phoneNumber };
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    const formData = new FormData();
    formData.append("phone", phoneNumber);
    formData.append("pin", pin);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", imageUri);
    formData.append("expo_token", expoToken);
    // setIsLoading(true);
    if (pin == confirmPin) {
      // Axios.put(
      //   "https://linkwae.herokuapp.com/users/register",
      //   formData,
      //   config
      // )
      //   .then(r => {
      //     console.log(r.data);
      //     setIsLoading(false);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //     setIsLoading(false);
      //   });

      const submit = await dispatch(register(formData, config));

      if (submit.value.data.status === "success") {
        console.log(submit);
        await AsyncStorage.setItem(
          "user",
          JSON.stringify(submit.value.data.response)
        );
        ToastAndroid.show("Register Success", ToastAndroid.SHORT);
        props.navigation.navigate("MainNavigation");
      } else {
        ToastAndroid.show("Register Error", ToastAndroid.SHORT);
      }

      // alert('success')
      // console.log(data);
      // props.navigation.navigate('HomeScreen');
    } else {
      // setIsLoading(false);
      alert("pin not same");
      setPin("");
      setConfirmPin("");
    }
  };

  useEffect(() => {
    if (confirmPin.length == 6) handleSubmit();
    // if (expoToken == '') getExpoToken();
  }, [pin, confirmPin]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      {isLoading && (
        <Modal animationIn="fadeIn" backdropOpacity={0} isVisible={isLoading}>
          <LottieView
            style={{ height: 100, width: 100, alignSelf: "center" }}
            source={require("../../../assets/loading.json")}
            autoPlay
            loop
          />
        </Modal>
      )}
      {/* {isLoading && <Modal isVisible={isLoading}><ActivityIndicator size='large' color='red'/></Modal>} */}
      <TakePictureComponent
        isVisible={isTakePicture}
        hide={() => setIsTakePicture(false)}
        result={result => setImageUri(result)}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="arrow-round-back" style={styles.backIcon}></Icon>
          <Text style={styles.headerTitle}>Daftar</Text>
        </View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={3}
        />
        {currentPosition == 0 ? (
          <>
            <Text style={styles.title}>Lengkapi Data Kamu</Text>
            <Text style={styles.subtitle}>
              Masukan foto serta nama kamu agar akun kamu dapat dikenali
            </Text>
            <View style={styles.imageSection}>
              <Image source={{ uri: imageUri }} style={styles.image}></Image>
              <TouchableOpacity
                style={styles.addFotoButton}
                onPress={() => setIsTakePicture(true)}
              >
                <Text style={styles.addFotoButtonText}>Tambah Foto</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputSection}>
              <TextInput
                onChangeText={text => setName(text)}
                style={styles.nameInput}
                placeholder="cth: Linka Jadid..."
                value={name}
              />
              <Icon
                name="close-circle"
                style={styles.nameClearIcon}
                onPress={() => setName("")}
              ></Icon>
            </View>
          </>
        ) : null}
        {currentPosition == 1 ? (
          <>
            <Text style={styles.title}>Verifikasi Email</Text>
            <Text style={styles.subtitle}>
              Masukan dan validasi alamat email kamu untuk memiliki akses ke
              reset PIN
            </Text>
            <View style={styles.inputSection}>
              <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.nameInput}
                placeholder="Masukan Email Kamu"
                value={email}
              />
            </View>
          </>
        ) : null}
        {currentPosition == 2 ? (
          <>
            <Text style={styles.title}>
              {pin.length == 6 ? "Konfirmasi PIN Kamu" : "Buat PIN"}
            </Text>
            <Text style={styles.subtitle}>
              {pin.length == 6
                ? "Masukan kembali PIN baru kamu"
                : "Untuk keamana bertansaksi, masukan PIN kamu"}
            </Text>
            <View style={styles.pinSection}>
              {console.log(
                pin.length,
                "> 0",
                pin.length,
                "!= 6",
                pin.length > 0 && pin.length != 6
              )}
              <View style={styles.singlePin}>
                {confirmPin.length > 0 ||
                (pin.length > 0 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
              <View style={styles.singlePin}>
                {confirmPin.length > 1 ||
                (pin.length > 1 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
              <View style={styles.singlePin}>
                {confirmPin.length > 2 ||
                (pin.length > 2 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
              <View style={styles.singlePin}>
                {confirmPin.length > 3 ||
                (pin.length > 3 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
              <View style={styles.singlePin}>
                {confirmPin.length > 4 ||
                (pin.length > 4 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
              <View style={styles.singlePin}>
                {confirmPin.length > 5 ||
                (pin.length > 5 && pin.length != 6) ? (
                  <View style={styles.filledPin} />
                ) : (
                  <View />
                )}
              </View>
            </View>
          </>
        ) : null}
      </View>
      {actions[currentPosition] != "" ? (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setCurrentPosition(currentPosition + 1)}
        >
          <Text style={styles.nextButtonText}>{actions[currentPosition]}</Text>
        </TouchableOpacity>
      ) : (
        <>
          <View style={styles.keyboardSection}>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(1)}
            >
              <Text style={styles.keyboardButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(2)}
            >
              <Text style={styles.keyboardButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(3)}
            >
              <Text style={styles.keyboardButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(4)}
            >
              <Text style={styles.keyboardButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(5)}
            >
              <Text style={styles.keyboardButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(6)}
            >
              <Text style={styles.keyboardButtonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(7)}
            >
              <Text style={styles.keyboardButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(8)}
            >
              <Text style={styles.keyboardButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(9)}
            >
              <Text style={styles.keyboardButtonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keyboardSection}>
            <TouchableOpacity style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress(0)}
            >
              <Text style={styles.keyboardButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.keyboardButton}
              onPress={() => handleKeyboardPress("backspace")}
            >
              <Icon
                name="md-backspace"
                style={styles.keyboardButtonIcon}
              ></Icon>
            </TouchableOpacity>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};
