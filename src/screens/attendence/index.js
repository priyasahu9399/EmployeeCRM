import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {icons, images} from '../../constants';
import styles from './styles';
import {COLORS, SIZES} from './../../constants';
import {InputText} from './../../component/input/index';
import {GrayButton} from './../../component/Button/index';
import AttendenceTrack from './../attendenceTrack/index';
import CalenderHorizontal from './../../component/calenderHorizontalStrip/index';

const Attendence = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <CalenderHorizontal />
        <View >
          <InputText
            label="Date/day"
            placeholder="dd/mm"
            inputboxStyle={styles.inputboxStyle}
          />
          <InputText
            label="Check in time"
            placeholder="Check time"
            inputboxStyle={styles.inputboxStyle}
          />
          <InputText
            label="Checkout time"
            placeholder="Checkout time"
            inputboxStyle={styles.inputboxStyle}
          />
          <InputText
            label="Total Work duration"
            placeholder="Work duration"
            inputboxStyle={styles.inputboxStyle}
          />

          <View style={styles.btnRow}>
            <GrayButton children="Cancel" />
            <GrayButton
              children="Apply"
              buttonStyle={styles.btnStyle}
              btnText={{color: COLORS.white}}
              onPress={() => navigation.navigate('AttendenceTrack')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Attendence;
