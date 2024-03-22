import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const callStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  downIcon: {
    zIndex: 3,
    fontSize: fontSize.medium,
    marginLeft: sizeBlock.getWidthSize(30),
    marginTop: sizeBlock.getHeightSize(70),
  },
  callImageContainer: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    backgroundColor: appColors.black,
    zIndex: 2,
    opacity: 0.4,
  },
  callerImage: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    zIndex: 1,
  },
  userImage: {
    width: sizeBlock.getWidthSize(120),
    height: sizeBlock.getHeightSize(150),
    position: 'absolute',
    zIndex: 1,
    borderRadius: borderRadius.medium,
    top: sizeBlock.getHeightSize(70),
    right: sizeBlock.getWidthSize(20),
  },
  content: {
    width: '100%',
    position: 'absolute',
    bottom: screenHeight / 10,
    ...universalStyle.centering,
    flexDirection: 'column',
    zIndex: 3,
  },
  declineIcon: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.full,
    marginBottom: sizeBlock.getHeightSize(15),
    marginTop: sizeBlock.getHeightSize(50),
    ...universalStyle.centering,
  },
});
