import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants';

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: SIZES.width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  banner: {
    width: SIZES.width * 0.92,
    height: SIZES.height * 0.25,
    marginBottom: SIZES.height * 0.02,
    alignSelf: 'center',
    borderRadius: 10,
  },
  letsplay: {
    ...FONTS.fiveHundred,
    fontSize: 15,
    color: COLORS.black,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderColor: COLORS.gray10,
    backgroundColor: '#F7F7F7',
    height: SIZES.height * 0.062,
    borderRadius: 8,
    marginVertical: SIZES.height * 0.025,
    alignSelf: 'center',
    width: SIZES.width * 0.93,
  },
  switchText: {
    ...FONTS.fiveHundred,
    fontSize: 14,
    color: COLORS.black,
  },
  switchbox: {
    borderRadius: 8,
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_Box: {
    width: SIZES.width * 0.9,
    borderRadius: 8,
    backgroundColor: COLORS.gray10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: SIZES.width * 0.1,
  },
  gifBox: {
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.03,
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.48,
    height: SIZES.height * 0.22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.2,
    resizeMode: 'contain',
  },
  allowAccess: {
    fontSize: 16,
    ...FONTS.fiveHundred,
    color: '#03A65B',
    marginVertical: SIZES.height * 0.01,
    textAlign: 'center',
  },
});
