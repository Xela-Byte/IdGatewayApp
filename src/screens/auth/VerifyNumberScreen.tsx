import {View} from 'react-native';
import {useEffect, useState} from 'react';
import CLockIcon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import GradientBackground from '../../components/background/GradientBackground';
import PinCodeComponent from '../../components/pinCode/PinCodeComponent';
import CustomText from '../../components/text/CustomText';
import {emailRegisterStyle} from '../../styles/EmailRegisterStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {VerifyEmailScreenProps} from '../../types/navigation/AuthNavigationType';

const VerifyNumberScreen = ({navigation}: VerifyEmailScreenProps) => {
  const [pin, setPin] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlePinChange = (value: string) => {
    setPin(value);
  };

  const completeOnboarding = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('CompleteOnboardScreen');
    }, 1500);
  };

  useEffect(() => {
    if (pin.length === 5) {
      completeOnboarding();
    }
  }, [pin]);

  return (
    <GradientBackground>
      {/* <Bubbles size={10} color="#FFF" />/ */}
      <View style={emailRegisterStyle.content}>
        <ArrowIcon
          name={'chevron-left'}
          color={appColors.white}
          size={fontSize.medium}
          onPress={navigation.goBack}
        />
        <CustomText
          color={appColors.white}
          fontType="semiBold"
          fontSize={fontSize.small + 4}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            textAlign: 'center',
          }}>
          Verify your number
        </CustomText>

        <CustomText
          color={appColors.white}
          fontSize={fontSize.small - 2}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            textAlign: 'center',
          }}>
          We sent a confirmation code to the email{' '}
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            fontType="semiBold">
            +2349031330747
          </CustomText>{' '}
          you provided.
        </CustomText>

        <CustomText
          color={appColors.white}
          fontSize={fontSize.small - 2}
          fontType="semiBold"
          customStyle={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            marginTop: sizeBlock.getHeightSize(30),
          }}>
          Change Number
        </CustomText>

        <PinCodeComponent setPinValue={handlePinChange} />

        <View style={[emailRegisterStyle.disclaimerContent]}>
          <CLockIcon
            name={'clockcircle'}
            color={appColors.white}
            size={fontSize.small}
          />
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            customStyle={{
              marginLeft: sizeBlock.getWidthSize(15),
            }}>
            Code will arrive in 1 minute
          </CustomText>
        </View>
      </View>
    </GradientBackground>
  );
};

export default VerifyNumberScreen;
