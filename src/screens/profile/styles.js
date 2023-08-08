import {StyleSheet} from 'react-native';
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

  profileBox: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: SIZES.height * 0.15,
  },
  profileheadBox: {
    height: SIZES.height * 0.35,
  },
  logo: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.14,
    borderRadius: 60,
    resizeMode: 'contain',
    marginTop: SIZES.height * 0.07,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  camera: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 7,
    right: 10,
    zIndex: 1,
  },
  imageBox: {
    elevation: 3,
  },
  title: {
    color: COLORS.primary,
    fontSize: 16,
    ...FONTS.sixHundred,
    marginTop: SIZES.height * 0.03,
  },
  email: {
    color: COLORS.primary,
    fontSize: 14,
    ...FONTS.fiveHundred,
  },
  profileText: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 14,
    elevation: 1,
    padding: SIZES.width * 0.03,
    borderRadius: 6,
    marginVertical: SIZES.height * 0.014,
    backgroundColor:COLORS.white,
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray10,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.08,
  },
  logout: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.016,
    resizeMode: 'contain',
  },
  logoutBox: {
    width: SIZES.width * 0.07,
    height: SIZES.height * 0.032,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginRight: SIZES.width * 0.025,
  },
  btn_text: {
    ...FONTS.sixHundred,
    fontSize: 13,
    color: COLORS.lightblue,
    marginBottom: -2,
  },
});
