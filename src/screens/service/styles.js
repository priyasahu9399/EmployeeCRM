import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

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
  moreservice: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
