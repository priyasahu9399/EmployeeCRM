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
import ImagePicker from 'react-native-image-crop-picker';
import {InputText} from './../../component/input/index';
import {GrayButton} from './../../component/Button/index';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';

const PersonalDetail = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const [postData, setPostData] = useState({
    image: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: SIZES.width * 0.8,
      height: SIZES.height * 0.4,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(20),
        type: image.mime,
      });
    });
  };
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.profileBox}>
        <TouchableOpacity onPress={OnSelectImage} activeOpacity={0.8}>
          <Image
            source={postData.image ? {uri: postData.image.uri} : images.glogo}
            style={styles.logo}
          />
          <View style={styles.cameraBox}>
            <Image source={icons.camera} style={styles.camera} />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Daisy paul</Text>
        <Text style={styles.email}>Daisypaul@workclientinc.com</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={styles.flexDirection}>
          <Text style={styles.titleEdit}>Personal Details</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.editBox}>
            <Image source={icons.edit} style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.marginTop}>
          <InputText
            label="User Name"
            placeholder="User Name"
            icon={icons.person}
          />
          <InputText
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            icon={icons.email}
          />

          <TouchableOpacity activeOpacity={0.7} onPress={() => setOpen(true)}>
            <InputText
              label="Date Of Birth"
              placeholder="Date Of Birth"
              icon={icons.nineteen}
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
          <InputText
            label="Contact Number"
            placeholder="Contact Number"
            icon={icons.phone}
            keyboardType="numeric"
          />
          <InputText label="Gender" placeholder="Gender" icon={icons.gender} />
          <InputText
            label="Address"
            placeholder="Address"
            icon={icons.address}
          />

          <GrayButton
            children="Save"
            buttonStyle={styles.btnStyle}
            btnText={{color: COLORS.white, fontSize: 16}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalDetail;
