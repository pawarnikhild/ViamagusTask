import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import GameScreen from '../model/GameScreen';
import LeagesScreen from '../dummyScreens/LeaguesScreen';
import ResearchScreen from '../dummyScreens/ResearchScreen';
import LeaderBoardScreen from '../dummyScreens/LeaderBoardScreen';
import ProfileScreen from '../model/ProfileScreen';

import {AppColor, FontSize} from '../utils/StyleConstants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: AppColor.purple,
          tabBarInactiveTintColor: AppColor.greyText,
        }}>
        <Tab.Screen
          name="Home"
          component={GameScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? AppColor.purple : AppColor.lightGreyText}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={LeagesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name="trophy"
                size={24}
                color={focused ? AppColor.purple : AppColor.lightGreyText}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
        <Tab.Screen
          name="Research"
          component={ResearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name="search"
                size={24}
                color={focused ? AppColor.purple : AppColor.lightGreyText}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
        <Tab.Screen
          name="LeaderBoard"
          component={LeaderBoardScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome6
                name="chart-simple"
                size={24}
                color={focused ? AppColor.purple : AppColor.lightGreyText}
                style={[styles.barIcon, styles.tabBarIcon]}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={focused ? AppColor.purple : AppColor.lightGreyText}
                style={styles.tabBarIcon}
              />
            ),
            tabBarLabelStyle: styles.tabBarTitle,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    marginTop: 10,
  },
  tabBarTitle: {
    fontSize: FontSize.ultraSmall,
    fontFamily: 'Montserrat Regular',
    marginBottom: 10,
  },
  barIcon: {transform: [{rotateY: '180deg'}]},
});
