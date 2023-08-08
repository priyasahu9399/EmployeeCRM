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
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.height * 0.1,
  },
  Handicon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.03,
    resizeMode: 'contain',
    marginHorizontal: SIZES.width * 0.015,
  },
  HandText: {
    ...FONTS.fourHundred,
    fontSize: 14,
    color: COLORS.black,
    marginBottom: -4,
  },
  name: {
    ...FONTS.sevenHundred,
    fontSize: 20,
    color: COLORS.primary,
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.01,
  },
  pencilText: {
    ...FONTS.sixHundred,
    fontSize: 15,
    color: COLORS.black,
    marginBottom: -5,
  },
  imgBox: {
    width: SIZES.width * 0.54,
    height: SIZES.height * 0.25,
    borderWidth: 1,
    borderColor: '#56B496',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: SIZES.height * 0.05,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    elevation: 3,
  },
  personImg: {
    width: SIZES.width * 0.34,
    height: SIZES.height * 0.12,
    resizeMode: 'contain',
    marginTop: SIZES.height * 0.03,
  },
  checkin: {
    ...FONTS.sixHundred,
    fontSize: 12,
    color: COLORS.black,
    marginTop: SIZES.height * 0.01,
  },
  Shift: {
    ...FONTS.sixHundred,
    fontSize: 13,
    color: COLORS.gray70,
  },
  time: {
    ...FONTS.fiveHundred,
    fontSize: 12,
    color: COLORS.gray50,
    marginBottom: -2,
    marginLeft: SIZES.width * 0.008,
  },
 
});
