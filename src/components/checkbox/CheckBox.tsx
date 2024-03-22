import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import CheckIcon from 'react-native-vector-icons/AntDesign';

type Props = {
  title: string;
  checked: boolean;
  onPress: () => void;
};

const CheckBox = ({checked, title, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <CustomText fontType="semiBold" fontSize={fontSize.small - 2}>
        {title}
      </CustomText>
      <CheckIcon
        name={checked ? 'checkcircle' : 'checkcircleo'}
        size={fontSize.small}
        color={checked ? appColors.onGradientPrimary : appColors.grey}
        style={{marginLeft: 'auto'}}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getHeightSize(50),
    marginBottom: sizeBlock.getHeightSize(20),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.small,
    paddingHorizontal: sizeBlock.getWidthSize(15),
    ...universalStyle.verticalCentering,
  },
});

export default CheckBox;
