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
import {data} from './../../constants';
import {COLORS, FONTS, SIZES} from './../../constants';
import ViewWorkTrack from './../ViewWorktrack/index';
import WorkTrakCart from './../../component/carts/workTrackCart';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';
import CircularProgressComponent from './../../component/circularProgress/index';

const WorkTrack = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={styles.mainHeadBox}>
          <View style={styles.headRow}>
            <Text style={styles.heading}>Project name</Text>
            <Text style={styles.heading}>Assigned by</Text>
            <Text style={styles.heading}>Report to</Text>
            <Text style={[styles.heading, {width: SIZES.width * 0.1}]}>
              View
            </Text>
            <Text style={styles.heading}>Status</Text>
          </View>
          {data.WorkTrakCartList.map((item, index) => (
            <WorkTrakCart
              projectname={item.projectname}
              Assigned={item.Assigned}
              report={item.report}
              status={item.status}
              onPress={() => navigation.navigate('ViewWorkTrack')}
            />
          ))}
        </View>
        <View style={[styles.mainHeadBox, {padding: SIZES.height * 0.03}]}>
          <Text style={styles.blueText}>Performance track</Text>

          <View style={{alignSelf: 'center', marginTop: SIZES.height * 0.03}}>
            <CircularProgressBase
              value={50}
              radius={95}
              duration={1000}
              showProgressValue={true}
              activeStrokeWidth={SIZES.width * 0.035}
              activeStrokeColor={'#FE4662'}
              inActiveStrokeColor={'#F7F7F7'}>
              <CircularProgressBase
                value={75}
                radius={75}
                duration={1000}
                showProgressValue={true}
                activeStrokeWidth={SIZES.width * 0.04}
                activeStrokeColor={'#24C17C'}
                inActiveStrokeColor={'#F7F7F7'}>
                <CircularProgressComponent
                  value={'70'}
                  radius={50}
                  duration={1000}
                  showProgressValue={true}
                  progressValueStyle={{
                    ...FONTS.fiveHundred,
                    fontSize: 15,
                    color: COLORS.primary,
                    marginBottom: -5,
                  }}
                  valueSuffix={'%'}
                  title="Performance"
                  titleStyle={{
                    color: COLORS.primary,
                    ...FONTS.sixHundred,
                    fontSize: 10,
                  }}
                  onAnimationComplete={() => console.log('Animation completed')}
                  circleBackgroundColor={'#F5F5F5'}
                  activeStrokeColor={'#2AE8FF'}
                  inActiveStrokeColor={'#F7F7F7'}
                  activeStrokeWidth={'8'}
                  inActiveStrokeWidth={'6'}
                />
              </CircularProgressBase>
            </CircularProgressBase>
          </View>
          <View style={styles.rowDot}>
            <View style={styles.rowDot}>
              <View style={[styles.Dot, {backgroundColor: '#2AE8FF'}]}></View>
              <Text style={styles.DotText}>Assigned</Text>
            </View>
            <View style={styles.rowDot}>
              <View style={[styles.Dot, {backgroundColor: '#24C17C'}]}></View>
              <Text style={styles.DotText}>Completed </Text>
            </View>
            <View style={styles.rowDot}>
              <View style={styles.Dot}></View>
              <Text style={styles.DotText}>Remaining</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkTrack;
