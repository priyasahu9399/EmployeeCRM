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
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';
import LeaveSuccess from './../leaveSuccess/index';

const ApplyLeave = ({navigation}) => {
  const [startdate, setstartdate] = useState();
  const [startOpen, setStartOpen] = useState(false);

  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={styles.marginTop}>
          <View style={styles.marginTop}>
            <Text style={styles.label}>Leave Type</Text>
            <View style={styles.flexrowRadio}>
              <TouchableOpacity onPress={() => setActive(1)} style={styles.row}>
                <View
                  style={[
                    styles.radio_BtnBox,
                    active === 1 && {
                      borderColor: '#FFC436',
                    },
                  ]}>
                  {active === 1 && <Text style={styles.radio_Btn}></Text>}
                </View>
                <Text style={styles.radio_text}>Fullday</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setActive(2)} style={styles.row}>
                <View
                  style={[
                    styles.radio_BtnBox,
                    {marginLeft: SIZES.width * 0.1},
                    active === 2 && {
                      borderColor: '#FFC436',
                    },
                  ]}>
                  {active === 2 && <Text style={styles.radio_Btn}></Text>}
                </View>
                <Text style={styles.radio_text}>Halfday</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.marginTop}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setStartOpen(true)}>
              <InputText
                label="Start date"
                placeholder="00/00/0000"
                icon={icons.plan}
                editable={false}
                value={startdate}
              />
            </TouchableOpacity>
            <DatePicker
              modal
              title="Select date"
              mode="date"
              open={startOpen}
              date={new Date()}
              onConfirm={d => {
                setStartOpen(false);
                setstartdate(formattedDateServer(d));
              }}
              onCancel={() => {
                setStartOpen(false);
              }}
              theme="light"
              textColor={COLORS.black}
            />
          </View>
          <View style={styles.marginTop}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setOpen(true)}>
              <InputText
                label="End date"
                placeholder="00/00/0000"
                icon={icons.plan}
                editable={false}
                value={date}
              />
            </TouchableOpacity>
            <DatePicker
              modal
              title="Select date"
              mode="date"
              open={open}
              date={new Date()}
              onConfirm={d => {
                setOpen(false);
                setDate(formattedDateServer(d));
              }}
              onCancel={() => {
                setOpen(false);
              }}
              theme="light"
              textColor={COLORS.black}
            />
          </View>

          <View style={styles.marginTop}>
            <InputText label="Leave Session" placeholder="Sick Leave" />
          </View>
          <View style={styles.flexBtn}>
            <GrayButton children="Cancel" />
            <GrayButton
              children="Apply"
              buttonStyle={{backgroundColor: COLORS.primary}}
              btnText={{color: COLORS.white}}
              onPress={() => navigation.navigate('LeaveSuccess')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ApplyLeave;

// import {StyleSheet} from 'react-native';
// import {COLORS, FONTS, SIZES} from './../../constants';

// export default StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   innercontainer: {
//     width: SIZES.width * 0.94,
//     alignSelf: 'center',
//     backgroundColor: COLORS.white,
//   },
//   marginTop: {
//     alignSelf: 'center',
//     marginTop: SIZES.height * 0.015,
//   },
//   flexBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     marginVertical: SIZES.height * 0.04,
//   },
//   label: {
//     fontSize: 14,
//     ...FONTS.fiveHundred,
//     color: COLORS.black,
//     width: SIZES.width * 0.92,
//   },
//   radio_BtnBox: {
//     backgroundColor: COLORS.white,
//     width: width * 0.05,
//     height: width * 0.05,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: COLORS.gray30,
//   },
//   radio_Btn: {
//     backgroundColor: COLORS.primary,
//     width: width * 0.03,
//     height: width * 0.03,
//     borderRadius: 30,
//   },
//   radio_text: {
//     fontSize: 12,
//     ...FONTS.fourHundred,
//     color: COLORS.black,
//     marginBottom: -4,
//     marginLeft: width * 0.02,
//   },
// });
