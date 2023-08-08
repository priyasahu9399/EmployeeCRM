import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import {icons, images} from './../../constants';

export const GrayButton = ({
  children,
  btnText,
  buttonStyle,
  navigation,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.btn_text, btnText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export const BorderButton = ({
  children,
  btnText,
  buttonStyle,
  navigation,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.borderbutton, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.border_text, btnText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  btn_text: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    color: COLORS.lightblue,
    marginBottom: -2,
  },
  // --------------------------
  linearGradient: {},
  borderbutton: {
    backgroundColor: COLORS.white,
    borderRadius: 6,
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF6F6F',
    borderWidth: 0.6,
    elevation: 2,
    marginVertical: SIZES.height * 0.01,
  },
  border_text: {
    color: '#FF6767',
    ...FONTS.sixHundred,
    fontSize: 14,
    marginBottom: -2,
  },
});
