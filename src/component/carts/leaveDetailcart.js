import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const LeaveDetailCart = ({onPress, reson,dateMonth, date, title, status}) => {
  return (
    <View>
      <Text style={styles.dateMonth}>{dateMonth}</Text>
      <View style={styles.leavebox}>
        <View style={styles.containBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.day}>{date}</Text>
          <Text style={styles.reason}>{reson}</Text>
        </View>
        {status && (
          <View
            style={[
              styles.statusbox,
              status === 'Pending' && {backgroundColor: '#FFEBD5'},
              status === 'Rejected' && {backgroundColor: '#FFEBD5'},
            ]}>
            <Text
              style={[
                styles.status,
                status === 'Pending' && {color: '#FF8900'},
                status === 'Rejected' && {color: '#EA462F'},
              ]}>
              {status}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default LeaveDetailCart;

const styles = StyleSheet.create({
  dateMonth: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    marginTop: SIZES.height * 0.01,
    marginBottom: SIZES.height * -0.01,
    color: COLORS.gray60,
  },
  leavebox: {
    width: SIZES.width * 0.92,
    height: SIZES.height * 0.1,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    padding: SIZES.width * 0.02,
    elevation: 1,
    marginVertical: SIZES.height * 0.01,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  containBox: {
    width: SIZES.width * 0.67,
  },
  title: {
    fontSize: 13,
    ...FONTS.fiveHundred,
    color: COLORS.black,
  },
  day: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: COLORS.lightblue,
  },
  reason: {
    color: '#02819F',
    fontSize: 13,
    ...FONTS.fiveHundred,
  },
  statusbox: {
    backgroundColor: '#D2FAEF',
    height: SIZES.height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.2,
    borderRadius: 6,
  },
  status: {
    color: '#3A987F',
    fontSize: 11,
    ...FONTS.fiveHundred,
    marginBottom: -2,
  },
});
