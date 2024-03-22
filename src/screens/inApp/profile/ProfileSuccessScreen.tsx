import {SafeAreaView, StatusBar} from 'react-native';
import {View, Text} from 'react-native';
import {profileSuccessStyle} from '../../../styles/ProfileSuccessStyle';
import ProfileUpdateIcon from '../../../assets/svgs/ProfileUpdateIcon';
import CustomText from '../../../components/text/CustomText';
import {fontSize, screenWidth, sizeBlock} from '../../../styles/UniversalStyle';
import GradientButton from '../../../components/button/GradientButton';
import {
  ProfileScreenProps,
  ProfileSuccessScreenProps,
} from '../../../types/navigation/ExploreNavigationType';

type Props = {};

const ProfileSuccessScreen = ({navigation}: ProfileSuccessScreenProps) => {
  const navigateToScreen = () => {
    navigation.navigate('ProfileUpdateScreen', {
      stepsCompleted: 1,
    });
  };
  return (
    <SafeAreaView style={profileSuccessStyle.container}>
      <StatusBar barStyle={'dark-content'} />
      <ProfileUpdateIcon />

      <View style={profileSuccessStyle.content}>
        <CustomText
          customStyle={{textAlign: 'center'}}
          fontSize={fontSize.medium - 5}
          fontType="semiBold">
          Profile Updated Successfully
        </CustomText>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}
          fontSize={fontSize.small - 2}>
          Your profile has been successfully updated. You can continue with our
          amazing offers
        </CustomText>
      </View>

      <GradientButton
        customViewStyle={{
          width: screenWidth * 0.8,
          marginTop: sizeBlock.getHeightSize(30),
        }}
        onPress={() => {
          navigateToScreen();
        }}
        title="Continue"
      />
    </SafeAreaView>
  );
};

export default ProfileSuccessScreen;
