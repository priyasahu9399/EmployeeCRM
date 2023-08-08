import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {icons, images} from '../../constants';
import styles from './styles';
import {COLORS, FONTS, SIZES} from './../../constants';

const {width, height} = Dimensions.get('window');
const CheckInSuccess = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <Text style={styles.sucess}>Checked-In Sucessfully</Text>

        <View style={styles.gifBox}>
          <Image source={images.gif} style={styles.gif} />
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.time}>Shift timing:</Text>
          <Text style={[styles.time, {marginBottom: -2}]}>
            10:00 AM- 08:00 PM
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckInSuccess;
