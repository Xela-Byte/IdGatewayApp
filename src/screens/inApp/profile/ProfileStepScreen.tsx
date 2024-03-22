import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, View} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import PersonIcon from '../../../assets/svgs/PersonIcon';
import GradientBackground from '../../../components/background/GradientBackground';
import CustomText from '../../../components/text/CustomText';
import {setNewUser} from '../../../stateManagement/features/auth/authSlice';
import {AppDispatch} from '../../../stateManagement/store';
import {personalizationStyle} from '../../../styles/PersonalizationStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {PersonalizationScreenProps} from '../../../types/navigation/AuthNavigationType';
import ProfileStepOne from '../../../components/profile/ProfileStepOne';
import {ProfileStepScreenProps} from '../../../types/navigation/ExploreNavigationType';

const ProfileStepScreen = ({navigation}: ProfileStepScreenProps) => {
  const [level, setLevel] = useState<number>(1);

  const handleLevelIncrease = () => {
    if (level > 1) {
      setLevel(prevLevel => prevLevel + 1);
    } else {
      navigation.navigate('ProfileSuccessScreen');
    }
  };

  const handleLevelDecrease = () => {
    setLevel(prevLevel => prevLevel - 1);
  };

  return (
    <GradientBackground>
      <View style={personalizationStyle.content}>
        <ArrowIcon
          name={'chevron-left'}
          color={appColors.white}
          size={fontSize.medium}
          onPress={() => {
            level > 1 ? handleLevelDecrease() : navigation.goBack();
          }}
        />
        <View style={personalizationStyle.progressBarContainer}>
          <View
            style={[
              personalizationStyle.progressBar,
              {
                width: `${(level / 7) * 100}%`,
              },
            ]}
          />
        </View>

        <ProfileStepOne />

        <View style={[personalizationStyle.disclaimerContent]}>
          <PersonIcon />
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 3}
            customStyle={{
              width: '70%',
              marginLeft: sizeBlock.getWidthSize(15),
            }}>
            This information will be shown in your profile.
          </CustomText>
          <Pressable
            style={personalizationStyle.iconContainer}
            onPress={() => {
              handleLevelIncrease();
            }}>
            <ArrowIcon
              name={'chevron-right'}
              color={appColors.black}
              size={fontSize.small}
            />
          </Pressable>
        </View>
      </View>
    </GradientBackground>
  );
};

export default ProfileStepScreen;
