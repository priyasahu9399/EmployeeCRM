import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {TextInput} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const PaperInput = ({
  label,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  editable,
  onBlur,
  onFocus,
  secureTextEntry,
  onPress,
  icon
}) => {

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        mode="outlined"
        outlineStyle={{borderWidth: 1}}
        textColor={COLORS.black}
        placeholderTextColor={COLORS.gray50}
        outlineColor={COLORS.gray30}
        activeOutlineColor={COLORS.primary}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        onFocus={onFocus}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
        style={styles.textinput}
      />
      <TouchableOpacity onPress={onPress} style={styles.iconBox}>
        <Image source={icon} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  send: {
    width: width * 0.056,
    height: height * 0.028,
    resizeMode: 'contain',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  textinput: {
    ...FONTS.fiveHundred,
    fontSize: 13,
  },
});
export default PaperInput;
