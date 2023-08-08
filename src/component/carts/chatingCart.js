import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const ChatingCart = ({boxStyle, image, content, direction}) => {
  return (
    <View
      style={[
        styles.box,
        boxStyle,
        {alignSelf: direction == 'left' ? 'flex-start' : 'flex-end'},
        {backgroundColor: direction == 'left' ? '#DBE0E882' : COLORS.primary},
      ]}>
      <Image source={image} style={styles.image} />
      <Text
        style={[
          styles.content,
          {color: direction == 'left' ? COLORS.black : COLORS.white},
        ]}>
        {content}
      </Text>
    </View>
  );
};

export default ChatingCart;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: SIZES.width * 0.02,
    width: SIZES.width * 0.68,
    marginVertical: SIZES.width * 0.02,
  },
  image: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    borderRadius: 30,
    resizeMode: 'contain',
    backgroundColor: COLORS.white,
  },
  content: {
    ...FONTS.fiveHundred,
    fontSize: 11,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.5,
  },
});
