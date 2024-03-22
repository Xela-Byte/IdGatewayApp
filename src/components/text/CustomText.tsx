import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
} from 'react-native';
import {
  appColors,
  fontSize as fontSizes,
  fontFamily,
} from '../../styles/UniversalStyle';

type Props = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  customStyle?: StyleProp<TextStyle>;
  numLine?: number | undefined;
  fontType?: keyof typeof fontFamily;
};

/**
 * CustomText is a simple text wrapper that wraps text for easier and defualt styling.
 *
 * ## Usage
 * ```js
 *      <CustomText>
          Lorem ipusm dolor
        </CustomText>
 *     />
 * ```
 */

const CustomText = ({
  children,
  color,
  fontSize,
  customStyle,
  numLine,
  fontType,
}: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      numberOfLines={numLine}
      ellipsizeMode="tail"
      style={[
        customStyle,
        {
          color: color
            ? color
            : colorScheme === 'dark'
            ? appColors.black
            : appColors.white,
          fontSize: fontSize ? fontSize : fontSizes.small,
          fontFamily: fontType ? fontFamily[fontType] : fontFamily.regular,
        },
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
