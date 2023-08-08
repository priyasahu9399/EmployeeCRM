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
    marginTop: SIZES.height * 0.01,
    alignSelf: 'center',
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.height * 0.025,
  },
  profileBox: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logo: {
    width: SIZES.width * 0.26,
    height: SIZES.height * 0.12,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  cameraBox: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.07,
    height: SIZES.height * 0.035,
    position: 'absolute',
    bottom: 3,
    right: 0,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: SIZES.width * 0.044,
    height: SIZES.height * 0.02,
    tintColor: '#FFC436',
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    ...FONTS.fiveHundred,
    marginTop: SIZES.height * 0.015,
    marginBottom: SIZES.height * 0.01,
  },
  email: {
    color: COLORS.white,
    fontSize: 14,
    ...FONTS.fiveHundred,
    marginBottom: SIZES.height * 0.03,
  },
  titleEdit: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 16,
    marginBottom: -3,
    borderBottomWidth: 1,
    borderColor: '#FFC436',
  },
  editBox: {
    backgroundColor: COLORS.gray10,
    width: SIZES.width * 0.084,
    height: SIZES.height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: SIZES.width * 0.02,
  },
  edit: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.024,
    resizeMode: 'stretch',
  },
  btnStyle: {
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.03,
    height: SIZES.height * 0.055,
  },
});
