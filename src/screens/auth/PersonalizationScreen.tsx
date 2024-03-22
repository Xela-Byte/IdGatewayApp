import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, View} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import PersonIcon from '../../assets/svgs/PersonIcon';
import GradientBackground from '../../components/background/GradientBackground';
import PersonalizeBirthday from '../../components/personalization/PersonalizeBirthday';
import PersonalizeFirstName from '../../components/personalization/PersonalizeFirstName';
import PersonalizeGender from '../../components/personalization/PersonalizeGender';
import PersonalizeHopes from '../../components/personalization/PersonalizeHopes';
import PersonalizeImage from '../../components/personalization/PersonalizeImage';
import PersonalizeInterests from '../../components/personalization/PersonalizeInterests';
import PersonalizeMeet from '../../components/personalization/PersonalizeMeet';
import CustomText from '../../components/text/CustomText';
import {setNewUser} from '../../stateManagement/features/auth/authSlice';
import {AppDispatch} from '../../stateManagement/store';
import {personalizationStyle} from '../../styles/PersonalizationStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import {PersonalizationScreenProps} from '../../types/navigation/AuthNavigationType';

const PersonalizationScreen = ({navigation}: PersonalizationScreenProps) => {
  const {control} = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const [level, setLevel] = useState<number>(1);

  const handleLevelIncrease = () => {
    if (level < 7) {
      setLevel(prevLevel => prevLevel + 1);
    } else {
      dispatch(setNewUser());
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

        {level === 1 && (
          <PersonalizeFirstName
            handleLevelIncrease={handleLevelIncrease}
            control={control}
          />
        )}
        {level === 2 && <PersonalizeImage />}
        {level === 3 && <PersonalizeBirthday />}
        {level === 4 && <PersonalizeGender />}
        {level === 5 && <PersonalizeMeet />}
        {level === 6 && <PersonalizeHopes />}
        {level === 7 && <PersonalizeInterests />}

        <View
          style={[
            personalizationStyle.disclaimerContent,
            level > 1 && {marginTop: 0},
          ]}>
          <PersonIcon opacity={level === 2 ? 0 : 1} />
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 3}
            customStyle={{
              width: '70%',
              marginLeft: sizeBlock.getWidthSize(15),
              opacity: level === 2 ? 0 : 1,
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

export default PersonalizationScreen;
