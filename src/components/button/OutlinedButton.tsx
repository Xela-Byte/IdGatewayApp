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

const OutlinedButton = ({
  customTextStyle,
  customViewStyle,
  onPress,
  title,
  textSize,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, customViewStyle]}>
        <CustomText
          fontSize={textSize ? textSize : fontSize.small}
          customStyle={customTextStyle}
          fontType="semiBold"
          color={appColors.textPrimary}>
          {title}
        </CustomText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeBlock.getWidthSize(150),
    height: sizeBlock.getWidthSize(50),
    borderWidth: 2,
    borderColor: appColors.onGradientPrimary,
    ...universalStyle.centering,
    borderRadius: borderRadius.full,
  },
});

export default OutlinedButton;
