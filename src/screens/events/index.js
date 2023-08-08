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
import {COLORS, SIZES} from './../../constants';
import EventAccept from './../../component/carts/eventAccept';
import Slider from './../../component/slider/index';
import EventComplete from './../../component/carts/eventComplete';
import EventUpcoming from './../../component/carts/eventUpcoming';
import {GrayButton} from './../../component/Button/index';
import Modal from 'react-native-modal';
import ModalComponent from './../../component/modal/index';
import CalenderHorizontal from './../../component/calenderHorizontalStrip/index';

const Events = ({navigation}) => {
  const [active, setActive] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalMiceVisible, setModalMiceVisible] = useState(false);
  const [sucessVisible, setSucessVisible] = useState(false);
  const [denyVisible, setdenyVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <CalenderHorizontal />
      <View style={styles.innercontainer}>
        <Image source={images.banner} style={styles.banner} />
        <Text style={styles.letsplay}>Let’s Play game</Text>
      </View>
      <Slider />
      <View style={styles.innercontainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={[
              styles.switchbox,
              active === 1 && {backgroundColor: COLORS.primary},
            ]}>
            <Text
              style={[
                styles.switchText,
                active === 1 && {color: COLORS.white},
              ]}>
              Accepted
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
                active === 2 && {color: COLORS.white},
              ]}>
              Completed
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
                active === 3 && {color: COLORS.white},
              ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>

        {active === 1 && (
          <View>
            {data.EventAcceptList.map((item, index) => (
              <EventAccept
                title={item.title}
                time={item.time}
                bg={item.bg}
                border={item.border}
                day={item.day}
                date={item.date}
                onPressMeet={() => setModalVisible(true)}
              />
            ))}

            <Modal backdropOpacity={0.5} isVisible={isModalVisible}>
              <ModalComponent
                icon={icons.camera}
                title="Allow Application to access Camera"
                onPressonly={() => {
                  setModalMiceVisible(true), setModalVisible(false);
                }}
                onPresswhile={() => setModalVisible(false)}
                onPressdeny={() => {
                  setdenyVisible(true), setModalVisible(false);
                }}
              />
            </Modal>
            {/* modal mice  */}
            <Modal backdropOpacity={0.5} isVisible={isModalMiceVisible}>
              <ModalComponent
                icon={icons.mice}
                title="Allow Application to access Microphone"
                onPressonly={() => {
                  setSucessVisible(true), setModalMiceVisible(false);
                }}
                onPresswhile={() => setModalMiceVisible(false)}
                onPressdeny={() => {
                  setdenyVisible(true), setModalMiceVisible(false);
                }}
              />
            </Modal>
            {/* sucess modal */}
            <Modal
              backdropOpacity={0.5}
              isVisible={sucessVisible}
              onBackdropPress={() => setSucessVisible(false)}>
              <View style={styles.modal_Box}>
                <Text style={styles.allowAccess}>
                  Event invitation has been sucessfully accepted
                </Text>
                <View style={styles.gifBox}>
                  <Image source={images.gif} style={styles.gif} />
                </View>
              </View>
            </Modal>
            {/* deny */}
            <Modal
              backdropOpacity={0.5}
              isVisible={denyVisible}
              onBackdropPress={() => setdenyVisible(false)}>
              <View style={styles.modal_Box}>
                <Text style={[styles.allowAccess, {color: COLORS.black}]}>
                  Event invitation has been Declined
                </Text>
                <View style={styles.gifBox}>
                  <Image source={images.crossgif} style={styles.gif} />
                </View>
              </View>
            </Modal>
          </View>
        )}

        {active === 2 && (
          <View>
            {data.EventAcceptList.map((item, index) => (
              <EventComplete
                title={item.title}
                time={item.time}
                border={item.border}
                day={item.day}
                date={item.date}
              />
            ))}
          </View>
        )}

        {active === 3 && (
          <View>
            {data.EventAcceptList.map((item, index) => (
              <EventUpcoming
                title={item.title}
                time={item.time}
                border={item.border}
                day={item.day}
                date={item.date}
                bg={item.bg}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Events;
