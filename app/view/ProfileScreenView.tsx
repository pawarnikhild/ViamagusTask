import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {userData} from '../utils/DummyData';
import ProfileScreenTopTabNavigation from '../routes/ProfileScreenTopTabNavigation';
import IconsButton from '../components/IconsButton';

import GlobleStyles from '../styles/GlobleStyles';
import {AppColor} from '../utils/StyleConstants';
import ProfileScreenStyle from '../styles/ProfileScreenStyle';

const ProfileScreenView = () => {
  return (
    <View style={{...GlobleStyles.appContainer, paddingHorizontal: 0}}>
      <View style={{paddingHorizontal: 10, paddingTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity>
            <Image source={require('../assets/icons/Sparta.png')} />
          </TouchableOpacity>
          <Text style={ProfileScreenStyle.text1}>Profile</Text>
          <TouchableOpacity>
            <Image source={require('../assets/icons/Msg.png')} />
          </TouchableOpacity>
        </View>
        <View style={ProfileScreenStyle.PImageAndIconContainer}>
          <Image
            style={ProfileScreenStyle.profileImage}
            source={{uri: userData.profilePicture}}
          />
          <IconsButton
            borderColor={AppColor.greyText}
            backGroudColor={AppColor.white}
            icon="edit"
            iconSize={12}
            iconType="font-awesome-5"
            iconColor={AppColor.greyText}
            style={ProfileScreenStyle.editIcon}
            onButtonPress={() => {}}
          />
        </View>
        <Text
          style={{
            ...ProfileScreenStyle.text1,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {userData.name}
        </Text>
        <Text style={{...ProfileScreenStyle.text1, marginBottom: 10}}>
          {userData.points} pts
        </Text>
        <Text
          style={{
            ...ProfileScreenStyle.text1,
            paddingHorizontal: 11,
            textAlign: 'left',
          }}>
          {userData.about}
        </Text>
        <TouchableOpacity style={ProfileScreenStyle.logoutButtonView}>
          <FontAwesome5Icon
                name="sign-out-alt"
                size={18}
                color={AppColor.greyText}
                style={ProfileScreenStyle.signOutIcon}
          />
          <Text style={ProfileScreenStyle.text1}>Logout</Text>
        </TouchableOpacity>
        <View style={ProfileScreenStyle.boxContainer}>
          <View style={ProfileScreenStyle.starIconBgArc}>
            <View
              style={{
                ...ProfileScreenStyle.starUpDownIconBg,
                width: 15,
                height: 15,
                backgroundColor: AppColor.lightYellow,
                marginRight: 0,
              }}>
              <Entypo name="star" size={10} color={AppColor.orange} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  ...ProfileScreenStyle.text1,
                  textAlign: 'auto',
                  marginBottom: 10,
                }}>
                Under or Over
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    ...ProfileScreenStyle.starUpDownIconBg,
                    backgroundColor: AppColor.lightGreen,
                  }}>
                  <Ionicons
                    name="arrow-up-sharp"
                    size={20}
                    color={AppColor.green}
                  />
                </View>
                <Text style={ProfileScreenStyle.text2}>
                  {userData.underOrOver}%
                </Text>
              </View>
            </View>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  ...ProfileScreenStyle.text1,
                  textAlign: 'auto',
                  marginBottom: 10,
                }}>
                Top 5
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    ...ProfileScreenStyle.starUpDownIconBg,
                    backgroundColor: AppColor.lightRed,
                  }}>
                  <Ionicons
                    name="arrow-down-sharp"
                    size={20}
                    color={AppColor.red}
                  />
                </View>
                <Text style={ProfileScreenStyle.text2}>{userData.top5}%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 4,
          backgroundColor: AppColor.extraLightPurple,
        }}></View>
      <ProfileScreenTopTabNavigation />
    </View>
  );
};

export default ProfileScreenView;
