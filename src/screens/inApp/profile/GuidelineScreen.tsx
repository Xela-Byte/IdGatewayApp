import {View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import GradientBackground from '../../../components/background/GradientBackground';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../../styles/UniversalStyle';
import {GuidelineScreenProps} from '../../../types/navigation/ExploreNavigationType';
import {
  GuidelineDataType,
  guidelineData,
} from '../../../utils/data/GuidelineData';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../stateManagement/store';
import {setFirstUpdate} from '../../../stateManagement/features/auth/authSlice';

type OnboardProps = {
  item: GuidelineDataType;
};

const GuidelineScreen = ({navigation}: GuidelineScreenProps) => {
  const keyExtractor = (item: GuidelineDataType) => item.title;

  const renderItem = ({item}: OnboardProps) => {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: '80%',
          paddingHorizontal: sizeBlock.getWidthSize(10),
        }}>
        {item.icon}
        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(20),
            lineHeight: sizeBlock.getHeightSize(30),
          }}
          color={appColors.white}
          fontSize={fontSize.medium - 3}
          fontType="semiBold">
          {item.title}
        </CustomText>
        <CustomText
          customStyle={{
            marginVertical: sizeBlock.getHeightSize(20),
          }}
          color={appColors.white}
          fontSize={fontSize.small - 3}
          fontType="regular">
          {item.subtitle}
        </CustomText>
      </View>
    );
  };

  const dispatch = useDispatch<AppDispatch>();

  const onComplete = () => {
    dispatch(setFirstUpdate());
    navigation.navigate('ProfileUpdateScreen', {
      stepsCompleted: 0,
    });
  };

  return (
    <GradientBackground>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        dotStyle={{display: 'none'}}
        activeDotStyle={{display: 'none'}}
        renderNextButton={() => {
          return (
            <View
              style={[
                {
                  backgroundColor: appColors.white,
                  marginBottom: sizeBlock.getHeightSize(50),
                  height: sizeBlock.getHeightSize(50),
                  borderRadius: borderRadius.full,
                },
                universalStyle.centering,
              ]}>
              <CustomText>Got it</CustomText>
            </View>
          );
        }}
        renderDoneButton={() => {
          return (
            <View
              style={[
                {
                  backgroundColor: appColors.white,
                  marginBottom: sizeBlock.getHeightSize(50),
                  height: sizeBlock.getHeightSize(50),
                  borderRadius: borderRadius.full,
                },
                universalStyle.centering,
              ]}>
              <CustomText>Got it</CustomText>
            </View>
          );
        }}
        bottomButton
        showSkipButton={false}
        data={guidelineData}
        onDone={() => {
          onComplete();
        }}
      />
    </GradientBackground>
  );
};

export default GuidelineScreen;
