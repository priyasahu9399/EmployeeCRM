import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants';
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconbox: {
    elevation: 2,
    width: SIZES.width * 0.11,
    height: SIZES.height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: -3,
  },
  icon_set: {
    width: SIZES.width * 0.044,
    height: SIZES.height * 0.03,
    resizeMode: 'contain',
  },
  tableBar: {
    height: SIZES.height * 0.09,
    paddingBottom: SIZES.height * 0.003,
  },
  tablebal: {
    ...FONTS.fiveHundred,
    fontSize: 12,
    color: COLORS.gray,
  },
  headerstyle: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bell: {
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.1,
    resizeMode: 'contain',
  },
  logo: {
    width: SIZES.width * 0.14,
    height: SIZES.height * 0.068,
    resizeMode: 'stretch',
    borderRadius: 30,
  },
  logoBox: {
    width: SIZES.width * 0.14,
    height: SIZES.height * 0.068,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    marginLeft: SIZES.width * 0.03,
  },
  title: {
    ...FONTS.sixHundred,
    color: COLORS.white,
    fontSize: 14,
    marginBottom: -4,
  },
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.white,
    fontSize: 18,
  },
});
