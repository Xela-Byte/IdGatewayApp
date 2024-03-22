import {StyleSheet} from 'react-native';
import {sizeBlock, universalStyle} from './UniversalStyle';

export const profileSuccessStyle = StyleSheet.create({
  container: {
    ...universalStyle.container,
    ...universalStyle.centering,
    flexDirection: 'column',
  },
  content: {
    paddingHorizontal: sizeBlock.getWidthSize(50),
  },
});
