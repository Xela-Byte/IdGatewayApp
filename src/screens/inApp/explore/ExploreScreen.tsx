import {Image, Pressable, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import FilterIcon from '../../../assets/svgs/FilterIcon';
import SwipeComponent from '../../../components/swipe/SwipeComponent';
import CustomText from '../../../components/text/CustomText';
import {selectFirstUpdate} from '../../../stateManagement/features/auth/authSlice';
import {exploreStyle} from '../../../styles/ExploreStyle';
import {appColors, sizeBlock} from '../../../styles/UniversalStyle';
import {ExploreScreenProps} from '../../../types/navigation/ExploreNavigationType';
import {useTheme} from '@react-navigation/native';

const ExploreScreen = ({navigation}: ExploreScreenProps) => {
  const isFirstUpdate = useSelector(selectFirstUpdate);

  return (
    <SafeAreaView style={[exploreStyle.container]}>
      <View style={exploreStyle.content}>
        <View style={exploreStyle.header}>
          <Pressable
            style={exploreStyle.avatarContainer}
            onPress={() => {
              isFirstUpdate
                ? navigation.navigate('GuidelineScreen')
                : navigation.navigate('ProfileScreen');
            }}>
            <Image source={LadyEbony} style={exploreStyle.avatar} />
          </Pressable>
          <View>
            <CustomText fontType="semiBold" color={appColors.textPrimary}>
              ID Gateway
            </CustomText>
          </View>
          <View>
            <FilterIcon
              width={sizeBlock.getWidthSize(30)}
              height={sizeBlock.getWidthSize(30)}
              onPress={() => {
                navigation.navigate('FilterScreen');
              }}
            />
          </View>
        </View>

        <View style={exploreStyle.swipeContainer}>
          <SwipeComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
