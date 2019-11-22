import React, {useState, useEffect} from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { Image, TouchableOpacity, Text, View, AsyncStorage } from "react-native";
import styles from "./styles";
import {Eula} from './term';
import {SetLanguageComponent} from '../../components';

export default OnBoardingScreen = props => {
  const [language, setLanguage] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('token').then(r => {
      console.log(r);
      if (r) return props.navigation.navigate('HomeScreen');
      AsyncStorage.getItem('accepted').then(r => {
        if (r) return props.navigation.navigate('LoginScreen');
      })
    })
  }, [])
  return (
    <>
      <SetLanguageComponent language={language} isVisible={modalShow} setLanguage={(value) => setLanguage(value)} hide={() => setModalShow(false)}/>
      <Onboarding
        containerStyles={styles.container}
        imageContainerStyles={styles.containerImage}
        titleStyles={styles.containerTitle}
        subTitleStyles={styles.containerSubTitle}
        bottomBarHighlight={false}
        showNext={false}
        bottomBarHeight={50}
        SkipButtonComponent={() => (
          <TouchableOpacity onPress={() => setModalShow(!modalShow)} style={styles.languageButton}>
            <Text>{language ? 'Indonesia' : 'English'}</Text>
          </TouchableOpacity>
        )}
        DoneButtonComponent={() => (
          <TouchableOpacity style={styles.continueButton} onPress={async ()=> {
            await AsyncStorage.setItem('accepted', 'accepted');
            props.navigation.navigate('LoginScreen');
          }}>
            <Text style={styles.continueButtonText}>{language ? 'Lanjut' : 'Continue'}</Text>
          </TouchableOpacity>
        )}
        DotComponent={({selected}) => {
          let backgroundColor = selected ? 'red' : '#C2C2C2';
          
          return (
            <View
              style={{
                width: 14,
                height: 7,
                marginHorizontal: 3,
                borderRadius: 5,
                backgroundColor,
              }}
            />
          );
        }}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image style={styles.image} source={require('../../../assets/1.png')} />,
            title: language ? 'Selamat Datang di LinkAja!' : 'Welcome to LinkAja!',
            subtitle: language ? 'Aplikasi layanan keuangan yang siap bikin transaksi kamu jadi lebih mudah, aman dan menyenangkan' : 'An exciting hassle-free financial services app for your daily transactions',
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.image} source={require('../../../assets/2.png')} />,
            title: language ? 'Bayar Ini Itu, Banyak Untungnya' : 'Earn More, Here and There',
            subtitle: language ? 'Jajan makanan, bayar tagihan, beli pulsa-data hingga bayar transportasi? Semua beres dan makin untung #PakeLinkAja' : 'From buying foods, paying bills, buying pulsa-data to pay for transports? We got it all, even with benefits for you to enjoy!',
          },
          {
            backgroundColor: '#fff',
            image: <Image style={styles.image} source={require('../../../assets/3.png')} />,
            title: language ? 'Lebih Mudah Tanpa Dompet' : 'No Wallet No Worries!',
            subtitle: language ? 'Kini bisa transaksi dan isi saldo langsung pakai kartu debit kamu, tarik tunai tanpa kartu di ATM juga bisa!' : 'Use your debit card for payment & topup LinkAja. Need cash? Do cardless withdrawal at ATM using the app!',
          },
          {
            backgroundColor: "#fff",
            image: <View />,
            title: <View />,
            titleStyles: { color: "black", fontSize: 16 },
            subtitle: <Eula />
          },
        ]}
      />
    </>
  )
};
