import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import PreferencePage from './PreferencePage';
import Swipefunction from './SwipeFunction';
import Test from './Test';


export const Tabs = TabNavigator({
    Preference: {
      screen: PreferencePage,
      navigationOptions: {
      tabBarLabel: 'Preference',
    },
  },
    Swipe: {
      screen: Swipefunction,
      navigationOptions: {
      tabBarLabel: 'Swipe',
   }
  }
  //  Test: {
    //    screen: Test,
    //}
});

