import React, {useState, useCallback} from 'react';
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
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployDetails = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const [postData, setPostData] = useState({
    image: null,
    payslip: null,
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

  // payslip
  const OnSelectPayslip = () => {
    ImagePicker.openPicker({
      width: SIZES.width * 0.8,
      height: SIZES.height * 0.5,
      cropping: true,
    }).then(payslip => {
      handleChange('payslip', {
        uri: payslip.path,
        name: payslip.filename || Date.now() + '-' + payslip.path.slice(20),
        type: payslip.mime,
      });
    });
  };

  // document
  const [fileResponse, setFileResponse] = useState('');

  const handleDocumentSelection = useCallback(async () => {
    try {
      const selectDocument = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      console.log('selectDocument', selectDocument);
      setFileResponse(selectDocument);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) console.warn('err cancel', err);
      else console.log('errrr', err);
    }
  }, []);

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
          <Text style={styles.titleEdit}>Employment Details</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.editBox}>
            <Image source={icons.edit} style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.marginTop}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setOpen(true)}>
            <InputText
              label="Date Of Joining"
              placeholder="Date Of Joining"
              icon={icons.person}
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
            label="Employement Status"
            placeholder="Status"
            icon={icons.circleright}
          />
          <InputText
            label="Probation Duration ( In Days )"
            placeholder="Probation Duration"
            icon={icons.nineteen}
          />
          <TouchableOpacity onPress={handleDocumentSelection}>
            <InputText
              label="Offer letter"
              placeholder="Offer letter"
              icon={icons.offer}
              editable={false}
              value={fileResponse[0]?.name}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={OnSelectPayslip} activeOpacity={0.8}>
            <InputText
              label="Payslip"
              placeholder="Pay slip"
              icon={icons.offer}
              editable={false}
              value={postData.payslip?.name}
            />
          </TouchableOpacity>
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

export default EmployDetails;
