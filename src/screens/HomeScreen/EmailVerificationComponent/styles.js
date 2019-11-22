import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // alignItems: 'center',
    padding: 20,
    // justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  body: {
    marginTop: 50,
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
  },
  content: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 50,
  },
  inputSection: {
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
    flexDirection: 'row',
  },
  input: {
    flex: 1
  },
  icon: {
    fontSize: 20,
    color: '#F2F2F2',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
})