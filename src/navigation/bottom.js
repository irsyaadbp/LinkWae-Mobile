import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen, ProfileScreen } from '../screens';

export default BottomNavigation = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => 
          <Image source={!focused ? require('../../assets/home-a.png') : require('../../assets/home-b.png')} style={styles.normalIcon}/>
      }
    },
    HistoryScreen: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({focused}) => 
          <Image source={!focused ? require('../../assets/history-a.png') : require('../../assets/history-b.png')} style={styles.normalIcon}/>
      }
    },
    PayScreen: {
      screen: PayScreen,
      navigationOptions: {
        tabBarLabel: 'Pay',
        tabBarIcon: () => 
          <View style={styles.white}>
            <View style={styles.red}>
              <Image source={require('../../assets/pay.png')} style={styles.normalIcon}/>
            </View>
          </View>
      }
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({focused}) => 
          <Image source={!focused ? require('../../assets/inbox-a.png') : require('../../assets/inbox-b.png')} style={styles.normalIcon}/>
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({focused}) => 
          <Image source={!focused ? require('../../assets/account-a.png') : require('../../assets/account-b.png')} style={styles.normalIcon}/>
      }
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
    }
  }
);

const styles = StyleSheet.create({
  normalIcon: {
    width: 30,
    height: 30,
  },
  red: {
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 10,
    borderColor: 'white',
    borderWidth: 10,
  },
  white: {
    marginBottom: 50,
  }
})