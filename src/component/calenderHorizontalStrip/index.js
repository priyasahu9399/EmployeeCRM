import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import CalendarStrip from 'react-native-calendar-strip';
const CalenderHorizontal = ({selectedDate}) => {
  return (
    <View>
      <CalendarStrip
        scrollable
        daySelectionAnimation={{
          type: 'background',
          duration: 200,
          highlightColor: 'blue',
        }}
        style={styles.container}
        // daySelectionAnimation={styles.daySelectionAnimation}
        highlightDateNumberStyle={{color: COLORS.white}}
        highlightDateNameStyle={styles.highlightDateNameStyle}
        calendarColor={COLORS.white}
        calendarHeaderStyle={styles.calendarHeaderStyle}
        dateNameStyle={styles.dateNumberNameStyle}
        dateNumberStyle={styles.dateNumberNameStyle}
        iconStyle={{display: 'none'}}
        iconContainer={{flex: 0.1}}
        selectedDate={selectedDate}
        dateContainerStyle={{backgroundColor: COLORS.primary}}
      />
    </View>
  );
};

export default CalenderHorizontal;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.12,
    marginVertical: SIZES.height * 0.015,
  },
  daySelectionAnimation: {
    type: 'border',
    duration: 200,
    borderWidth: 1,
    borderHighlightColor: COLORS.primary,
  },
  dateNumberNameStyle: {
    color: COLORS.black,
    fontSize: 12,
  },
  highlightDateNameStyle: {
    color: COLORS.white,
    fontSize: 10,
  },
  calendarHeaderStyle: {
    color: COLORS.black,
    fontSize: 15,
  },
});
