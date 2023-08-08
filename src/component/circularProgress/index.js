import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS, SIZES} from './../../constants/theme';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircularProgressComponent = ({
  value,
  radius,
  title,
  titleStyle,
  valueSuffix,
  valuePrefix,
  valuePrefixStyle,
  valueSuffixStyle,
  showProgressValue,
  progressValueStyle,
  onAnimationComplete,
  circleBackgroundColor,
  activeStrokeColor,
  activeStrokeSecondaryColor,
  inActiveStrokeColor,
  activeStrokeWidth,
  inActiveStrokeWidth,
}) => {
  return (
    <View>
      <CircularProgress
        value={value}
        radius={radius}
        duration={1000}
        title={title}
        titleStyle={titleStyle}
        valueSuffix={valueSuffix}
        valuePrefix={valuePrefix}
        valuePrefixStyle={valuePrefixStyle}
        valueSuffixStyle={valueSuffixStyle}
        showProgressValue={showProgressValue}
        progressValueStyle={progressValueStyle}
        onAnimationComplete={onAnimationComplete}
        circleBackgroundColor={circleBackgroundColor}
        activeStrokeColor={activeStrokeColor}
        activeStrokeSecondaryColor={activeStrokeSecondaryColor}
        inActiveStrokeColor={inActiveStrokeColor}
        activeStrokeWidth={activeStrokeWidth}
        inActiveStrokeWidth={inActiveStrokeWidth}
      />
    </View>
  );
};

export default CircularProgressComponent;
