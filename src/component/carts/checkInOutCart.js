import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';
import DateBoxcart from './datebox';
import CircularProgressComponent from './../circularProgress/index';
import RnRangeSlider from './../RangeSliderRn/index';

const CheckInOutCart = ({date, day, checkin, checkout, value, title}) => {
  return (
    <View style={styles.mainRowBox}>
      <DateBoxcart date={date} day={day} />
      <View style={styles.checkBox}>
        <View style={styles.rowCheck}>
          <View>
            <View style={styles.rowCheck}>
              <View style={styles.rowCheck}>
                <Image source={icons.uarrow} style={styles.arrow} />
                <Text style={styles.checkTime}>{checkin}</Text>
              </View>
              <View style={styles.rowCheck}>
                <Image
                  source={icons.darrow}
                  style={[styles.arrow, {tintColor: '#FE0000'}]}
                />
                <Text style={[styles.checkTime, {color: '#FE0000'}]}>
                  {checkout}
                </Text>
              </View>
            </View>
            <View style={styles.rowCheck}>
              <Text style={styles.onTime}>On Time</Text>
              <Text style={[styles.early, {color: '#6052D2'}]}>Early</Text>
            </View>

            <RnRangeSlider />
          </View>
          <CircularProgressComponent
            value={value}
            radius={30}
            duration={1000}
            showProgressValue={true}
            progressValueStyle={{
              ...FONTS.fiveHundred,
              fontSize: 13,
              color: COLORS.black,
              marginBottom: SIZES.height * -0.01,
            }}
            title={title}
            titleStyle={{
              ...FONTS.fourHundred,
              fontSize: 11,
              color: COLORS.black,
              marginTop: -3,
            }}
            // onAnimationComplete={() => console.log('Animation completed')}
            circleBackgroundColor={'#F5F5F5'}
            activeStrokeColor={'#3AC9A6'}
            activeStrokeSecondaryColor={'#CDFFEF'}
            inActiveStrokeColor={COLORS.gray10}
            activeStrokeWidth={SIZES.width * 0.02}
            inActiveStrokeWidth={SIZES.width * 0.02}
          />
        </View>
      </View>
    </View>
  );
};

export default CheckInOutCart;
const styles = StyleSheet.create({
  checkBox: {
    width: SIZES.width * 0.78,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    elevation: 1,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    marginLeft: SIZES.width * 0.02,
    padding: SIZES.width * 0.03,
  },
  mainRowBox: {
    flexDirection: 'row',
    marginVertical: SIZES.height * 0.01,
    alignItems: 'center',
  },
  rowCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: SIZES.width * 0.03,
    height: SIZES.height * 0.02,
    tintColor: '#2CD889',
    resizeMode: 'contain',
    marginRight: SIZES.width * 0.01,
  },
  checkTime: {
    ...FONTS.fiveHundred,
    fontSize: 12,
    color: '#2CD889',
    width: SIZES.width * 0.23,
    marginBottom: -3,
  },
  onTime: {
    ...FONTS.fiveHundred,
    fontSize: 11,
    color: COLORS.black,
    width: SIZES.width * 0.23,
    textAlign: 'center',
  },
  early: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: COLORS.black,
    width: SIZES.width * 0.23,
    textAlign: 'center',
  },
});
