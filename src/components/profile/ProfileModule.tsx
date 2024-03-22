import {View} from 'react-native';
import {profileUpdateStyle} from '../../styles/ProfileUpdateStyle';
import CLockIcon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../button/GradientButton';
import CustomText from '../text/CustomText';
import {fontSize, sizeBlock} from '../../styles/UniversalStyle';

type Props = {
  customFunction: () => void;
  deadline: string;
};

const ProfileModule = ({customFunction, deadline}: Props) => {
  return (
    <>
      <View style={profileUpdateStyle.profileStepDate}>
        <CLockIcon name={'clockcircle'} color={'red'} size={fontSize.small} />
        <CustomText fontType="medium" color="red" fontSize={fontSize.small - 4}>
          Deadline: {deadline}
        </CustomText>
      </View>

      <GradientButton
        title="Begin"
        onPress={() => {
          customFunction();
        }}
        textSize={fontSize.small - 6}
        customViewStyle={{
          width: sizeBlock.getWidthSize(80),
          height: sizeBlock.getWidthSize(30),
        }}
      />
    </>
  );
};

export default ProfileModule;
