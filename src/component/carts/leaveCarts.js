import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const LeaveCarts = ({
  onPress,
  background,
  dateColor,
  titlecolor,
  dateboxbgColor,
  date,
  title,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.leavebox, background && {backgroundColor: background}]}>
      <View
        style={[
          styles.datebox,
          dateboxbgColor && {backgroundColor: dateboxbgColor},
        ]}>
        <Text style={[styles.date, dateColor && {color: dateColor}]}>
          {date}
        </Text>
      </View>
      <Text style={[styles.title, titlecolor && {color: titlecolor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default LeaveCarts;

const styles = StyleSheet.create({
  leavebox: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.12,
    borderRadius: 6,
    justifyContent: 'center',
    padding: SIZES.width * 0.006,
    backgroundColor: '#F7F7F7',
    elevation: 2,
    margin: SIZES.width * 0.01,
  },
  datebox: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: SIZES.height * 0.01,
    elevation: 1,
  },
  date: {
    fontSize: 13,
    ...FONTS.sixHundred,
    marginBottom: -4,
  },
  title: {
    fontSize: 13,
    ...FONTS.fiveHundred,
    textAlign: 'center',
    marginBottom: -3,
  },
});
