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
import {COLORS, SIZES, FONTS} from './../../constants/theme';
import {data} from './../../constants';
import {GrayButton, BorderButton} from './../../component/Button/index';
import {
  HomeHolidayViewAllCart,
  ImageTitleView,
} from './../../component/carts/homeholidayViewAllCart';
import {CalenderList, AgendaCalender} from './../../component/calender/index';
import CheckOutSuccess from './../chekOutSuccess/index';
import CircularProgressComponent from './../../component/circularProgress/index';
import Modal from 'react-native-modal';
import CalenderHorizontal from './../../component/calenderHorizontalStrip/index';

const Overview = ({date, title, onPress, navigation}) => {
  return (
    <View style={styles.overViewBox}>
      <View style={styles.dateBox}>
        <Text
          style={[
            styles.date,
            title === 'Present' && {color: '#3A987F'},
            title === 'Absent' && {color: '#FF3737'},
          ]}>
          {date}
        </Text>
      </View>

      <Text
        style={[
          styles.title,
          title === 'Present' && {color: '#3A987F'},
          title === 'Absent' && {color: '#FF3737'},
        ]}>
        {title}
      </Text>
    </View>
  );
};

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <CalenderHorizontal />
        <View style={[styles.leavebox, {paddingVertical: SIZES.height * 0.02}]}>
          <View style={[styles.flexRow, {justifyContent: 'space-around'}]}>
            <View>
              <Text style={styles.hour}>Working hours</Text>
              <Text style={styles.dateTimeBlue}>08 hrs 6 min</Text>
            </View>

            <CircularProgressComponent
              value={'75'}
              radius={40}
              duration={1000}
              showProgressValue={true}
              progressValueStyle={{
                ...FONTS.fiveHundred,
                fontSize: 16,
                color: COLORS.black,
              }}
              onAnimationComplete={() => console.log('Animation completed')}
              circleBackgroundColor={'#F5F5F5'}
              activeStrokeColor={'#CDFFEF'}
              activeStrokeSecondaryColor={'#3AC9A6'}
              inActiveStrokeColor={COLORS.gray10}
              activeStrokeWidth={'8'}
              inActiveStrokeWidth={'6'}
            />
          </View>
          <BorderButton
            children="Check out"
            buttonStyle={{
              alignSelf: 'center',
              marginTop: SIZES.height * 0.04,
            }}
            onPress={() => setModalVisible(true)}
          />
        </View>
        {/* modal */}
        <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
          <View style={styles.modal_Box}>
            <Text style={styles.Modal_checkout}>
              Are You Sure you want to Check-Out?
            </Text>
            <Text style={styles.modalTime}>08 hrs 6 min</Text>
            <View style={styles.statusbox}>
              <Text style={styles.status}>Delay</Text>
            </View>
            <Text style={styles.modalShift}>
              Shifting Hours: 10:00 AM- 07:30 PM
            </Text>
            <View style={styles.flexRow}>
              <BorderButton
                children="cancel"
                buttonStyle={{
                  borderColor: COLORS.primary,
                  marginRight: SIZES.width * 0.04,
                }}
                btnText={{color: COLORS.primary}}
                onPress={() => setModalVisible(false)}
              />
              <BorderButton
                children="Yes"
                buttonStyle={{backgroundColor: '#FFF6F6'}}
                onPress={() => {
                  setModalVisible(false),
                    navigation.navigate('CheckOutSuccess');
                }}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.leavebox}>
          <ImageTitleView
            icons={icons.plan}
            view="View All"
            heading="Upcoming holidays"
          />
          {data.HomeHolidayViewAllCartList.map((item, index) => (
            <HomeHolidayViewAllCart
              day={item.day}
              reson={item.reson}
              date={item.date}
            />
          ))}
        </View>
        <View style={styles.leavebox}>
          <ImageTitleView
            icons={icons.plan}
            view="View All"
            heading="Planned Holiday"
          />
          {data.HomeHolidayViewAllCartList.map((item, index) => (
            <HomeHolidayViewAllCart
              day={item.day}
              reson={item.reson}
              date={item.date}
            />
          ))}
        </View>
        <View style={styles.leavebox}>
          <ImageTitleView icons={icons.leave} heading="Overview" />
          <View style={styles.flexRow}>
            {data.OverviewDate.map((item, index) => (
              <Overview date={item.date} title={item.title} />
            ))}
          </View>
          <CalenderList />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
