import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const videoCallStyle = StyleSheet.create({
  content: {
    width: '100%',
    position: 'absolute',
    bottom: screenHeight / 10,
    ...universalStyle.spaceEvenly,
    zIndex: 3,
  },
  declineIcon: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  iconContainer: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    backgroundColor: appColors.darkGrey,
  },
});
