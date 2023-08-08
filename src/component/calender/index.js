import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
// import {icons, images} from './../../constants';
import {
  Calendar,
  CalendarList,
  CalendarProvider,
  Agenda,
} from 'react-native-calendars';

export const CalenderList = () => {
  return (
    <View>
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
        theme={{
          calendarBackground: '#F7F7F7',
          selectedDayTextColor: COLORS.primary,
          dayTextColor: COLORS.black,
          textDisabledColor: COLORS.gray40,
          arrowColor: COLORS.primary,
          textDayFontFamily: 'Poppins',
          textMonthFontFamily: 'Poppins',
          textDayHeaderFontFamily: 'Poppins',
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayHeaderFontSize: 16,
        }}
        style={{
          width: SIZES.width * 0.91,
          alignSelf: 'center',
          backgroundColor: '#F7F7F7',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
    </View>
  );
};

export const AgendaCalender = () => {
  return (
    <Agenda
      horizontal={true}
      // staticHeader={true}
      onDayPress={day => {
        console.log('day pressed');
      }}
      selected={'2023-07-28'}
      pastScrollRange={50}
      futureScrollRange={20}
      theme={{
        calendarBackground: COLORS.gray10,
        selectedDayTextColor: COLORS.primary,
        dayTextColor: COLORS.black,
        textDisabledColor: COLORS.gray80,
        arrowColor: COLORS.primary,
        textDayFontFamily: 'Poppins',
        textMonthFontFamily: 'Poppins',
        textDayHeaderFontFamily: 'Poppins',
        textDayFontSize: 14,
        textMonthFontSize: 14,
        textDayHeaderFontSize: 16,
        agendaDayTextColor: COLORS.black,
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: COLORS.gray80,
      }}
      displayLoadingIndicator={false}
      rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
      }}
      style={{
        width: SIZES.width * 0.9,
        alignSelf: 'center',
        backgroundColor: COLORS.gray10,
        height: SIZES.height * 0.4,
        marginTop: SIZES.height * 0.03,
      }}
    />
  );
};

// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: COLORS.white,
//     width: SIZES.width * 0.9,
//     alignSelf: 'center',
//     marginBottom: SIZES.height * 0.1,
//   },
//   customStyles: {
//     textAlign: 'center',
//     backgroundColor: COLORS.white,
//     elevation: 4,
//     padding: SIZES.width * 0.02,
//     width: SIZES.width * 0.09,
//     height: SIZES.height * 0.04,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     ...FONTS.sixHundred,
//     fontSize: 12,
//   },
// });
