import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CLockIcon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import ProfileAccessIcon from '../../../assets/svgs/ProfileAccessIcon';
import ProfileModule from '../../../components/profile/ProfileModule';
import CustomText from '../../../components/text/CustomText';
import {profileUpdateStyle} from '../../../styles/ProfileUpdateStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {ProfileUpdateScreenProps} from '../../../types/navigation/ExploreNavigationType';
import ProfileCompleteModule from '../../../components/profile/ProfileCompleteModule';

const ProfileUpdateScreen = ({navigation, route}: ProfileUpdateScreenProps) => {
  const {params} = route;
  const {stepsCompleted} = params;

  const navigateToScreen = () => {
    navigation.navigate('ProfileStepScreen');
  };

  return (
    <SafeAreaView style={profileUpdateStyle.container}>
      <View style={profileUpdateStyle.content}>
        <ArrowIcon
          name="chevron-left"
          color={appColors.black}
          size={fontSize.medium}
          onPress={navigation.goBack}
        />
        <CustomText
          customStyle={{marginTop: sizeBlock.getHeightSize(25)}}
          fontType="semiBold"
          fontSize={fontSize.medium - 5}>
          <CustomText
            color={appColors.textPrimary}
            fontType="semiBold"
            fontSize={fontSize.medium - 5}>
            Update Profile{'\n'}
          </CustomText>
          to get full access to{'\n'}other users
        </CustomText>

        <View style={profileUpdateStyle.iconContainer}>
          <ProfileAccessIcon />
        </View>

        <CustomText fontType="medium">Get started</CustomText>
        <View style={profileUpdateStyle.profilePreview}>
          <Image
            source={LadyEbony}
            style={profileUpdateStyle.profilePreviewImage}
          />
          <View style={{width: '60%'}}>
            <CustomText fontType="semiBold">Xela Oladipupo, 19</CustomText>
            <CustomText
              customStyle={{marginTop: sizeBlock.getHeightSize(3)}}
              fontSize={fontSize.small - 2}
              color={appColors.grey}>
              {stepsCompleted} of 5 completed
            </CustomText>
          </View>

          <ArrowIcon
            name="chevron-down"
            color={appColors.black}
            size={fontSize.medium}
          />
        </View>

        <ScrollView style={profileUpdateStyle.profileStepWrapper}>
          <View style={profileUpdateStyle.profileStepContainer}>
            <LinearGradient
              colors={[
                appColors.onGradientPrimary,
                appColors.onGradientSecondary,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.95]}
              style={profileUpdateStyle.profileStepDotContainer}>
              <View style={profileUpdateStyle.profileStepDot} />
            </LinearGradient>
            <View style={profileUpdateStyle.profileStepContent}>
              <CustomText fontType="semiBold">Step 1</CustomText>
              {stepsCompleted === 0 && (
                <ProfileModule
                  customFunction={navigateToScreen}
                  deadline="4 days 23hrs 10mins"
                />
              )}

              {stepsCompleted === 1 && (
                <ProfileCompleteModule
                  onDone={() => {}}
                  onReview={() => {
                    navigateToScreen();
                  }}
                />
              )}
            </View>
          </View>
          {[2, 3, 4, 5, 6].map(item => {
            return (
              <View key={item} style={profileUpdateStyle.profileStepContainer}>
                <LinearGradient
                  colors={[
                    appColors.onGradientPrimary,
                    appColors.onGradientSecondary,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  locations={[0, 0.95]}
                  style={profileUpdateStyle.profileStepDotContainer}
                />

                <View style={profileUpdateStyle.profileStepContent}>
                  <CustomText fontType="semiBold">Step {item}</CustomText>

                  {item !== 2 && stepsCompleted === 1 && (
                    <>
                      <View style={profileUpdateStyle.profileStepDate}>
                        <CLockIcon
                          name={'clockcircle'}
                          color={appColors.grey}
                          size={fontSize.small}
                        />
                        <CustomText
                          fontType="medium"
                          color={appColors.grey}
                          fontSize={fontSize.small - 4}>
                          Previous step is not completed
                        </CustomText>
                      </View>
                      <View style={profileUpdateStyle.profileStepButton}>
                        <CustomText
                          color={appColors.white}
                          fontSize={fontSize.small - 6}>
                          Begin
                        </CustomText>
                      </View>
                    </>
                  )}

                  {item === 2 && stepsCompleted === 1 && (
                    <ProfileModule
                      customFunction={navigateToScreen}
                      deadline="3 days 14hrs 5mins"
                    />
                  )}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileUpdateScreen;
