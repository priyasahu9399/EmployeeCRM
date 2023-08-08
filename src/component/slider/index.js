import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {GrayButton} from './../Button/index';

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const Sliderlist = [
    {
      id: 0,
      title: 'Quiz Word Concept',
      time: '3-10 mint',
      img: images.img1,
    },
    {
      id: 1,
      title: 'Quiz Word Concept',
      time: '3-10 mint',
      img: images.img2,
    },
    {
      id: 2,
      title: 'Quiz Word Concept',
      time: '3-10 mint',
      img: images.banner,
    },
  ];

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == Sliderlist.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 2500);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != Sliderlist.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  return (
    <View>
      <FlatList
        data={Sliderlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item}) => (
          <View style={{width: SIZES.width, alignSelf: 'center'}}>
            <View style={styles.imgmainbox}>
              <Image source={item.img} style={styles.imagestyle} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.row}>
                <GrayButton
                  children="play"
                  btnText={{color: COLORS.white}}
                  buttonStyle={{
                    backgroundColor: COLORS.lightblue,
                    width: SIZES.width * 0.25,
                  }}
                />
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        {Sliderlist.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.dotbox,
              currentSlideIndex === index && {
                width: SIZES.width * 0.036,
                height: SIZES.height * 0.018,
              },
            ]}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgmainbox: {
    width: SIZES.width * 0.91,
    borderRadius: 6,
    elevation: 2,
    marginVertical: SIZES.height * 0.02,
    alignItems: 'center',
    backgroundColor: '#E7EBEF',
    marginHorizontal: SIZES.width * 0.01,
    alignSelf: 'center',
  },
  imagestyle: {
    height: SIZES.height * 0.12,
    width: SIZES.width * 0.4,
    alignSelf: 'center',
    resizeMode: 'stretch',
    borderRadius: 0,
    marginVertical: SIZES.height * 0.01,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 11,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.5,
    justifyContent: 'space-between',
    marginVertical: SIZES.height * 0.02,
  },
  time: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 14,
  },
  dotbox: {
    width: SIZES.width * 0.022,
    height: SIZES.height * 0.011,
    backgroundColor: '#CBC1FF',
    borderRadius: 20,
    marginHorizontal: SIZES.width * 0.01,
  },
});
export default Slider;
