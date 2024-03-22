import {TextStyle} from 'react-native';

export interface SwitchType {
  buttonWidth?: number;
  buttonPadding?: number | undefined;
  buttonColor?: string;
  buttonBorderWidth?: number | undefined;
  buttonBorderColor?: string | undefined;
  buttonText?: string | undefined;
  buttonTextStyle?: TextStyle;
  switchWidth?: number;
  switchBackgroundColor?: any;
  switchBorderWidth?: number | undefined;
  switchBorderColor?: string;
  switchLeftText?: string;
  switchLeftTextStyle?: TextStyle;
  switchRightText?: string;
  switchRightTextStyle?: TextStyle;
  onSwitch?: () => void;
  onSwitchReverse?: () => void;
  onSwitchButtonText?: string;
  onSwitchButtonTextStyle?: TextStyle;
  onSwitchBackgroundColor?: string | undefined;
  animationSpeed?: number;
  startOnLeft?: boolean;
  disabled?: boolean;
}
