import {Dimensions, StyleSheet, useColorScheme} from 'react-native';
import {sizes} from '../utils/responsiveness/sizeBlock';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const appColors = {
  white: '#FFFFFF',
  black: '#010300',
  gradientPrimary: '#E76031',
  gradientSecondary: '#381207',
  darkOrange: '#AF2A0B',
  lightOrange: '#E55413',
  lightBrown: '#C69054',
  onGradientPrimary: '#E1510F',
  onGradientSecondary: '#AC2809',
  deepOrange: '#F36B2D',
  grey: '#808080',
  textPrimary: '#E1510F',
  lightGrey: '#F0F0F0',
  darkGrey: '#54535A',
  pink: '#FED8C5',
  blue: '#4A95F2',
};

export const sizeBlock = new sizes(screenHeight, screenWidth);

export const fontSize = {
  small: sizeBlock.fontSize(16),
  medium: sizeBlock.fontSize(25),
  large: sizeBlock.fontSize(50),
};

export const fontFamily = {
  light: 'Montserrat-Light',
  thin: 'Montserrat-Thin',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  semiBold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
  lightItalic: 'Montserrat-LightItalic',
  mediumItalic: 'Montserrat-MediumItalic',
  semiBoldItalic: 'Montserrat-SemiBoldItalic',
  boldItalic: 'Montserrat-BoldItalic',
};

export const borderRadius = {
  small: 8,
  medium: 15,
  full: 9999,
};

export const universalStyle = StyleSheet.create({
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticalCentering: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: appColors.white,
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spaceEvenly: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  spaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
