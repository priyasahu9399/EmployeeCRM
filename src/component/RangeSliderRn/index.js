import React, {useState, useCallback, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import RangeSlider from 'rn-range-slider';

const RailSelected = () => {
  return (
    <View>
      <Text style={styles.range_bgline}></Text>
    </View>
  );
};
const Rail = () => {
  return (
    <View>
      <Text style={styles.range_line}></Text>
    </View>
  );
};
const Thumb = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.range_dotleft}> </Text>
      </TouchableOpacity>
    </View>
  );
};
const RnRangeSlider = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View style={{flexDirection: 'row'}}>
      <RangeSlider
        style={styles.slider}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};

export default RnRangeSlider;

const styles = StyleSheet.create({
  slider: {
    width: SIZES.width * 0.5,
  },
  range_bgline: {
    backgroundColor: '#2CD889',
    height: SIZES.height * 0.005,
  },
  range_line: {
    width: SIZES.width * 0.48,
    height: SIZES.height * 0.005,
    backgroundColor: COLORS.gray20,
    //  marginLeft: SIZES.width * 0.02,
  },
  range_dotleft: {
    backgroundColor: '#01B111',
    width: SIZES.width * 0.03,
    height: SIZES.width * 0.03,
    borderRadius: 30,
  },
});
