import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS, SIZES} from './../../constants/theme';

const DropdownYear = ({data, placeholder, dropdownStyle, containStyle}) => {
  const [value, setValue] = useState(null);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        containerStyle={[styles.containerStyle, containStyle]}
        placeholderStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default DropdownYear;

const styles = StyleSheet.create({
  dropdown: {
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.25,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    paddingHorizontal: SIZES.width * 0.03,
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  selectedTextStyle: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.fiveHundred,
  },
  iconStyle: {
    tintColor: COLORS.black,
    height: SIZES.height * 0.03,
  },
  containerStyle: {
    marginTop: SIZES.height * -0.03,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
  },
  itemTextStyle: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.fiveHundred,
    margin: SIZES.height * -0.01,
  },

  placeholderStyle: {
    fontSize: 13,
    color: COLORS.black,
    ...FONTS.fourHundred,
  },
});
