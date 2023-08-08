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
  CheckRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    color: COLORS.primary,
    ...FONTS.fiveHundred,
    marginBottom: -1,
    fontSize: 12,
    marginLeft: SIZES.width * 0.02,
  },
  commentBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.gray20,
    padding: SIZES.width * 0.03,
    marginVertical: SIZES.height * 0.02,
  },
});
