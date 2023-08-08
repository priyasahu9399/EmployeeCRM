import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants';

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: SIZES.width * 0.92,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.height * 0.02,
    marginBottom: SIZES.height * 0.01,
    alignSelf: 'center',
  },
  heading: {
    ...FONTS.fiveHundred,
    fontSize: 15,
    color: COLORS.black,
    width: SIZES.width * 0.6,
  },
  switchText: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    color: COLORS.black,
    marginBottom: -2,
  },
  switchbox: {
    borderRadius: 8,
    width: SIZES.width * 0.22,
    height: SIZES.height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowswitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderColor: COLORS.gray10,
    backgroundColor: '#F7F7F7',
    height: SIZES.height * 0.062,
    borderRadius: 8,
    marginVertical: SIZES.height * 0.025,
  },
  btnStyle: {
    backgroundColor: COLORS.white,
    elevation: 1,
    height: SIZES.height * 0.05,
  },
});
