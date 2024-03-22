import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const verifyPhotoStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  imageContainer: {
    ...universalStyle.spaceEvenly,
    width: '100%',
  },
  imageContent: {
    width: screenWidth / 3,
    height: screenHeight / 5,
    ...universalStyle.centering,
  },
  addPhotoContainer: {
    width: screenWidth / 2.5,
    height: screenHeight / 4.5,
    borderColor: appColors.blue,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: borderRadius.medium,
    ...universalStyle.centering,
  },
  image: {
    width: screenWidth / 2.5,
    height: screenHeight / 4.5,
    borderRadius: borderRadius.medium,
  },
  imageIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  startButton: {
    width: screenWidth * 0.8,
    height: sizeBlock.getHeightSize(50),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.blue,
    ...universalStyle.centering,
    marginTop: sizeBlock.getHeightSize(30),
    marginBottom: sizeBlock.getHeightSize(10),
  },
});
