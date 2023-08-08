import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';
import DateBoxcart from './datebox';

const EventComplete = ({
  time,
  date,
  day,
  title,
  onPress,
  border,
  navigation,
}) => {
  return (
    <View style={styles.flexRow}>
      <DateBoxcart date={date} day={day} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.mainBox}>
        <View
          style={[styles.colorborder, border && {borderColor: border}]}></View>
        <View style={styles.timebox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Image source={icons.circleright} style={styles.right} />
      </TouchableOpacity>
    </View>
  );
};
export default EventComplete;

const styles = StyleSheet.create({
  mainBox: {
    width: SIZES.width * 0.78,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    marginVertical: SIZES.height * 0.01,
    elevation: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  colorborder: {
    borderWidth: 3,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: SIZES.height * 0.084,
  },
  timebox: {
    width: SIZES.width * 0.6,
    marginLeft: SIZES.width * 0.03,
  },
  title: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 12,
  },
  time: {
    color: COLORS.gray50,
    ...FONTS.fourHundred,
    fontSize: 12,
    marginTop: SIZES.width * 0.014,
  },

  right: {
    height: SIZES.height * 0.02,
    width: SIZES.width * 0.05,
    resizeMode: 'contain',
  },
});
