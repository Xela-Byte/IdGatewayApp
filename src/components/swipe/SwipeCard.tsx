import React from 'react';
import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import CustomText from '../text/CustomText';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {personalizedInterests} from '../../utils/data/PersonalizedInterests';

type Props = {
  photo: ImageSourcePropType;
  name: string;
  age: number;
};

const SwipeCard = ({age, name, photo}: Props) => (
  <View style={styles.container}>
    <Image style={styles.image} source={photo} resizeMode="cover" />
    <View style={styles.description}>
      <CustomText
        color={appColors.white}
        fontSize={fontSize.small + 2}
        fontType="semiBold">{`${name}, ${age}`}</CustomText>
      <View style={styles.interestContainer}>
        <LinearGradient
          colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.95]}
          style={styles.activeInterestContent}>
          {personalizedInterests[0].icon}
          <CustomText
            customStyle={{marginLeft: sizeBlock.getWidthSize(10)}}
            fontSize={fontSize.small - 2}
            color={appColors.white}>
            {personalizedInterests[0].title}
          </CustomText>
        </LinearGradient>
        <View style={styles.interestContent}>
          {personalizedInterests[1].icon}
          <CustomText
            customStyle={{marginLeft: sizeBlock.getWidthSize(10)}}
            fontSize={fontSize.small - 2}
            color={appColors.black}>
            {personalizedInterests[1].title}
          </CustomText>
        </View>
        <View style={styles.interestContent}>
          {personalizedInterests[2].icon}
          <CustomText
            customStyle={{marginLeft: sizeBlock.getWidthSize(10)}}
            fontSize={fontSize.small - 2}
            color={appColors.black}>
            {personalizedInterests[2].title}
          </CustomText>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    height: screenHeight * 0.75,
    zIndex: -4,
  },
  image: {
    width: screenWidth * 0.9,
    position: 'absolute',
    height: '100%',
    zIndex: 2,
    borderRadius: borderRadius.medium + 10,
  },
  description: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
    position: 'relative',
    zIndex: 3,
    padding: sizeBlock.getWidthSize(20),
    top: '75%',
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: sizeBlock.getHeightSize(10),
    columnGap: sizeBlock.getWidthSize(15),
    rowGap: sizeBlock.getWidthSize(10),
  },
  activeInterestContent: {
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getWidthSize(7),
    borderRadius: borderRadius.full,
    flexDirection: 'row',
  },
  interestContent: {
    backgroundColor: appColors.white,
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getWidthSize(7),
    ...universalStyle.centering,
    borderRadius: borderRadius.full,
  },
});

export default SwipeCard;
