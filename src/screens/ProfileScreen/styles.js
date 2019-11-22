import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {},
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerPhone: {
    fontSize: 13,
  },
  headerRight: {},
  headerImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  headerIcon: {
    fontSize: 13,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#F2F2F2',
    color: 'white',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  line: {
    height: 0,
    backgroundColor: '#F2F2F2',
  },
  section: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  rowChild: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
  },
  logout: {
    color: 'red',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  version: {
    margin: 50,
    textAlign: 'center',
  },
  modal: {
    margin: 0,
  }
});