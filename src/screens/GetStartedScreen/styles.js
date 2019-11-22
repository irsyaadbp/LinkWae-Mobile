import {StyleSheet} from 'react-native';

export default styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 50,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  topContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 60,
  },
  title: {
    fontSize: 17,
    marginTop: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    color: '#F2F2F2',
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
  resendButton: {
    marginTop: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  resendButtonText: {
    color: 'red',
  }
})