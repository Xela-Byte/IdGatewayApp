import {StyleSheet} from 'react-native';
import {
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const chatsStyle = StyleSheet.create({
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
  storiesContainer: {
    height: sizeBlock.getHeightSize(150),
    ...universalStyle.verticalCentering,
  },
  iconContainer: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getWidthSize(80),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  storyContent: {
    width: sizeBlock.getWidthSize(100),
    height: '100%',
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  filterContent: {
    marginVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.verticalCentering,
  },
  chatContainer: {
    ...universalStyle.flexBetween,
    height: sizeBlock.getHeightSize(100),
  },
  chatContent: {
    width: '73%',
  },
  chatWrapper: {
    height: screenHeight / 2.2,
    paddingBottom: sizeBlock.getHeightSize(50),
  },
});
