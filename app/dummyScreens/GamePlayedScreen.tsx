// These dummy screens does not follow conventional structure because they dont have any
// design.

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

const GamePlayedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Played Screen</Text>
    </View>
  );
};

export default GamePlayedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.extraLightPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColor.black,
    fontSize: FontSize.heading,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontWeight: 'bold',
  },
});
