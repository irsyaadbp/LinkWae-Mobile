import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
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
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 0.7*width,
    height: 0.5*width,
  },
  subtitle: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
})