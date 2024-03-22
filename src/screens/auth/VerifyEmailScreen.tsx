import {View} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import CLockIcon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import GradientBackground from '../../components/background/GradientBackground';
import PinCodeComponent from '../../components/pinCode/PinCodeComponent';
import CustomText from '../../components/text/CustomText';
import {emailRegisterStyle} from '../../styles/EmailRegisterStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {VerifyEmailScreenProps} from '../../types/navigation/AuthNavigationType';

const VerifyEmailScreen = ({navigation}: VerifyEmailScreenProps) => {
  const {control} = useForm();
  const ref = useRef<any>();
  const [pin, setPin] = useState('');

  const handlePinChange = (value: string) => {
    setPin(value);
  };

  useEffect(() => {
    if (pin.length === 5) {
      navigation.navigate('PhoneNumberScreen');
    }
  }, [pin]);

  return (
    <GradientBackground>
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
          Verify your email
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
            ieze3265@gmail.com
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
          Change Email
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

export default VerifyEmailScreen;
