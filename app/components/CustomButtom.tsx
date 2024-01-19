import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

type UOButtonProps = {
  color: string;
  text: string;
  style?: object;
  onButtonPress: (active: any) => void;
};
const CustomButton = (props: UOButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...props.style,
        backgroundColor: props.color,
      }}
      onPress={props.onButtonPress}>
      <View style={styles.row}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 4,
    fontSize: FontSize.medium,
    color: AppColor.white,
    fontFamily: 'Montserrat Regular',
  },
});
