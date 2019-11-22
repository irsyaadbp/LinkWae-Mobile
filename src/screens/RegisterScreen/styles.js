import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 40,
    flexDirection: 'row',
  },
  content: {
    minHeight: '50%',
  },
  backIcon: {
    fontSize: 20,
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginRight: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#F2F2F2',
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  imageSection: {
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  addFotoButton: {
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  addFotoButtonText: {
    color: 'red',
    fontSize: 12,
  },
  inputSection: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  nameInput: {
    fontSize: 14,
    flex: 1,
  },
  nameClearIcon: {
    fontSize: 20,
    color: '#9CA4AC',
  },
  nextButton: {
    backgroundColor: 'red',
    borderRadius: 30,
    alignItems: "center",
    justifyContent: 'center',
    height: 40,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
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
});

export const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 0,
  // stepStrokeCurrentColor: 'red',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: 'blue',
  stepStrokeUnFinishedColor: '#949796',
  separatorFinishedColor: '#949796',
  separatorUnFinishedColor: '#949796',
  stepIndicatorFinishedColor: '#00a9f7',
  stepIndicatorUnFinishedColor: '#c2c2c2',
  stepIndicatorCurrentColor: 'red',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: 'white',
  stepIndicatorLabelFinishedColor: 'white',
  stepIndicatorLabelUnFinishedColor: 'white',
  labelColor: '#999999',
  labelSize: 15,
  currentStepLabelColor: '#fe7013'
}