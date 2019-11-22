import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  headerTitle: {
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 50,
  },
  image: {
    height: 150,
    width: width,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 13,
    fontWeight: 'bold',
  },
  subtitle: {
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 10,
    fontSize: 11,
    color: '#F2F2F2',
  },
  line: {
    height: 5,
    backgroundColor: '#F2F2F2',
  },
  dashedline: {
    marginHorizontal: 20,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  row: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  validInfo: {
    marginTop: 10,
    fontSize: 11,
    marginBottom: 20,
  },
  text: {
    marginTop: 20,
    // marginHorizontal: 20,
    fontSize: 13,
    color: '#F2F2F2',
  },
  button: {
    marginHorizontal: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 40,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  }
})