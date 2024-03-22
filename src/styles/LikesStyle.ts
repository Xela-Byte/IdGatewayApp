import {StyleSheet} from 'react-native';
import {
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const likesStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingTop: sizeBlock.getWidthSize(20),
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    ...universalStyle.flexBetween,
  },
  headerContent: {
    ...universalStyle.verticalCentering,
  },
  headerIcon: {
    width: sizeBlock.getWidthSize(70),
    ...universalStyle.flexBetween,
  },
  likeContainer: {
    width: screenWidth / 3.6,
    height: sizeBlock.getHeightSize(200),
  },
  likeImage: {
    width: '100%',
    height: '85%',
    borderRadius: borderRadius.medium,
  },
  likeContent: {
    ...universalStyle.verticalCentering,
    height: '15%',
  },
  onlineDot: {
    width: sizeBlock.getWidthSize(15),
    height: sizeBlock.getWidthSize(15),
    borderRadius: borderRadius.full,
    marginLeft: sizeBlock.getWidthSize(5),
    marginTop: sizeBlock.getWidthSize(13),
  },
});
