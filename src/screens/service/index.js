import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {icons, images} from '../../constants';
import styles from './styles';
import {COLORS} from './../../constants/theme';
import MoreService from './../../component/carts/moreservice';
import Events from './../events/index';
import Holiday from './../holiday/index';
import Leaves from './../leaves/index';
import Attendence from './../attendence/index';
import WorkTrack from './../workTrack/index';

const {width, height} = Dimensions.get('window');
const Service = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View style={styles.moreservice}>
          <MoreService
            icon={icons.event}
            title="Event"
            onPress={() => navigation.navigate('Events')}
          />
          <MoreService
            icon={icons.holiday}
            title="Holiday"
            onPress={() => navigation.navigate('Holiday')}
          />
          <MoreService
            icon={icons.leave}
            title="Leave"
            onPress={() => navigation.navigate('Leaves')}
          />
          <MoreService
            icon={icons.attendence}
            title="Attendance"
            onPress={() => navigation.navigate('Attendence')}
          />
          <MoreService
            icon={icons.trackwork}
            title="Work Tracker"
            onPress={() => navigation.navigate('WorkTrack')}
          />
        </View>
      </View>
    </View>
  );
};

export default Service;
