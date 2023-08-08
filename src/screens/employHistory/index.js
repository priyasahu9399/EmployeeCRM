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

const EmployHistory = ({navigation}) => {
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
          <Text style={styles.titleEdit}>Employment History</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.editBox}>
            <Image source={icons.edit} style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.marginTop}>
          <InputText
            label="Employee ID"
            placeholder="Employee ID"
            icon={icons.person}
          />
          <InputText
            label="Employment Type"
            placeholder="Employment Type"
            icon={icons.circleright}
          />
          <InputText
            label="Earning Type"
            placeholder="Earning Type"
            icon={icons.nineteen}
          />
          <InputText
            label="Country"
            placeholder="Country"
            icon={icons.location}
          />
          <InputText label="State" placeholder="State" icon={icons.location} />
          <InputText label="City" placeholder="City" icon={icons.location} />
          <InputText label="Place" placeholder="Place" icon={icons.location} />
          <InputText
            label="Week-Off"
            placeholder="Week-Off"
            icon={icons.nineteen}
          />
          <InputText
            label="Attendance Mode"
            placeholder="Attendance"
            icon={icons.mobile}
          />
          <InputText label="Shift" placeholder="Shift" icon={icons.shift} />
          <InputText label="Role" placeholder="Role" icon={icons.roll} />

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

export default EmployHistory;
