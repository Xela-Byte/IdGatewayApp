import React from 'react';
import {StyleSheet, View} from 'react-native';
import {default as CloseIcon} from 'react-native-vector-icons/AntDesign';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

import * as Animatable from 'react-native-animatable';

type Props = {
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
};

const HelpPopup = ({setShowPopup, showPopup}: Props) => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation={showPopup ? 'zoomIn' : 'zoomOut'}
        duration={500}
        style={styles.content}>
        <View style={styles.header}>
          <CloseIcon
            name="close"
            color={appColors.black}
            size={fontSize.medium - 5}
            onPress={() => {
              setShowPopup(!showPopup);
            }}
          />
          <CustomText fontType="semiBold" customStyle={{marginLeft: '35%'}}>
            Help
          </CustomText>
        </View>

        <CustomText
          fontSize={fontSize.small - 2}
          customStyle={{marginTop: sizeBlock.getHeightSize(15)}}>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repudiandae eos
        </CustomText>

        <CustomText
          fontSize={fontSize.small - 2}
          customStyle={{marginTop: sizeBlock.getHeightSize(15)}}>
          2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        </CustomText>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    ...universalStyle.centering,
  },
  content: {
    width: '90%',
    height: sizeBlock.getHeightSize(200),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    padding: sizeBlock.getWidthSize(15),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default HelpPopup;
