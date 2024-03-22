import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import {universalStyle} from '../../styles/UniversalStyle';

type Props = {
  onPress: () => void;
  title: string;
  customViewStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  textSize?: number;
};

const GradientButton = ({
  customTextStyle,
  customViewStyle,
  onPress,
  title,
  textSize,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.95]}
        style={[styles.container, customViewStyle]}>
        <CustomText
          fontSize={textSize ? textSize : fontSize.small}
          customStyle={customTextStyle}
          fontType="medium"
          color={appColors.white}>
          {title}
        </CustomText>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeBlock.getWidthSize(150),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
});

export default GradientButton;
