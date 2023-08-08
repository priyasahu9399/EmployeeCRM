import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {COLORS, SIZES, FONTS} from './../../constants';

const WorkTrakCart = ({
  navigation,
  onPress,
  projectname,
  Assigned,
  report,
  status,
}) => {
  return (
    <View style={styles.headRow}>
      <Text style={styles.Listheading}>{projectname}</Text>
      <Text style={styles.Listheading}>{Assigned}</Text>
      <Text style={styles.Listheading}>{report}</Text>
      <TouchableOpacity onPress={onPress} style={styles.eyeBox}>
        <Image source={icons.eye} style={styles.eye} />
      </TouchableOpacity>
      {status && (
        <View
          style={[
            styles.statusbox,
            status === 'In-progress' && {backgroundColor: '#FFE99C'},
          ]}>
          <Text
            style={[
              styles.status,
              status === 'In-progress' && {color: '#FAAA35'},
            ]}>
            {status}
          </Text>
        </View>
      )}
    </View>
  );
};

export default WorkTrakCart;

const styles = StyleSheet.create({
  headRow: {
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    paddingVertical: SIZES.width * 0.03,
    marginVertical: SIZES.height * 0.008,
    alignItems: 'center',
  },
  Listheading: {
    ...FONTS.sixHundred,
    fontSize: 11,
    color: COLORS.black,
    width: SIZES.width * 0.21,
    textAlign: 'center',
    padding: SIZES.width * 0.002,
    lineHeight: 13,
  },
  eyeBox: {
    width: SIZES.width * 0.07,
    height: SIZES.height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.032,
    resizeMode: 'stretch',
  },
  statusbox: {
    backgroundColor: '#D2FAEF',
    height: SIZES.height * 0.032,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.19,
    borderRadius: 6,
    elevation: 1,
  },
  status: {
    color: '#3A987F',
    fontSize: 10,
    ...FONTS.fiveHundred,
    marginBottom: -2,
  },
});
