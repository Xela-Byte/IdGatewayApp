import {Image, Pressable, View} from 'react-native';
import {
  CameraType,
  ImagePickerResponse,
  launchCamera,
} from 'react-native-image-picker';
import {
  default as CheckIcon,
  default as PlusIcon,
} from 'react-native-vector-icons/AntDesign';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {verifyPhotoStyle} from '../../styles/VerifyPhotoStyle';
import {VerifyPhotoScreenProps} from '../../types/navigation/ExploreNavigationType';
import CustomText from '../text/CustomText';
import {useState} from 'react';

type Props = {
  handleFunction: () => void;
  navigation: VerifyPhotoScreenProps['navigation'];
};

const VerifyPhotoStepTwo = ({handleFunction, navigation}: Props) => {
  const [imageURI, setImageURI] = useState<string | undefined>('');
  const takePhoto = () => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}).then(
      (res: ImagePickerResponse) => {
        setImageURI(res.assets ? res.assets[0].uri : '');
      },
    );
  };

  return (
    <>
      <View style={verifyPhotoStyle.imageContainer}>
        <View style={verifyPhotoStyle.imageContent}>
          <Image source={LadyEbony} style={verifyPhotoStyle.image} />
          <CheckIcon
            style={verifyPhotoStyle.imageIcon}
            size={fontSize.small + 3}
            name="checkcircle"
            color={appColors.blue}
          />
        </View>
        {imageURI && (
          <Image
            source={{
              uri: imageURI,
            }}
            style={verifyPhotoStyle.image}
          />
        )}

        {!imageURI && (
          <Pressable
            style={verifyPhotoStyle.addPhotoContainer}
            onPress={() => {
              takePhoto();
            }}>
            <PlusIcon
              name="pluscircle"
              size={fontSize.medium}
              color={appColors.blue}
            />
          </Pressable>
        )}
      </View>

      <View style={verifyPhotoStyle.content}>
        <CustomText
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(40),
          }}
          fontSize={fontSize.medium - 5}
          fontType="semiBold">
          {!imageURI ? 'Strike this pose' : 'Review and save your photo'}
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

      {!imageURI ? (
        <Pressable
          style={verifyPhotoStyle.startButton}
          onPress={() => {
            takePhoto();
          }}>
          <CustomText color={appColors.white}>Take my photo</CustomText>
        </Pressable>
      ) : (
        <>
          <Pressable
            style={verifyPhotoStyle.startButton}
            onPress={() => {
              handleFunction();
            }}>
            <CustomText color={appColors.white}>Agree and submit</CustomText>
          </Pressable>

          <Pressable
            onPress={() => {
              takePhoto();
            }}>
            <CustomText color={appColors.blue}>Retake</CustomText>
          </Pressable>
        </>
      )}
    </>
  );
};

export default VerifyPhotoStepTwo;
