import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants';

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: SIZES.width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  mainHeadBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    width: SIZES.width * 0.94,
    alignSelf: 'center',
    padding: SIZES.width * 0.015,
    marginVertical: SIZES.height * 0.02,
  },
  headRow: {
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    paddingVertical: SIZES.width * 0.02,
    justifyContent: 'center',
    marginVertical: SIZES.height * 0.01,
  },
  heading: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
    width: SIZES.width * 0.2,
    textAlign: 'center',
  },
  blueText: {
    ...FONTS.sevenHundred,
    fontSize: 16,
    color: COLORS.primary,
  },
  rowDot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * 0.02,
  },
  Dot: {
    backgroundColor: '#FE4662',
    width: SIZES.width * 0.026,
    height: SIZES.height * 0.012,
    borderRadius: 10,
    marginRight: SIZES.width * 0.01,
  },
  DotText:{
    ...FONTS.fourHundred,
    fontSize:12,
    color:COLORS.black,
    marginBottom:-2
  }
});
