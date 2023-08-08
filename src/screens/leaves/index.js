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
import {GrayButton} from './../../component/Button';
import LeaveDetailCart from './../../component/carts/leaveDetailcart';
import LeaveCarts from './../../component/carts/leaveCarts';
import DropdownYear from './../../component/dropdown/index';
import ApplyLeave from './../leaveApply/index';

const Leaves = ({navigation}) => {
  const [active, setActive] = useState(0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View style={styles.row}>
          <Text style={styles.heading}>Leave Balance</Text>
          <GrayButton
            children="Apply"
            buttonStyle={styles.btnStyle}
            onPress={() => navigation.navigate('ApplyLeave')}
          />
        </View>
        <View style={styles.row}>
          <LeaveCarts
            background="#917FF4"
            dateColor="#917FF4"
            titlecolor={COLORS.white}
            date="02"
            title="Sick Leave"
          />
          <LeaveCarts
            background="#FFDC8A"
            dateColor="#FFC436"
            titlecolor={COLORS.black}
            date="02"
            title="Earned leave"
          />
          <LeaveCarts
            background="#9FDFCE"
            dateColor="#3A987F"
            titlecolor={COLORS.white}
            date="02"
            title="Casual leave"
          />
        </View>

        <View style={styles.row}>
          <LeaveCarts
            dateColor="#354692"
            titlecolor="#354692"
            date="71"
            title="Planned"
            dateboxbgColor="#EDEBFF"
          />
          <LeaveCarts
            dateColor="#FF8900"
            titlecolor="#FF8900"
            date="02"
            title="Pending"
            dateboxbgColor="#FFEBD5"
          />
          <LeaveCarts
            dateColor="#3A987F"
            titlecolor="#3A987F"
            date="01"
            title="Approved"
            dateboxbgColor="#E8FFEE"
          />
        </View>
        <View style={[styles.row, {alignSelf: 'flex-end'}]}>
          <DropdownYear
            data={data.yearList}
            placeholder="Year"
            dropdownStyle={{marginRight: SIZES.width * 0.02}}
          />
          <DropdownYear
            data={data.SelectleaveList}
            placeholder="Select leave"
            dropdownStyle={{width: SIZES.width * 0.4}}
          />
        </View>
        <View style={styles.flexRowswitch}>
          <TouchableOpacity
            onPress={() => setActive(0)}
            style={[
              styles.switchbox,
              active === 0 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[
                styles.switchText,
                active === 0 && {color: COLORS.white},
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={[
              styles.switchbox,
              active === 1 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[
                styles.switchText,
                {color: '#3A987F'},
                active === 1 && {color: COLORS.white},
              ]}>
              Approved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(2)}
            style={[
              styles.switchbox,
              active === 2 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[
                styles.switchText,
                {color: '#F8B129'},
                active === 2 && {color: COLORS.white},
              ]}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(3)}
            style={[
              styles.switchbox,
              active === 3 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[
                styles.switchText,
                {color: '#EA462F'},
                active === 3 && {color: COLORS.white},
              ]}>
              Reject
            </Text>
          </TouchableOpacity>
        </View>
        {active === 0 && (
          <View>
            {data.LeaveDetailCartList.map((item, index) => (
              <LeaveDetailCart
                title={item.title}
                date={item.date}
                status={item.status}
                reson={item.reson}
                dateMonth={item.dateMonth}
              />
            ))}
          </View>
        )}
        {active === 1 && (
          <View>
            {data.LeaveDetailCartList.map((item, index) => (
              <LeaveDetailCart
                title={item.title}
                date={item.date}
                status={item.status}
                reson={item.reson}
                dateMonth={item.dateMonth}
              />
            ))}
          </View>
        )}
        {active === 2 && (
          <View>
            {data.LeaveDetailCartList.map((item, index) => (
              <LeaveDetailCart
                title={item.title}
                date={item.date}
                status={item.status}
                reson={item.reson}
                dateMonth={item.dateMonth}
              />
            ))}
          </View>
        )}
        {active === 3 && (
          <View>
            {data.LeaveDetailCartList.map((item, index) => (
              <LeaveDetailCart
                title={item.title}
                date={item.date}
                status={item.status}
                reson={item.reson}
                dateMonth={item.dateMonth}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Leaves;
