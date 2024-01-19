import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GamePlayedScreen from '../dummyScreens/GamePlayedScreen';
import BadgesScreen from '../model/BadgesScreen';

import {AppColor, FontSize} from '../utils/StyleConstants';

const Tab = createMaterialTopTabNavigator();

const ProfileScreenTopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: AppColor.purple,
        tabBarInactiveTintColor: AppColor.greyText,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      }}>
      <Tab.Screen
        name="Game Played"
        component={GamePlayedScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {...styles.tabBarTitle, color: AppColor.purple}
                  : styles.tabBarTitle
              }>
              Game Played
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Badges"
        component={BadgesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {...styles.tabBarTitle, color: AppColor.purple}
                  : styles.tabBarTitle
              }>
              Badges
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileScreenTopTabNavigation;

const styles = StyleSheet.create({
  tabBarTitle: {
    color: AppColor.greyText,
    fontSize: FontSize.medium,
    fontFamily: 'Montserrat Regular',
  },
  tabBarIndicatorStyle: {
    backgroundColor: AppColor.purple,
  },
});
