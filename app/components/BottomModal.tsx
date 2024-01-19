import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import ScrollPicker from './ScrollPicker';
import CustomButton from './CustomButtom';

import {scrollingData} from '../utils/DummyData';

import {AppColor, FontSize} from '../utils/StyleConstants';

type BottomModalProps = {
  bottomModalVisible: boolean;
  setBottomModalVisible: (active: any) => void;
};

const BottomModal = (props: BottomModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.bottomModalVisible}>
      <View style={styles.bottom}>
        <View style={styles.modalView}>
          <View style={styles.greyDash}></View>
          <Text style={styles.modalHeading}>Your Prediction is Under</Text>
          <Text style={styles.text1}>ENTRY TICKETS</Text>
          <ScrollPicker data={scrollingData} />
          <Text style={styles.text2}>You can win</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={styles.text3}>$2000</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Total </Text>
              <FontAwesomeIcon
                name="circle"
                size={20}
                color={AppColor.golden}
                style={styles.icon}
              />
              <Text style={{...styles.text3, color: AppColor.black}}>5</Text>
            </View>
          </View>
          <CustomButton
            color={AppColor.purple}
            text="Submit my prediction"
            onButtonPress={() => {
              props.setBottomModalVisible(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  bottom: {
    postion: 'relative',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.5)',
  },

  modalView: {
    position: 'absolute',
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  greyDash: {
    height: 4,
    width: 36,
    alignSelf: 'center',
    backgroundColor: AppColor.lightGreyText,
    borderRadius: 2,
    marginBottom: 14,
  },
  modalHeading: {
    fontSize: FontSize.large,
    color: AppColor.black,
    fontFamily: 'Montserrat Regular',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text1: {
    color: AppColor.greyText,
    fontSize: FontSize.medium,
    fontFamily: 'Montserrat Regular',
  },
  text2: {
    color: AppColor.greyText,
    fontSize: FontSize.small,
    fontFamily: 'Montserrat Regular',
  },
  text3: {
    color: AppColor.green,
    fontSize: FontSize.medium,
    fontFamily: 'Montserrat Regular',
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 6,
  },
});
