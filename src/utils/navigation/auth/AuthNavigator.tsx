import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {AuthStackParamList} from '../../../types/navigation/AuthNavigationType';
import OnboardingScreen from '../../../screens/auth/OnboardingScreen';
import RegisterScreen from '../../../screens/auth/RegisterScreen';
import EmailRegisterScreen from '../../../screens/auth/EmailRegisterScreen';
import PhoneNumberScreen from '../../../screens/auth/PhoneNumberScreen';
import VerifyEmailScreen from '../../../screens/auth/VerifyEmailScreen';
import VerifyNumberScreen from '../../../screens/auth/VerifyNumberScreen';
import CompleteOnboardScreen from '../../../screens/auth/CompleteOnboardScreen';
import PersonalizationScreen from '../../../screens/auth/PersonalizationScreen';
import {useSelector} from 'react-redux';
import {selectFreshInstall} from '../../../stateManagement/features/auth/authSlice';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  const isFreshInstall = useSelector(selectFreshInstall);

  const entitledRoute = () => {
    if (!isFreshInstall) {
      return 'RegisterScreen';
    }
    if (isFreshInstall) {
      return 'OnboardingScreen';
    } else {
      return 'OnboardingScreen';
    }
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={entitledRoute()}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="EmailRegisterScreen"
          component={EmailRegisterScreen}
        />
        <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
        <Stack.Screen
          name="VerifyNumberScreen"
          component={VerifyNumberScreen}
        />
        <Stack.Screen
          name="CompleteOnboardScreen"
          component={CompleteOnboardScreen}
        />
        <Stack.Screen
          name="PersonalizationScreen"
          component={PersonalizationScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
