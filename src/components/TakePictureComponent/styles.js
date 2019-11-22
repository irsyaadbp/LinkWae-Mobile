import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  topLine: {
    borderWidth: 2,
    borderColor: '#E2E2E2',
    alignSelf: 'center',
    width: 50,
    marginTop: 20,
  },
  checkListSection: {
    margin: 20,
    marginTop: 40,
  },
  checkList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  language: {
    flexDirection: 'row',
  },
  languageCode: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 20,
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
})