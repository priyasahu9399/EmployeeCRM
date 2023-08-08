import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import BottomTab from './../BottomTabNavigator';
import styles from './styles';
import CheckInSuccess from './../../screens/chekinSuccess';
import CheckOutSuccess from './../../screens/chekOutSuccess';
import CheckIn from './../../screens/checkIn';
import Events from './../../screens/events';
import Holiday from './../../screens/holiday';
import LeaveSuccess from './../../screens/leaveSuccess';
import Leaves from './../../screens/leaves';
import EmployHistory from './../../screens/employHistory';
import EmployDetails from './../../screens/employDetail';
import PersonalDetail from './../../screens/personalDetails';
import Attendence from './../../screens/attendence/index';
import AttendenceTrack from './../../screens/attendenceTrack/index';
import ViewWorkTrack from './../../screens/ViewWorktrack/index';
import WorkTrack from './../../screens/workTrack/index';
import ApplyLeave from './../../screens/leaveApply/index';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackScreen = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: styles.headerstyle,
        headerTitleStyle: {color: COLORS.white},
        headerTintColor: COLORS.white,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Holiday" component={Holiday} />
      <Stack.Screen name="LeaveSuccess" component={LeaveSuccess} />
      <Stack.Screen name="Leaves" component={Leaves} />
      <Stack.Screen name="Attendence" component={Attendence} />
      <Stack.Screen
        name="ApplyLeave"
        component={ApplyLeave}
        options={{
          title: 'Apply Leave',
        }}
      />

      {/*  */}
      <Stack.Screen
        name="AttendenceTrack"
        component={AttendenceTrack}
        options={{
          title: 'Attendence Track',
        }}
      />
      <Stack.Screen
        name="ViewWorkTrack"
        component={ViewWorkTrack}
        options={{
          title: 'View',
        }}
      />
      <Stack.Screen
        name="WorkTrack"
        component={WorkTrack}
        options={{
          title: 'Work Tracker',
        }}
      />
      <Stack.Screen
        name="CheckInSuccess"
        component={CheckInSuccess}
        options={{
          title: 'Check In Success',
        }}
      />
      <Stack.Screen
        name="CheckOutSuccess"
        component={CheckOutSuccess}
        options={{
          title: 'Check Out Success',
        }}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{
          title: 'Check In',
        }}
      />
      <Stack.Screen
        name="EmployHistory"
        component={EmployHistory}
        options={{
          title: '',
          headerStyle: styles.headerProfileStyle,
        }}
      />
      <Stack.Screen
        name="EmployDetails"
        component={EmployDetails}
        options={{
          title: '',
          headerStyle: styles.headerProfileStyle,
        }}
      />
      <Stack.Screen
        name="PersonalDetail"
        component={PersonalDetail}
        options={{
          title: '',
          headerStyle: styles.headerProfileStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
