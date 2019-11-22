import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  icon: {
    fontSize: 20,
  },
  title: {
    paddingRight: 20,
    fontSize: 17,
    textAlign: 'center',
    flex: 1,
  },
  body: {
    padding: 20,
    flex: 1,
  },
  label: {
    fontSize: 13,
    paddingBottom: 20,
  },
  list: {
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
  },
  text: {
    fontSize: 13,
    flex: 1,
  },
  arrow: {
    fontSize: 20,
    color: 'red',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 20,
  },
  prefix: {
    fontSize: 13,
  },
  phone: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
  },
  history: {
    flex: 1,
    paddingTop: 20,
  },
  noHistory: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: 0.7*width,
    height: 0.5*width,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
  },
  content: {
    textAlign: 'center',
    fontSize: 11,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  divider: {
    backgroundColor: '#e2e2e2',
    height: 5,
  },
  modal: {
    margin: 0,
  }
})