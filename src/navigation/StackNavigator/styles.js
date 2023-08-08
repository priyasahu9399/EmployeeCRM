import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  headerProfileStyle: {
    height: SIZES.height * 0.04,
    backgroundColor: COLORS.primary,
    elevation: 0,
  },
  headerstyle: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
