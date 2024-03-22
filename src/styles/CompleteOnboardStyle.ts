import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const completeOnboardStyle = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingTop: screenHeight / 4,
  },
  footer: {
    paddingTop: screenHeight / 4,
  },
  buttonContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(50),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
});
