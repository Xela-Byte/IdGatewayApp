import {View, Text, Pressable} from 'react-native';
import GradientBackground from '../../components/background/GradientBackground';
import CustomText from '../../components/text/CustomText';
import {RegisterScreenProps} from '../../types/navigation/AuthNavigationType';
import {registerStyle} from '../../styles/RegisterStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import GoogleIcon from '../../assets/svgs/GoogleIcon';
import FacebookIcon from '../../assets/svgs/FacebookIcon';
import MailIcon from '../../assets/svgs/MailIcon';

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  return (
    <GradientBackground>
      <View style={registerStyle.content}>
        <View style={registerStyle.textContainer}>
          <CustomText
            customStyle={{
              textAlign: 'center',
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            color={appColors.white}
            fontType="semiBold"
            fontSize={fontSize.small + 4}>
            ID Gateway says...
          </CustomText>
          <CustomText
            customStyle={{textAlign: 'center'}}
            color={appColors.white}
            fontType="semiBold"
            fontSize={fontSize.medium + 10}>
            It's your time to find love
          </CustomText>
        </View>

        <View style={registerStyle.buttonWrapper}>
          <Pressable
            style={registerStyle.buttonContainer}
            onPress={() => {
              navigation.navigate('EmailRegisterScreen');
            }}>
            <GoogleIcon style={registerStyle.buttonIcon} />
            <CustomText
              fontSize={fontSize.small - 1}
              fontType="medium"
              customStyle={{marginRight: 'auto'}}>
              Sign in with Google
            </CustomText>
          </Pressable>
          <Pressable
            style={registerStyle.buttonContainer}
            onPress={() => {
              navigation.navigate('EmailRegisterScreen');
            }}>
            <FacebookIcon style={registerStyle.buttonIcon} />
            <CustomText
              fontSize={fontSize.small - 1}
              fontType="medium"
              customStyle={{marginRight: 'auto'}}>
              Sign in with Facebook
            </CustomText>
          </Pressable>
          <Pressable
            style={registerStyle.buttonContainer}
            onPress={() => {
              navigation.navigate('EmailRegisterScreen');
            }}>
            <MailIcon style={registerStyle.buttonIcon} />
            <CustomText
              fontSize={fontSize.small - 1}
              fontType="medium"
              customStyle={{marginRight: 'auto'}}>
              Sign in with Email
            </CustomText>
          </Pressable>
        </View>

        <CustomText
          fontSize={fontSize.small}
          color={appColors.white}
          customStyle={{textAlign: 'center'}}>
          Already have an account?
        </CustomText>

        <CustomText
          fontSize={fontSize.small}
          color={appColors.white}
          fontType="semiBold"
          customStyle={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            marginTop: sizeBlock.getHeightSize(10),
          }}>
          Sign in here
        </CustomText>
      </View>
    </GradientBackground>
  );
};

export default RegisterScreen;
