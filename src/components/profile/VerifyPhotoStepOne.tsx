import {Image, Pressable, View} from 'react-native';
import CheckIcon from 'react-native-vector-icons/AntDesign';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import CustomText from '../text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {verifyPhotoStyle} from '../../styles/VerifyPhotoStyle';
import {useState} from 'react';
import {VerifyPhotoScreenProps} from '../../types/navigation/ExploreNavigationType';

type Props = {
  handleFunction: () => void;
  navigation: VerifyPhotoScreenProps['navigation'];
};

const VerifyPhotoStepOne = ({handleFunction, navigation}: Props) => {
  return (
    <>
      <View style={verifyPhotoStyle.imageContent}>
        <Image source={LadyEbony} style={verifyPhotoStyle.image} />
        <CheckIcon
          style={verifyPhotoStyle.imageIcon}
          size={fontSize.small + 3}
          name="checkcircle"
          color={appColors.blue}
        />
      </View>
      <View style={verifyPhotoStyle.content}>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(40),
          }}
          fontSize={fontSize.medium - 5}
          fontType="semiBold">
          Verify Photo
        </CustomText>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}
          fontSize={fontSize.small - 2}>
          Help us keep the community safe by verifying your image. Thank you
        </CustomText>
        <CustomText
          fontType="medium"
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}
          fontSize={fontSize.small - 2}>
          We will not post this picture on your account but a blue tick will be
          attached to your profile
        </CustomText>
      </View>

      <Pressable
        style={verifyPhotoStyle.startButton}
        onPress={() => {
          handleFunction();
        }}>
        <CustomText color={appColors.white}>Got it</CustomText>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}>
        <CustomText color={appColors.blue}>Skip</CustomText>
      </Pressable>
    </>
  );
};

export default VerifyPhotoStepOne;
