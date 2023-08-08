import React, {useState, useRef, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {GrayButton} from './../Button/index';

const ModalComponent = ({
  navigation,
  title,
  icon,
  onPressonly,
  onPresswhile,
  onPressdeny,
}) => {
  return (
    <View style={styles.modal_Box}>
      <View style={styles.cameraiconBox}>
        <Image source={icon} style={styles.cameraicon} />
      </View>
      <Text style={styles.allowAccess}>{title}</Text>
      <GrayButton
        children="Only this time"
        btnText={{color: '#2E858A'}}
        buttonStyle={styles.modalbtn}
        onPress={onPressonly}
      />
      <GrayButton
        children="While using the app"
        buttonStyle={styles.modalbtn}
        btnText={{color: '#FF8900'}}
        onPress={onPresswhile}
      />
      <GrayButton
        children="Deny"
        btnText={{color: '#FF7D7D'}}
        buttonStyle={styles.modalbtn}
        onPress={onPressdeny}
      />
    </View>
  );
};

export default ModalComponent;
const styles = StyleSheet.create({
  modal_Box: {
    width: SIZES.width * 0.9,
    borderRadius: 8,
    backgroundColor: '#F8F5F5',
    padding: SIZES.width * 0.05,
    alignSelf: 'center',
    alignItems: 'center',
  },
  cameraiconBox: {
    width: SIZES.width * 0.09,
    height: SIZES.width * 0.09,
    backgroundColor: COLORS.white,
    elevation: 3,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.height * 0.02,
  },
  cameraicon: {
    width: SIZES.width * 0.05,
    height: SIZES.width * 0.06,
    resizeMode: 'contain',
  },
  allowAccess: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginVertical: SIZES.height * 0.025,
  },
  modalbtn: {
    width: SIZES.width * 0.8,
    marginVertical: SIZES.height * 0.01,
  },
});
