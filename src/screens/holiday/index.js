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
import {data} from './../../constants';
import {COLORS} from './../../constants/theme';
import HolidayCart from "./../../component/carts/holiday";
import CalenderHorizontal from "./../../component/calenderHorizontalStrip/index";

const Holiday = ({navigation}) => {
  return (
    <ScrollView style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
      <View>
        <CalenderHorizontal/>
      </View>
        {data.HolidayCartList.map((item, index) => (
          <HolidayCart
            title={item.title}
            date={item.date}
            reson={item.reson}
            icon={item.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Holiday;
