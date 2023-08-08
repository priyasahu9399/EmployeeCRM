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
  marginVertical: {
    marginVertical: SIZES.height * 0.05,
    alignSelf: 'center',
  },
  btnRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: SIZES.height * 0.03,
  },
  btnStyle: {
    backgroundColor: COLORS.primary,
    marginLeft: SIZES.width * 0.03,
  },
  inputboxStyle: {
    marginBottom: SIZES.height * 0.035,
  },
});
