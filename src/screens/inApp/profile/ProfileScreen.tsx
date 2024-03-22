import {nanoid} from '@reduxjs/toolkit';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import SettingsIcon from 'react-native-vector-icons/Feather';
import CopyIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import EmojiNerdFaceIcon from '../../../assets/svgs/EmojiNerdFaceIcon';
import HeartFillIcon from '../../../assets/svgs/HeartFillIcon';
import ProfileBoostIcon from '../../../assets/svgs/ProfileBoostIcon';
import WalletCoinIcon from '../../../assets/svgs/WalletCoinIcon';
import CustomText from '../../../components/text/CustomText';
import {profileStyle} from '../../../styles/ProfileStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {ProfileScreenProps} from '../../../types/navigation/ExploreNavigationType';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const progressValue = 15;

  return (
    <SafeAreaView style={profileStyle.container}>
      <View style={profileStyle.content}>
        <View style={profileStyle.header}>
          <CustomText fontType="medium" fontSize={fontSize.medium}>
            Profile
          </CustomText>

          <View style={profileStyle.iconContainer}>
            <SettingsIcon
              name="settings"
              size={fontSize.small + 4}
              color={appColors.black}
            />
            <ProfileIcon
              name="account-edit-outline"
              size={fontSize.small + 4}
              color={appColors.black}
              onPress={() => {
                navigation.navigate('ProfileUpdateScreen', {
                  stepsCompleted: 0,
                });
              }}
            />
          </View>
        </View>

        <View style={profileStyle.profileContent}>
          <Pressable
            style={profileStyle.profileProgress}
            onPress={() => {
              navigation.navigate('VerifyPhotoScreen');
            }}>
            <Image source={LadyEbony} style={profileStyle.profileImage} />
            <View
              style={{
                transform: [{rotate: '-180deg'}],
              }}>
              <CircularProgress
                value={progressValue}
                showProgressValue={false}
                radius={sizeBlock.getWidthSize(55)}
                activeStrokeColor={appColors.onGradientPrimary}
                activeStrokeSecondaryColor={appColors.onGradientSecondary}
                inActiveStrokeColor={appColors.lightGrey}
                clockwise={true}
              />
            </View>
            <LinearGradient
              colors={[
                appColors.onGradientPrimary,
                appColors.onGradientSecondary,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.95]}
              style={profileStyle.profileProgressValue}>
              <CustomText
                fontType="semiBold"
                fontSize={fontSize.small - 4}
                color={appColors.white}>
                {progressValue}%
              </CustomText>
            </LinearGradient>
          </Pressable>

          <View style={profileStyle.profileInfo}>
            <CustomText fontSize={fontSize.small + 2} fontType="semiBold">
              Xela Oladipupo, 19
            </CustomText>

            <View style={profileStyle.profileID}>
              <CustomText
                customStyle={{
                  marginTop: sizeBlock.getHeightSize(10),
                }}
                fontSize={fontSize.small - 2}>
                App ID:{' '}
                <CustomText fontSize={fontSize.small - 2} fontType="semiBold">
                  {nanoid().slice(0, 9)}
                </CustomText>
              </CustomText>
              <CopyIcon
                name="copy"
                style={{
                  marginTop: sizeBlock.getWidthSize(10),
                  marginLeft: sizeBlock.getWidthSize(5),
                }}
                color={appColors.grey}
                size={fontSize.small}
              />
            </View>

            <View style={profileStyle.profileStatus}>
              <HeartFillIcon
                width={sizeBlock.getWidthSize(20)}
                height={sizeBlock.getWidthSize(20)}
              />
              <CustomText numLine={1} fontSize={fontSize.small - 6}>
                Open for serious relationship
              </CustomText>
            </View>
          </View>
        </View>

        <Pressable style={profileStyle.profileUpdate}>
          <EmojiNerdFaceIcon />
          <CustomText fontType="medium" fontSize={fontSize.small - 4}>
            Don't be shy, tell us who you are!
          </CustomText>
          <ArrowIcon
            name={'chevron-right'}
            color={appColors.grey}
            size={fontSize.medium}
          />
        </Pressable>

        <View style={profileStyle.actionContainer}>
          <View style={profileStyle.actionContent}>
            <ProfileBoostIcon />
            <View>
              <CustomText fontSize={fontSize.small - 4}>
                Your activity
              </CustomText>
              <CustomText fontType="semiBold">Very High</CustomText>
            </View>
          </View>
          <View style={profileStyle.actionContent}>
            <WalletCoinIcon />
            <View>
              <CustomText fontSize={fontSize.small - 4}>
                Wallet bonus
              </CustomText>
              <CustomText color="green" fontType="semiBold">
                Boost +
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
