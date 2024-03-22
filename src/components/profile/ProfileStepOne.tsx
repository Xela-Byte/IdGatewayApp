import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CheckBox from '../checkbox/CheckBox';
import {useState} from 'react';

type Props = {};

const ProfileStepOne = (props: Props) => {
  const [isMarried, setIsMarried] = useState<boolean>(true);
  return (
    <View>
      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
          lineHeight: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.medium - 3}
        fontType="semiBold">
        Have you been{'\n'}married before?
      </CustomText>

      <CustomText
        customStyle={{
          marginVertical: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        Answer yes or no to the above questions.{'\n'}You are been vetted based
        on your reply
      </CustomText>

      <CheckBox
        onPress={() => {
          setIsMarried(true);
        }}
        title="Yes"
        checked={isMarried}
      />
      <CheckBox
        onPress={() => {
          setIsMarried(false);
        }}
        title="No"
        checked={!isMarried}
      />
    </View>
  );
};

export default ProfileStepOne;
