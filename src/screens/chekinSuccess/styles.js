import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: width * 0.92,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  time: {
    ...FONTS.fourHundred,
    fontSize: 12,
    color: COLORS.gray50,
    marginLeft: SIZES.width * 0.008,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sucess: {
    color: '#14BE88',
    ...FONTS.sixHundred,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.06,
  },
  gifBox: {
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.1,
  },
  gif: {
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.25,
    resizeMode: 'cover',
  },
});
