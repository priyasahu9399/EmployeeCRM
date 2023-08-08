import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import {icons, images} from '../../constants';
import styles from './styles';
import {data} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import {InputText} from './../../component/input/index';
import DatePicker from 'react-native-date-picker';
import CheckBox from 'react-native-check-box';
import PaperInput from './../../component/input/reactpaperinput';
import ChatingCart from './../../component/carts/chatingCart';
import {formattedDateServer} from './../../services/date';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const track = [
  {
    id: 0,
    name: 'Task- Create a dashboard',
  },
  {
    id: 1,
    name: 'Task- Create a dashboard',
  },
];

const Filter = ({name}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={[styles.CheckRow, {marginVertical: SIZES.height * 0.008}]}>
      <CheckBox
        isChecked={checked}
        checkBoxColor={COLORS.primary}
        uncheckedCheckBoxColor={COLORS.gray70}
        onClick={() => setChecked(!checked)}
      />
      <Text style={styles.checkText}>{name}</Text>
    </View>
  );
};
const ViewWorkTrack = () => {
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
      height: SIZES.height * 0.5,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(20),
        type: image.mime,
      });
    });
  };
  // ----------------------------------------------------------------
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={{marginTop: SIZES.height * 0.02}}>
          <InputText label="Project name" placeholder="Project name" />
          <InputText
            label="Email id"
            placeholder="Email id"
            keyboardType="email-address"
          />
          <View>
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
          <View>
            <TouchableOpacity onPress={OnSelectImage} activeOpacity={0.8}>
              <InputText
                label="Picture upload"
                placeholder="Upload here..."
                icon={icons.upload}
                editable={false}
                value={postData.image && postData.image.name}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDocumentSelection}
              activeOpacity={0.8}>
              <InputText
                label="Attached Project file"
                placeholder="Attached here....."
                icon={icons.upload}
                editable={false}
                value={fileResponse[0]?.name}
              />
            </TouchableOpacity>
          </View>
          {track.map((item, index) => (
            <Filter name={item.name} />
          ))}
        </View>

        <View style={styles.commentBox}>
          <PaperInput
            label="Comment"
            placeholder="Type comment here..."
            icon={icons.send}
          />
          <View style={{marginTop: SIZES.height * 0.02}}>
            {data.Chating.map((item, index) => (
              <ChatingCart
                image={item.image}
                content={item.content}
                direction={item.direction}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewWorkTrack;
