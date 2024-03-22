import {Pressable, View} from 'react-native';
import ArrowRight from 'react-native-vector-icons/Feather';
import OnboardingIcon from '../../assets/svgs/OnboardingIcon';
import GradientBackground from '../../components/background/GradientBackground';
import CustomText from '../../components/text/CustomText';
import {onboardingStyle} from '../../styles/OnboardingStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {OnboardingScreenProps} from '../../types/navigation/AuthNavigationType';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../stateManagement/store';
import {setFreshInstall} from '../../stateManagement/features/auth/authSlice';

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const onboard = () => {
    dispatch(setFreshInstall());
    navigation.navigate('RegisterScreen');
  };
  return (
    <GradientBackground>
      <View style={onboardingStyle.content}>
        <CustomText
          fontType="semiBold"
          color={appColors.white}
          fontSize={fontSize.large - 15}
          customStyle={{
            marginBottom: sizeBlock.getHeightSize(20),
          }}>
          Meet, Love, Connect
        </CustomText>

        <CustomText
          fontType="semiBold"
          color={appColors.white}
          fontSize={fontSize.small}>
          Meet people, connect and feel loved.
        </CustomText>

        <View style={onboardingStyle.iconContainer}>
          <OnboardingIcon />
        </View>

        <View style={onboardingStyle.nextButtonWrapper}>
          <View style={onboardingStyle.nextButtonContainer}>
            <Pressable
              style={onboardingStyle.nextButton}
              onPress={() => {
                onboard();
              }}>
              <ArrowRight
                size={fontSize.small + 4}
                color={appColors.black}
                name={'arrow-right'}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </GradientBackground>
  );
};

export default OnboardingScreen;
