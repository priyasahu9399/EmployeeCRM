import React from 'react';
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
import {COLORS, SIZES} from './../../constants/theme';
import CheckInSuccess from './../chekinSuccess/index';

const CheckIn = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View style={styles.flexRow}>
          <Image source={icons.hand} style={styles.Handicon} />
          <Text style={styles.HandText}>Hey</Text>
        </View>
        <Text style={styles.name}>Sai,</Text>
        <View style={[styles.flexRow, {marginTop: SIZES.height * 0.02}]}>
          <Text style={styles.pencilText}>Let’s start the work</Text>
          <Image source={icons.writehand} style={styles.Handicon} />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('CheckInSuccess')}
          style={styles.imgBox}>
          <Image source={images.img1} style={styles.personImg} />
          <Text style={styles.checkin}>Tap here to CHECK-IN</Text>
        </TouchableOpacity>

        <View style={[styles.flexRow, {marginTop: SIZES.height * 0.01}]}>
          <Text style={styles.Shift}>Shift timing:</Text>
          <Text style={styles.time}>10:00 AM- 08:00 PM</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckIn;
