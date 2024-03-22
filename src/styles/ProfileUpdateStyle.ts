import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const profileUpdateStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getHeightSize(30),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  iconContainer: {
    ...universalStyle.centering,
    paddingVertical: sizeBlock.getHeightSize(30),
  },
  profilePreview: {
    width: '100%',
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
  profilePreviewImage: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.full,
  },
  profileStepWrapper: {
    height: screenHeight / 4,
  },
  profileStepContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
    position: 'relative',
    zIndex: 1,
  },
  profileStepButtons: {
    width: '65%',
    ...universalStyle.spaceBetween,
    paddingBottom: sizeBlock.getHeightSize(20),
  },
  profileStepContent: {
    width: '95%',
    marginLeft: '5%',
    paddingLeft: '10%',
    height: sizeBlock.getHeightSize(150),
    zIndex: 1,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
  },
  profileStepComplete: {
    width: '35%',
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
  profileStepDotContainer: {
    width: sizeBlock.getWidthSize(20),
    height: sizeBlock.getWidthSize(20),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    position: 'absolute',
    top: 0,
    left: '2%',
    zIndex: 2,
  },
  profileStepDot: {
    width: sizeBlock.getWidthSize(10),
    height: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.white,
  },
  profileStepDate: {
    width: '80%',
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
  profileStepButton: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getWidthSize(30),
    borderRadius: borderRadius.medium,
    ...universalStyle.centering,
    backgroundColor: appColors.grey,
  },
});
