import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CheckBox from '../checkbox/CheckBox';
import {useState} from 'react';

type Props = {};

const PersonalizeGender = (props: Props) => {
  const [gender, setGender] = useState<'Male' | 'Female' | 'None'>('Male');
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
        What is your {'\n'}gender?
      </CustomText>
      <CustomText
        customStyle={{
          marginVertical: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        Choose a gender that best describes you. It would also increase your
        visibility.
      </CustomText>

      <View style={{height: screenHeight / 2}}>
        <CheckBox
          onPress={() => {
            setGender('Male');
          }}
          title="Male"
          checked={gender === 'Male'}
        />
        <CheckBox
          onPress={() => {
            setGender('Female');
          }}
          title="Female"
          checked={gender === 'Female'}
        />
        <CheckBox
          onPress={() => {
            setGender('None');
          }}
          title="None"
          checked={gender === 'None'}
        />
      </View>
    </>
  );
};

export default PersonalizeGender;
