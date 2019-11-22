import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    marginRight: 20,
  },
  divider: {
    height: 5,
    backgroundColor: '#F2F2F2',
  },
  phone: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7',
    paddingBottom: 5,
  },
  prefix: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
    padding: 3,
    fontSize: 12,
  },
  input: {
    flex: 1,
  },
  myphoneSection: {
    flexDirection: 'row',
    padding: 15,
  },
  left: {
    flex: 1
  },
  myphone: {
    marginTop: -7,
  },
  scroll: {
    padding: 20,
    flex: 1,
  },
  nodata: {},
  image: {
    alignSelf: 'center',
    width: width/2,
    height: width/2 - 55,
    marginVertical: 20,
  },
  message: {
    fontSize: 12,
    textAlign: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  }
});