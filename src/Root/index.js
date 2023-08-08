import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreen from './../navigation/StackNavigator';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackScreen"
        component={StackScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Root;
