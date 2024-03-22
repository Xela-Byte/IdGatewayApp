import {StyleSheet} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  sizeBlock,
  universalStyle,
} from './UniversalStyle';

export const emailRegisterStyle = StyleSheet.create({
  content: {
    paddingTop: sizeBlock.getHeightSize(70),
    paddingHorizontal: sizeBlock.getWidthSize(10),
  },
  disclaimerContent: {
    width: '95%',
    marginTop: sizeBlock.getHeightSize(100),
    ...universalStyle.centering,
  },
  countryPicker: {
    marginTop: sizeBlock.getHeightSize(5),
    marginBottom: sizeBlock.getHeightSize(15),
  },
  countryPickerText: {
    fontFamily: fontFamily.regular,
    color: appColors.black,
  },
  countryPickerInput: {
    width: '100%',
    marginTop: sizeBlock.getHeightSize(30),
    marginBottom: sizeBlock.getHeightSize(50),
    height: sizeBlock.getHeightSize(50),
    borderRadius: borderRadius.small,
    ...universalStyle.flexBetween,
  },
  countryCodeInput: {
    width: '30%',
    height: '100%',
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    ...universalStyle.spaceEvenly,
  },
  phoneNumberInput: {
    width: '65%',
    height: '100%',
    borderRadius: borderRadius.small,
    fontFamily: fontFamily.regular,
    paddingHorizontal: sizeBlock.getWidthSize(10),
    color: appColors.black,
    backgroundColor: appColors.white,
  },
});
