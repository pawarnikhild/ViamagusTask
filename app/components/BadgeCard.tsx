import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

type BadgeCardProps = {
  image: string;
  title: string;
  description: string;
  style?: object;
  cardCount?: number;
};

const BadgeCard = (props: BadgeCardProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.badgeCard,
        ...props.style,
      }}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.TDContainer}>
        <Text style={styles.title}>
          {props.title}
          {props.cardCount ? (
            <Text style={{...styles.title, color: AppColor.orange}}>
              {' '}
              x {props.cardCount}
            </Text>
          ) : null}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {props.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BadgeCard;

const styles = StyleSheet.create({
  badgeCard: {
    height: 100,
    width: '100%',
    borderWidth: 2,
    borderColor: AppColor.lightPurpleBorder,
    backgroundColor: AppColor.white,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 8,
  },
  TDContainer: {
    width: '70%',
  },
  imageView: {
    width: '20%',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 35,
    marginRight: 16,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: AppColor.golden,
  },
  title: {
    fontSize: FontSize.small,
    color: AppColor.black,
    fontFamily: 'Montserrat Regular',
    marginTop: 2,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: FontSize.small,
    color: AppColor.greyText,
    fontFamily: 'Montserrat Regular',
  },
});
