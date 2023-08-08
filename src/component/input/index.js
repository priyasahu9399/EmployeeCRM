import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {COLORS, SIZES, FONTS} from './../../constants/theme';
import {icons, images} from './../../constants';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';

export const InputText = ({
  inputStyle,
  label,
  placeholder,
  maxLength,
  onChangeText,
  value,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  icon,
  inputboxStyle,
  editable,
  // showDate,
}) => {
  // const [date, setDate] = useState();
  // const [open, setOpen] = useState(true);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input_box, inputboxStyle]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray30}
          style={[styles.input, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
        />
        {icon && (
          <View style={styles.iconStyleBox}>
            <Image source={icon} style={styles.iconStyle} />
          </View>
        )}
      </View>
      {/* {showDate && (
        <DatePicker
          modal
          title="Select date"
          mode="date"
          open={showDate}
          date={new Date()}
          onConfirm={d => {
            setOpen(true);
            setDate(formattedDateServer(d));
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme="light"
          textColor={COLORS.black}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input_box: {
    borderRadius: 8,
    marginBottom: SIZES.height * 0.022,
    borderWidth: 1,
    borderColor: '#D4D4D47D',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.92,
  },
  label: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    width: SIZES.width * 0.92,
  },
  input: {
    fontSize: 13,
    ...FONTS.fiveHundred,
    color: COLORS.lightblue,
    marginBottom: -4,
    paddingLeft: SIZES.width * 0.03,
    width: SIZES.width * 0.8,
  },
  iconStyleBox: {
    backgroundColor: '#D4D4D47D',
    width: SIZES.width * 0.08,
    height: SIZES.width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  iconStyle: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.02,
    resizeMode: 'contain',
  },
});
