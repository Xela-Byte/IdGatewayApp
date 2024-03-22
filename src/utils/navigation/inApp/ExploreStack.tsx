import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '../../../screens/inApp/explore/ExploreScreen';
import {ExploreStackParamList} from '../../../types/navigation/ExploreNavigationType';
import FilterScreen from '../../../screens/inApp/filter/FilterScreen';
import ProfileScreen from '../../../screens/inApp/profile/ProfileScreen';
import ProfileUpdateScreen from '../../../screens/inApp/profile/ProfileUpdateScreen';
import ProfileStepScreen from '../../../screens/inApp/profile/ProfileStepScreen';
import ProfileSuccessScreen from '../../../screens/inApp/profile/ProfileSuccessScreen';
import GuidelineScreen from '../../../screens/inApp/profile/GuidelineScreen';
import VerifyPhotoScreen from '../../../screens/inApp/profile/VerifyPhotoScreen';

const ExploreStack = () => {
  const Stack = createNativeStackNavigator<ExploreStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="GuidelineScreen" component={GuidelineScreen} />
      <Stack.Screen name="VerifyPhotoScreen" component={VerifyPhotoScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileUpdateScreen"
        component={ProfileUpdateScreen}
      />
      <Stack.Screen name="ProfileStepScreen" component={ProfileStepScreen} />
      <Stack.Screen
        name="ProfileSuccessScreen"
        component={ProfileSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
