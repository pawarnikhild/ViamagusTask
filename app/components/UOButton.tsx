import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { AppColor, FontSize } from '../utils/StyleConstants';

import { Icon } from '@rneui/themed';

type UOButtonProps = {
  color: string;
  text: string;
  icon: string;
  iconType?: string;
  style?: object;
  onButtonPress: (active: any) => void;
};
const UOButton = (props: UOButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...props.style,
        backgroundColor: props.color,
      }}
      onPress={props.onButtonPress}
      >
      <View style={styles.row}>
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <Icon name={props.icon} type={props.iconType} color={AppColor.white} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UOButton;

const styles = StyleSheet.create({
  container: {
    width: 160,
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
    fontFamily: "Montserrat Regular",
    // fontWeight: "bold"
  },
});
