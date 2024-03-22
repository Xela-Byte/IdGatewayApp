import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const filterStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    width: '100%',
    marginTop: sizeBlock.getHeightSize(30),
    paddingBottom: sizeBlock.getHeightSize(10),
    flexDirection: 'row',
    borderBottomColor: appColors.lightGrey,
    borderBottomWidth: 2,
  },
  dateFilter: {
    width: '100%',
    marginBottom: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
  },
  dateSubFilter: {
    width: '100%',
    ...universalStyle.spaceBetween,
  },
  divider: {
    backgroundColor: appColors.lightGrey,
    width: '98%',
    height: sizeBlock.getHeightSize(2),
    borderRadius: borderRadius.small,
    marginTop: sizeBlock.getHeightSize(10),
  },
  slider: {
    marginVertical: sizeBlock.getHeightSize(20),
    paddingRight: sizeBlock.getWidthSize(20),
  },
  langFilter: {
    ...universalStyle.spaceBetween,
  },
});
