import {View} from 'react-native';
import CheckIcon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../button/GradientButton';
import OutlinedButton from '../button/OutlinedButton';
import CustomText from '../text/CustomText';
import {profileUpdateStyle} from '../../styles/ProfileUpdateStyle';
import {fontSize, sizeBlock} from '../../styles/UniversalStyle';

type Props = {
  onDone: () => void;
  onReview: () => void;
};

const ProfileCompleteModule = ({onDone, onReview}: Props) => {
  return (
    <>
      <View style={profileUpdateStyle.profileStepComplete}>
        <CheckIcon size={fontSize.small} name="checkcircle" color={'green'} />
        <CustomText
          fontType="medium"
          color="green"
          fontSize={fontSize.small - 4}>
          Completed
        </CustomText>
      </View>

      <View style={profileUpdateStyle.profileStepButtons}>
        <GradientButton
          title="Done"
          onPress={() => {
            onDone();
          }}
          textSize={fontSize.small - 6}
          customViewStyle={{
            width: sizeBlock.getWidthSize(80),
            height: sizeBlock.getWidthSize(30),
          }}
        />

        <OutlinedButton
          title="Review"
          onPress={() => {
            onReview();
          }}
          textSize={fontSize.small - 6}
          customViewStyle={{
            width: sizeBlock.getWidthSize(80),
            height: sizeBlock.getWidthSize(30),
          }}
        />
      </View>
    </>
  );
};

export default ProfileCompleteModule;
