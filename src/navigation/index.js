import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import BottomNavigation from './bottom';
import { LoginScreen, OnBoardingScreen, GetStartedScreen, RegisterScreen, SendMoneyScreen, ComingSoonScreen } from '../screens';
import DealsDetailComponent from '../screens/HomeScreen/DealsDetailComponent';
import EmailVerificationComponent from '../screens/HomeScreen/EmailVerificationComponent';
import PulsaDataComponent from '../screens/HomeScreen/PulsaDataComponent';

const AuthNavigation = createStackNavigator(
  {
    LoginScreen,
    GetStartedScreen,
    RegisterScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

const MainNavigation = createStackNavigator(
  {
    BottomNavigation,
    SendMoneyScreen,
    ComingSoonScreen,
    DealsDetailComponent,
    EmailVerificationComponent,
    PulsaDataComponent,
  },
  {
    initialRouteName: 'BottomNavigation',
    headerMode: 'none',
  })

const SwitchNavigation = createSwitchNavigator(
  {
    OnBoardingScreen,
    AuthNavigation,
    MainNavigation,
  },
  {
    initialRouteName: 'OnBoardingScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(SwitchNavigation);