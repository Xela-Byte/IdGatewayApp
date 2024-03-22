import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import LockIcon from 'react-native-vector-icons/Fontisto';
import GradientBackground from '../../components/background/GradientBackground';
import CustomInput from '../../components/input/CustomInput';
import CustomText from '../../components/text/CustomText';
import {emailRegisterStyle} from '../../styles/EmailRegisterStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {EMAIL_REGEX} from '../../utils/data/Regex';
import {EmailRegisterScreenProps} from '../../types/navigation/AuthNavigationType';

const EmailRegisterScreen = ({navigation}: EmailRegisterScreenProps) => {
  const {control} = useForm();
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
            lineHeight: sizeBlock.getHeightSize(30),
          }}>
          Enter your {'\n'}email
        </CustomText>
        <View style={{width: '90%'}}>
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}>
            We require the email of users in ID Gateway to protect the community
            and make it a safe place.
          </CustomText>
        </View>
        <CustomInput
          name="email"
          control={control}
          placeholder="Enter Email"
          rules={{
            required: 'Please enter email',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
          inputProps={{
            onSubmitEditing: () => {
              navigation.navigate('VerifyEmailScreen');
            },
          }}
        />
        <View style={emailRegisterStyle.disclaimerContent}>
          <LockIcon
            name={'locked'}
            color={appColors.white}
            size={fontSize.small}
          />
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
              marginLeft: sizeBlock.getWidthSize(15),
            }}>
            We would never share this information with anyone and it would not
            be visible on your profile.
          </CustomText>
        </View>
      </View>
    </GradientBackground>
  );
};

export default EmailRegisterScreen;
