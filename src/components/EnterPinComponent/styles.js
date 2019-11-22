import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles  = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: height-80,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  closeIcon: {
    fontSize: 25,
    marginBottom: 20,
  },
  topContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
  },
  pinSection: {
    paddingTop: 45,
    paddingHorizontal: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  singlePin: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#F2F2F2',
    width: 30,
    height: 30,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  filledPin: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  message: {
    alignItems: 'center',
  },
  errorMessage: {
    color: '#F2F2F2',
    textAlign: 'center',
  },
  forgotButton: {
    marginTop: 10,
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  forgotButtonText: {
    color: 'red',
    fontSize: 14,
  },
  bottomContainer: {
    flex: 1,
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
  },
})