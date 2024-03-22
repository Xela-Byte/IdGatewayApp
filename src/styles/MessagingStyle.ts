import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const messagingStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    width: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    width: '100%',
    paddingVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.verticalCentering,
  },
  utilityIcons: {
    width: '35%',
    marginLeft: 'auto',
    ...universalStyle.spaceBetween,
  },
  infoContainer: {
    width: '100%',
    paddingVertical: sizeBlock.getHeightSize(20),
    flexDirection: 'row',
  },
  infoSubImage: {
    width: screenWidth / 3.5,
    height: sizeBlock.getHeightSize(150),
    borderRadius: borderRadius.medium,
    marginLeft: -screenWidth / 5,
    marginRight: sizeBlock.getWidthSize(10),
  },
  infoImage: {
    width: screenWidth / 3.5,
    height: sizeBlock.getHeightSize(150),
    borderRadius: borderRadius.medium,
  },
  textContainer: {
    width: '50%',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    alignSelf: 'center',
  },
  footerContainer: {
    width: '100%',
    height: screenHeight / 1.6,
    marginBottom: sizeBlock.getHeightSize(70),
  },
  newChatBox: {
    width: '100%',
    height: screenHeight / 3,
    backgroundColor: appColors.lightGrey,
    borderRadius: borderRadius.medium,
    ...universalStyle.centering,
    flexDirection: 'column',
    padding: sizeBlock.getWidthSize(20),
    marginTop: screenHeight / 6,
  },
  inputContainer: {
    width: '65%',
    height: sizeBlock.getHeightSize(50),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.lightGrey,
    paddingHorizontal: sizeBlock.getWidthSize(10),
    ...universalStyle.verticalCentering,
    borderWidth: 1,
    borderColor: appColors.white,
  },
  input: {
    width: '90%',
    height: '100%',
    color: appColors.black,
    fontFamily: fontFamily.regular,
  },
  inputIcon: {
    marginLeft: 'auto',
  },
  sendIconContent: {
    width: sizeBlock.getWidthSize(40),
    height: sizeBlock.getWidthSize(40),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  footer: {
    width: '100%',
    height: sizeBlock.getHeightSize(70),
    position: 'absolute',
    bottom: 0,
    ...universalStyle.spaceEvenly,
    backgroundColor: appColors.white,
  },
});
