import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  containerImage: {
    paddingBottom: 5,
  },
  image: {
    height: height*0.6,
    width: '100%',
  },
  containerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  containerSubTitle: {
    marginTop: 0,
    fontSize: 11,
    lineHeight: 17,
  },
  languageButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  continueButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  continueButtonText: {
    color: 'white',
  },
  termHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  termSubHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  termContent: {
    fontSize: 12,
    textAlign: 'auto',
    flexDirection: 'row',
    marginBottom: 5,
  },
  termContentNumber: {
    width: 20,
    fontSize: 12,
  },
  termContentText: {
    flex: 1,
    textAlign: 'auto',
    fontSize: 12,
  },
  termEmail: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});