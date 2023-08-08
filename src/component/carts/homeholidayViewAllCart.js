import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

export const ImageTitleView = ({heading, view, icons, onPress, navigation}) => {
  // const [view, setView] = useState(true);
  return (
    <View style={styles.containBox}>
      <View style={styles.containBox}>
        <View style={styles.iconStyleBox}>
          <Image source={icons} style={styles.iconStyle} />
        </View>
        <Text numberOfLines={1} style={styles.title}>
          {heading}
        </Text>
      </View>
      {view && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.view}>{view}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const HomeHolidayViewAllCart = ({heading, icons, date, day, reson}) => {
  return (
    <View style={[styles.containBox, {marginVertical: SIZES.height * 0.01}]}>
      <View style={styles.datebox}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.day}>{day} </Text>
      <Text numberOfLines={1} style={styles.reson}>
        {reson}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.height * 0.005,
    
  },
  title: {
    fontSize: 13,
    ...FONTS.sixHundred,
    color: COLORS.lightblue,
    marginBottom: -3,
    width: SIZES.width * 0.6,
  },
  view: {
    color: '#FAAA35',
    fontSize: 12,
    textDecorationLine: 'underline',
    ...FONTS.sixHundred,
  },
  iconStyleBox: {
    elevation: 2,
    backgroundColor: '#F7F7F7',
    width: SIZES.width * 0.08,
    height: SIZES.width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: SIZES.width * 0.02,
  },
  iconStyle: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.02,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  datebox: {
    backgroundColor: '#D9FDFF',
    height: SIZES.height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.23,
    borderRadius: 5,
    elevation: 1,
  },
  date: {
    color: '#3A987F',
    fontSize: 11,
    ...FONTS.fiveHundred,
    marginBottom: -2,
  },
  day: {
    color: COLORS.gray50,
    fontSize: 12,
    ...FONTS.fiveHundred,
    width: SIZES.width * 0.3,
    textAlign: 'center',
  },
  reson: {
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.sixHundred,
    width: SIZES.width * 0.35,
  },
});
