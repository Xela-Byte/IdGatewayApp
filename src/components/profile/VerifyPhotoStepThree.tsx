import {Image, Pressable, View} from 'react-native';
import CheckIcon from 'react-native-vector-icons/AntDesign';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {verifyPhotoStyle} from '../../styles/VerifyPhotoStyle';
import {VerifyPhotoScreenProps} from '../../types/navigation/ExploreNavigationType';
import CustomText from '../text/CustomText';
import CameraIcon from '../../assets/svgs/CameraIcon';

type Props = {
  handleFunction: () => void;
  navigation: VerifyPhotoScreenProps['navigation'];
};

const VerifyPhotoStepThree = ({handleFunction, navigation}: Props) => {
  return (
    <View style={verifyPhotoStyle.container}>
      <CameraIcon />
      <View style={verifyPhotoStyle.content}>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(40),
          }}
          fontSize={fontSize.medium - 5}
          fontType="semiBold">
          Verification Success
        </CustomText>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}
          fontSize={fontSize.small - 2}>
          Your photo has been sucessfully verified
        </CustomText>
      </View>

      <Pressable
        style={verifyPhotoStyle.startButton}
        onPress={() => {
          handleFunction();
        }}>
        <CustomText color={appColors.white}>Continue</CustomText>
      </Pressable>
    </View>
  );
};

export default VerifyPhotoStepThree;
