import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const MoreService = ({icon, title, onPress, navigation}) => {
  return (
    <View style={{width: SIZES.width * 0.46}}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.imageBox}>
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MoreService;

const styles = StyleSheet.create({
  imageBox: {
    width: SIZES.width * 0.22,
    height: SIZES.height * 0.1,
    elevation: 3,
    borderRadius: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightgray,
    marginTop: SIZES.height * 0.06,
 
  },
  image: {
    width: SIZES.width * 0.08,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
  title: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: SIZES.height * 0.005,
  },
});
