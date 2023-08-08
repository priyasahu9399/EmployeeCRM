import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const HolidayCart = ({onPress, reson,icon, date, title}) => {
  return (
    <View style={styles.leavebox}>
      <View style={styles.containBox}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.iconStyleBox}>
          <Image source={icon} style={styles.iconStyle} />
        </View>
      </View>

      <View style={[styles.containBox, {marginTop: SIZES.height * 0.02}]}>
        <View style={styles.statusbox}>
          <Text style={styles.status}>{reson}</Text>
        </View>
        <Text style={styles.zero}>{date}</Text>
      </View>
    </View>
  );
};
export default HolidayCart;

const styles = StyleSheet.create({
  leavebox: {
    width: SIZES.width * 0.92,
    borderRadius: 8,
    backgroundColor: '#E2FFF4',
    padding: SIZES.width * 0.05,
    elevation: 1,
    marginVertical: SIZES.height * 0.01,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.lightblue,
    width: SIZES.width * 0.75,
  },
  iconStyleBox: {
    elevation: 2,
    backgroundColor: '#C3FFE9',
    width: SIZES.width * 0.08,
    height: SIZES.width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  iconStyle: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.02,
    resizeMode: 'contain',
    tintColor: '#3A987F',
  },
  zero: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  statusbox: {
    backgroundColor: '#D2FAEF',
    height: SIZES.height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.25,
    borderRadius: 6,
    elevation: 1,
  },
  status: {
    color: '#3A987F',
    fontSize: 11,
    ...FONTS.fiveHundred,
    marginBottom: -2,
  },
});
