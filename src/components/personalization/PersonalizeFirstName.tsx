import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CustomInput from '../input/CustomInput';
import {Control} from 'react-hook-form';

type Props = {
  control: Control;
  handleLevelIncrease: () => void;
};

const PersonalizeFirstName = ({control, handleLevelIncrease}: Props) => {
  return (
    <>
      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
          lineHeight: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.medium - 3}
        fontType="semiBold">
        What's your first{'\n'}name?
      </CustomText>

      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        You won't be able to change this later.{' '}
        <CustomText
          color={appColors.white}
          fontSize={fontSize.small - 3}
          fontType="semiBold">
          Learn more.
        </CustomText>
      </CustomText>

      <CustomInput
        name={'firstName'}
        control={control}
        placeholder="Enter first name"
        rules={{
          required: 'Please enter first name',
        }}
        inputProps={{
          onSubmitEditing: () => {
            handleLevelIncrease();
          },
        }}
      />
    </>
  );
};

export default PersonalizeFirstName;
