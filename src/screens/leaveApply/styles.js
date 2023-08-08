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
  marginTop: {
    alignSelf: 'center',
    marginTop: SIZES.height * 0.015,
  },
  flexBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: SIZES.height * 0.04,
  },
  flexrowRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderColor: COLORS.gray10,
    height: SIZES.height * 0.06,
    borderRadius: 6,
    paddingLeft: SIZES.width * 0.04,
    marginBottom:SIZES.height * 0.02
  },
  label: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    width: SIZES.width * 0.92,
  },
  radio_BtnBox: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.05,
    height: SIZES.width * 0.05,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  radio_Btn: {
    backgroundColor: '#FFC436',
    width: SIZES.width * 0.03,
    height: SIZES.width * 0.03,
    borderRadius: 30,
  },
  radio_text: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.primary,
    marginBottom: -2,
    marginLeft: SIZES.width * 0.025,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
