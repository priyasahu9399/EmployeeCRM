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
import {data} from '../../constants';
import {COLORS, FONTS, SIZES} from './../../constants';
import CircularProgressComponent from './../../component/circularProgress/index';
import DateBoxcart from './../../component/carts/datebox';
import CheckInOutCart from './../../component/carts/checkInOutCart';
import {GrayButton} from './../../component/Button/index';
import StepIndicator from 'react-native-step-indicator';
import RnRangeSlider from './../../component/RangeSliderRn/index';

const StepLabels = ({name, hrs}) => {
  return (
    <View style={styles.stepLabelBox}>
      <Text style={styles.steplabel}>{name}</Text>
      <View style={styles.stepRow}>
        <Image source={icons.time} style={styles.timeIcon} />
        <Text style={styles.hrs}>{hrs}</Text>
      </View>
    </View>
  );
};

const AttendenceTrack = () => {
  const [active, setActive] = useState(0);
  const labelList = [
    {id: 0, name: 'Total Day', hrs: '19:00Hrs'},
    {id: 1, name: 'Total Day', hrs: '22:00Hrs'},
    {id: 2, name: 'Total Day', hrs: '22:00Hrs'},
    {id: 3, name: 'Total Day', hrs: '22:00Hrs'},
  ];
  const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 15,
    separatorStrokeWidth: 2,
    stepStrokeCurrentColor: COLORS.primary,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: COLORS.primary,
    stepStrokeUnFinishedColor: COLORS.primary,
    stepIndicatorCurrentColor: COLORS.primary,
    separatorFinishedColor: COLORS.primary,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: COLORS.primary,
    stepIndicatorUnFinishedColor: '#9B9B9B',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: COLORS.primary,
    stepIndicatorLabelFinishedColor: COLORS.primary,
    stepIndicatorLabelUnFinishedColor: '#9B9B9B',
    labelColor: '#9B9B9B',
    labelSize: 12,
    labelAlign: 'flex-start',
    labelFontFamily: 'Poppins-SemiBold-600',
    currentStepLabelColor: COLORS.primary,
  };

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={styles.mainHeadBox}>
          <Text style={styles.Overview}>Overview</Text>
          <View style={{alignSelf: 'center'}}>
            <CircularProgressComponent
              value={'65'}
              radius={60}
              duration={1000}
              showProgressValue={true}
              valueSuffix="%"
              progressValueStyle={{
                ...FONTS.fiveHundred,
                fontSize: 19,
                color: COLORS.primary,
              }}
              title=" Attendence"
              titleStyle={{
                ...FONTS.fourHundred,
                fontSize: 12,
                color: COLORS.black,
                marginTop: -3,
              }}
              onAnimationComplete={() => console.log('Animation completed')}
              circleBackgroundColor={'#F5F5F5'}
              activeStrokeColor={'#3AC9A6'}
              activeStrokeSecondaryColor={'#CDFFEF'}
              inActiveStrokeColor={'#FD8181'}
              activeStrokeWidth={SIZES.width * 0.03}
              inActiveStrokeWidth={SIZES.width * 0.03}
            />
          </View>
          <View style={styles.rowDot}>
            <View style={styles.rowDot}>
              <View style={[styles.Dot, {backgroundColor: '#46C263'}]}></View>
              <Text style={styles.DotText}>Present days </Text>
            </View>
            <View style={styles.rowDot}>
              <View style={styles.Dot}></View>
              <Text style={styles.DotText}>Absent days </Text>
            </View>
          </View>
          <View style={styles.rownumber}>
            <Text style={styles.number}>25</Text>
            <Text style={styles.number}>25</Text>
          </View>
        </View>
        <View>
          <View style={styles.flexRowswitch}>
            <Text style={[styles.switchText, {width: SIZES.width * 0.15}]}>
              Day
            </Text>
            <Text style={[styles.switchText, {color: '#3A987F'}]}>
              Check in
            </Text>
            <Text style={[styles.switchText, {color: '#EA462F'}]}>
              Check out
            </Text>
            <Text style={styles.switchText}>Total hour</Text>
          </View>

          {data.CheckInOutCartList.map((item, index) => (
            <CheckInOutCart
              date={item.date}
              day={item.day}
              checkin={item.checkin}
              checkout={item.checkout}
              value={item.value}
              title={item.title}
            />
          ))}
          <GrayButton
            children="Days"
            buttonStyle={styles.btnStyle}
            btnText={{color: COLORS.white}}
          />

          <View style={styles.StepIndicatorBox}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={2}
              labels={[
                <View>
                  {labelList.map((item, index) => (
                    <StepLabels name={item.name} hrs={item.hrs} />
                  ))}
                </View>,
              ]}
              // labels={labels2}
              stepCount={4}
              direction="vertical"></StepIndicator>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AttendenceTrack;
