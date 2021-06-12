import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './Screens/WelcomeScreen';
import ExchangeScreen from './Screens/ExchangeScreen';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return <AppContainer />;
}

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 35, height: 35 }}
          source={require('./assets/home.png')}
        />
      ),
      tabBarLabel: 'Home Screen',
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 30, height: 30 }}
          source={require('./assets/exchange.png')}
        />
      ),
      tabBarLabel: 'Exchange',
    },
  },
});

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
