import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const eventStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  eventContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(150),
  },
  eventBG: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.medium,
  },
  eventText: {
    width: '80%',
    position: 'absolute',
    padding: sizeBlock.getWidthSize(20),
  },
  locationFilter: {
    width: '55%',
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
    paddingHorizontal: sizeBlock.getHeightSize(5),
  },
  card: {
    width: '45%',
    height: sizeBlock.getHeightSize(250),
    backgroundColor: appColors.lightGrey,
    paddingBottom: sizeBlock.getWidthSize(10),
    borderRadius: borderRadius.small + 5,
  },
  cardImage: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: borderRadius.small + 5,
    borderTopRightRadius: borderRadius.small + 5,
  },
  notifyContent: {
    width: sizeBlock.getHeightSize(35),
    height: sizeBlock.getHeightSize(35),
    borderRadius: borderRadius.full,
    backgroundColor: appColors.white,
    position: 'absolute',
    elevation: 5,
    right: sizeBlock.getWidthSize(10),
    top: '43%',
    ...universalStyle.centering,
  },
  cardText: {
    width: '100%',
    padding: sizeBlock.getWidthSize(10),
  },
});
