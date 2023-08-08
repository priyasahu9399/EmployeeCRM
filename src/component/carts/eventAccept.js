import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';
import DateBoxcart from './datebox';

const EventAccept = ({
  time,
  date,
  day,
  title,
  onPress,
  bg,
  navigation,
  border,
  onPressMeet,
}) => {
  return (
    <View style={styles.flexRow}>
      <DateBoxcart date={date} day={day} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.mainBox, bg && {backgroundColor: bg}]}>
        <View
          style={[styles.colorborder, border && {borderColor: border}]}></View>
        <View style={styles.timebox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity onPress={onPressMeet} style={styles.joinbtn}>
          <Text style={styles.joinmeet}>Join Meet</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
export default EventAccept;

const styles = StyleSheet.create({
  mainBox: {
    width: SIZES.width * 0.78,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
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
    width: SIZES.width * 0.5,
    marginLeft: SIZES.width * 0.03,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 14,
  },
  time: {
    color: COLORS.lightblue,
    ...FONTS.fourHundred,
    fontSize: 12,
    marginTop: SIZES.width * 0.014,
  },

  joinbtn: {
    borderWidth: 1,
    borderRadius: 6,
    height: SIZES.height * 0.032,
    width: SIZES.width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.lightblue,
    elevation: 1,
    backgroundColor: COLORS.white,
  },
  joinmeet: {
    color: COLORS.lightblue,
    ...FONTS.fiveHundred,
    fontSize: 12,
    marginBottom: -3,
  },
});
