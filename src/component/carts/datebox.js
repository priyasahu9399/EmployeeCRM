import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const DateBoxcart = ({date, day}) => {
  return (
    <View style={styles.datebox}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.date}>{day.slice(0, 3)}</Text>
    </View>
  );
};
export default DateBoxcart;

const styles = StyleSheet.create({
  date: {
    color: COLORS.lightblue,
    fontSize: 11,
    ...FONTS.fourHundred,
    textAlign: 'center',
    marginBottom: -3,
  },
  datebox: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.083,
    borderRadius: 6,
    elevation: 2,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
});
