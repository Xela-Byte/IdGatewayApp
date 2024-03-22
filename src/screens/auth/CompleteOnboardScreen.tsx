import {Pressable, View} from 'react-native';
import CarbonFaceIcon from '../../assets/svgs/CarbonFaceIcon';
import GradientBackground from '../../components/background/GradientBackground';
import CustomText from '../../components/text/CustomText';
import {completeOnboardStyle} from '../../styles/CompleteOnboardStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {CompleteOnboardScreenProps} from '../../types/navigation/AuthNavigationType';

const CompleteOnboardScreen = ({navigation}: CompleteOnboardScreenProps) => {
  return (
    <GradientBackground>
      <View style={completeOnboardStyle.content}>
        <CarbonFaceIcon />
        <CustomText
          color={appColors.white}
          fontType="semiBold"
          fontSize={fontSize.medium - 5}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
          }}>
          It's time to personalise your experiences.
        </CustomText>
        <CustomText
          color={appColors.white}
          fontType="regular"
          fontSize={fontSize.small - 3}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(15),
          }}>
          To enable us provide best matches to you, we require you fill these
          and also complete your profile.
        </CustomText>
        <View style={completeOnboardStyle.footer}>
          <Pressable
            style={completeOnboardStyle.buttonContainer}
            onPress={() => {
              navigation.navigate('PersonalizationScreen');
            }}>
            <CustomText
              fontSize={fontSize.small - 1}
              fontType="medium"
              customStyle={{textAlign: 'center'}}>
              Continue
            </CustomText>
          </Pressable>
          <CustomText
            color={appColors.white}
            fontType="regular"
            customStyle={{
              textAlign: 'center',
              marginTop: sizeBlock.getHeightSize(30),
            }}
            fontSize={fontSize.small - 2}>
            We want to to provide you with the best so you can enjoy the loving
            experience of the community.
          </CustomText>
        </View>
      </View>
    </GradientBackground>
  );
};

export default CompleteOnboardScreen;
