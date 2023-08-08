import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';
import DateBoxcart from './datebox';

const EventUpcoming = ({
  time,
  date,
  day,
  bg,
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
        style={[styles.mainBox, bg && {backgroundColor: bg}]}>
        <View
          style={[styles.colorborder, border && {borderColor: border}]}></View>
        <View style={styles.timebox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.datebox}>
        <Image source={icons.right}  style={styles.doneDeleteicon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.datebox}>
        <Image source={icons.deleteicon} style={styles.doneDeleteicon} />
      </TouchableOpacity>
    </View>
  );
};
export default EventUpcoming;

const styles = StyleSheet.create({
  mainBox: {
    width: SIZES.width * 0.52,
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
    marginLeft: SIZES.width * 0.03,
    //  borderWidth: 1,
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
  datebox: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.083,
    borderRadius: 6,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.white
  },
  doneDeleteicon: {
    width: SIZES.width * 0.042,
    height: SIZES.height * 0.03,
    resizeMode: 'contain',
  },
});
