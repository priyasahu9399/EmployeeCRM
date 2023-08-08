import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import {icons, images} from '../../constants';
import styles from './styles';
import {COLORS, SIZES} from './../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import EmployDetails from './../employDetail';
import EmployHistory from './../employHistory';
import PersonalDetail from './../personalDetails';

const Profile = ({navigation}) => {
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

  const requestImagePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Image');
      } else {
        console.log('Image permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestImagePermission();
  }, []);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.profileheadBox}>
        <View style={styles.profileBox}>
          <TouchableOpacity onPress={OnSelectImage} activeOpacity={0.8}>
            <View style={styles.imageBox}>
              <Image
                source={
                  postData.image ? {uri: postData.image.uri} : images.glogo
                }
                style={styles.logo}
              />
            </View>
            <Image source={icons.camera} style={styles.camera} />
          </TouchableOpacity>
          <Text style={styles.title}>Daisy paul</Text>
          <Text style={styles.email}>Daisypaul@workclientinc.com</Text>
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalDetail')}
            activeOpacity={0.6}>
            <Text style={styles.profileText}>Personal Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmployDetails')}
            activeOpacity={0.6}>
            <Text style={styles.profileText}>Employment Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EmployHistory')}
            activeOpacity={0.6}>
            <Text style={styles.profileText}>Employment History</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <View style={styles.logoutBox}>
            <Image source={icons.logout} style={styles.logout} />
          </View>
          <Text style={styles.btn_text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
