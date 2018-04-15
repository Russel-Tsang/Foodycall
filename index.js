import React,  {Component}  from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {StackNavigator} from 'react-navigation';
import PreferencePage from './src/components/PreferencePage';
import SwipeFunction from './src/components/SwipeFunction';
import Test from './src/components/Test'

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  PreferencePage: {screen: PreferencePage},
  SwipeFunction: {screen: SwipeFunction}
})

AppRegistry.registerComponent('DummyApp', () => App);
