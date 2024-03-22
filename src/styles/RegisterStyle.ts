import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const registerStyle = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingTop: sizeBlock.getHeightSize(150),
  },
  textContainer: {
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  buttonWrapper: {
    width: '100%',
    height: screenHeight / 2.2,
    marginBottom: sizeBlock.getHeightSize(50),
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(60),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.full,
    marginTop: sizeBlock.getHeightSize(20),
    ...universalStyle.centering,
    paddingLeft: sizeBlock.getWidthSize(30),
  },
  buttonIcon: {
    marginRight: sizeBlock.getWidthSize(20),
  },
});
