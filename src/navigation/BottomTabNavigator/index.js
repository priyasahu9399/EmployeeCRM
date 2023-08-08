import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import styles from './styles';
import Home from './../../screens/home/index';
import Service from './../../screens/service/index';
import Approval from './../../screens/approval/index';
import Profile from './../../screens/profile/index';

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tableBar,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: styles.headerstyle,
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <View>
              <Text style={styles.title}>Welcome,Daisy</Text>
              <Text style={styles.title}>Project manager</Text>
            </View>
          ),
          headerLeft: () => (
            <View style={styles.logoBox}>
              <Image source={images.glogo} style={styles.logo} />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image source={icons.colorbell} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.primary : COLORS.lightgray},
              ]}>
              <Image
                source={icons.home}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.white : COLORS.primary},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.primary : COLORS.lightgray},
              ]}>
              <Image source={icons.service} style={styles.icon_set} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Approval"
        component={Approval}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.primary : COLORS.lightgray},
              ]}>
              <Image
                source={icons.approve}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.white : COLORS.primary},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            elevation:0
          },
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.primary : COLORS.lightgray},
              ]}>
              <Image
                source={icons.person}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.white : COLORS.primary},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
