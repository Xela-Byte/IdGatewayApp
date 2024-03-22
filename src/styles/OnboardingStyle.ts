import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const onboardingStyle = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingTop: sizeBlock.getHeightSize(100),
  },
  iconContainer: {
    width: '100%',
    ...universalStyle.centering,
  },
  nextButtonWrapper: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  nextButtonContainer: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    backgroundColor: appColors.deepOrange,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  nextButton: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
});
