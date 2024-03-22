import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const walletStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    paddingVertical: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
  walletBalance: {
    width: '80%',
    marginLeft: '10%',
    ...universalStyle.centering,
    flexDirection: 'column',
    paddingTop: sizeBlock.getHeightSize(20),
  },
  walletBalanceText: {
    backgroundColor: appColors.lightGrey,
    paddingHorizontal: sizeBlock.getWidthSize(20),
    paddingVertical: sizeBlock.getHeightSize(10),
    borderRadius: borderRadius.full,
    marginTop: sizeBlock.getHeightSize(20),
  },
  adContainer: {
    width: '100%',
    marginTop: sizeBlock.getHeightSize(35),
    ...universalStyle.spaceBetween,
  },
  adContent: {
    width: '48%',
    paddingHorizontal: sizeBlock.getWidthSize(10),
    paddingVertical: sizeBlock.getHeightSize(15),
    borderRadius: borderRadius.medium,
    ...universalStyle.spaceBetween,
  },
  adSubContent: {
    width: '60%',
  },
  streakContainer: {
    width: screenWidth,
    height: sizeBlock.getHeightSize(200),
    marginVertical: sizeBlock.getHeightSize(35),
    marginLeft: -sizeBlock.getWidthSize(20),
    backgroundColor: appColors.pink,
    padding: sizeBlock.getWidthSize(20),
  },
  streakContent: {
    width: '100%',
    height: sizeBlock.getHeightSize(200),
    backgroundColor: appColors.white,
    padding: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.small,
  },
  streakHeader: {
    width: '100%',
    padding: sizeBlock.getHeightSize(10),
    borderRadius: borderRadius.small,
  },
  streakCoinWrapper: {
    width: '100%',
    paddingTop: sizeBlock.getHeightSize(20),
    paddingHorizontal: sizeBlock.getWidthSize(10),
    ...universalStyle.spaceBetween,
  },
  streakCoinContainer: {
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  progressBarContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(5),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.lightGrey,
    marginTop: sizeBlock.getHeightSize(25),
  },
  progressBar: {
    width: '60%',
    height: '100%',
    borderRadius: borderRadius.full,
  },
  dayCountWrapper: {
    width: '100%',
    paddingTop: sizeBlock.getHeightSize(20),
    ...universalStyle.spaceBetween,
  },
  dayCountContainer: {
    ...universalStyle.centering,
  },
  checkButton: {
    width: '100%',
    ...universalStyle.centering,
    paddingTop: sizeBlock.getHeightSize(30),
  },
  referralContainer: {
    width: '100%',
    borderRadius: borderRadius.medium,
    height: sizeBlock.getHeightSize(150),
    backgroundColor: appColors.pink,
    marginTop: sizeBlock.getHeightSize(60),
    marginBottom: sizeBlock.getHeightSize(30),
    ...universalStyle.spaceEvenly,
    padding: sizeBlock.getWidthSize(15),
  },
  referralContent: {
    width: '70%',
  },
});
