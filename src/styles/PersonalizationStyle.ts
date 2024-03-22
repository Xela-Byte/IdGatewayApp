import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const personalizationStyle = StyleSheet.create({
  content: {
    paddingTop: sizeBlock.getHeightSize(70),
  },
  progressBarContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(5),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: sizeBlock.getHeightSize(30),
    borderRadius: borderRadius.full,
  },
  progressBar: {
    backgroundColor: appColors.white,
    width: 100,
    borderRadius: borderRadius.full,
    height: '100%',
  },
  disclaimerContent: {
    width: '100%',
    marginTop: sizeBlock.getHeightSize(100),
    ...universalStyle.centering,
    paddingHorizontal: sizeBlock.getWidthSize(10),
  },
  iconContainer: {
    width: sizeBlock.getWidthSize(40),
    height: sizeBlock.getWidthSize(40),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    marginLeft: 'auto',
    ...universalStyle.centering,
  },
  editButtonContainer: {
    marginTop: sizeBlock.getHeightSize(20),
    width: screenWidth / 1.6,
    ...universalStyle.flexBetween,
  },
  editButton: {
    width: '48%',
    height: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  imageWrapper: {
    marginTop: sizeBlock.getHeightSize(20),
    height: screenHeight / 2,
  },
  imageContainer: {
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.full,
  },
  editIcon: {
    width: sizeBlock.getWidthSize(30),
    height: sizeBlock.getWidthSize(30),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  interestContainer: {
    height: sizeBlock.getWidthSize(45),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.flexBetween,
    paddingHorizontal: sizeBlock.getWidthSize(15),
  },
});
