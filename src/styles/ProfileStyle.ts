import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const profileStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
  iconContainer: {
    ...universalStyle.spaceBetween,
    width: sizeBlock.getWidthSize(70),
  },
  profileContent: {
    width: '100%',
    height: sizeBlock.getWidthSize(150),
    paddingTop: sizeBlock.getHeightSize(20),
    flexDirection: 'row',
  },
  profileProgress: {
    width: sizeBlock.getWidthSize(100),
    height: sizeBlock.getWidthSize(100),
    ...universalStyle.centering,
    position: 'relative',
  },
  profileImage: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getWidthSize(80),
    borderRadius: borderRadius.full,
    position: 'absolute',
  },
  profileProgressValue: {
    position: 'absolute',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingVertical: sizeBlock.getWidthSize(5),
    borderRadius: borderRadius.small,
    bottom: -sizeBlock.getHeightSize(15),
  },
  profileInfo: {
    width: '70%',
    height: '100%',
    paddingLeft: sizeBlock.getWidthSize(20),
  },
  profileID: {
    ...universalStyle.verticalCentering,
  },
  profileStatus: {
    width: '100%',
    backgroundColor: appColors.lightGrey,
    marginTop: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceEvenly,
    borderRadius: borderRadius.full,
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingVertical: sizeBlock.getWidthSize(5),
  },
  profileUpdate: {
    width: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getWidthSize(10),
    marginVertical: sizeBlock.getWidthSize(30),
    borderWidth: 2,
    borderColor: appColors.lightGrey,
    borderRadius: borderRadius.small,
    ...universalStyle.spaceBetween,
  },
  actionContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(100),
    ...universalStyle.spaceBetween,
  },
  actionContent: {
    width: '48%',
    height: '100%',
    backgroundColor: appColors.lightGrey,
    borderRadius: borderRadius.medium,
    padding: sizeBlock.getWidthSize(10),
    ...universalStyle.spaceBetween,
  },
});
