import {StyleSheet} from 'react-native';
import {sizeBlock, universalStyle} from './UniversalStyle';

export const notificationStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
  },
  content: {
    width: '100%',
    height: '100%',
    paddingHorizontal: sizeBlock.getWidthSize(20),
  },
  header: {
    ...universalStyle.spaceBetween,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
});
