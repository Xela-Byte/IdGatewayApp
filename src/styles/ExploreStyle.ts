import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const exploreStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    width: '100%',
    paddingVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
  avatarContainer: {
    width: sizeBlock.getHeightSize(50),
    height: sizeBlock.getHeightSize(50),
    backgroundColor: appColors.grey,
    borderRadius: borderRadius.full,
  },
  avatar: {
    width: sizeBlock.getHeightSize(50),
    height: sizeBlock.getHeightSize(50),
    borderRadius: borderRadius.full,
  },
  swipeContainer: {
    width: '100%',
  },
});
