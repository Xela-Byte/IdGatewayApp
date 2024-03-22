import {NavigationProp, RouteProp} from '@react-navigation/native';

export type AuthStackParamList = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  EmailRegisterScreen: undefined;
  PhoneNumberScreen: undefined;
  VerifyEmailScreen: undefined;
  VerifyNumberScreen: undefined;
  CompleteOnboardScreen: undefined;
  PersonalizationScreen: undefined;
};

export type OnboardingScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'OnboardingScreen'>;
};

export type LoginScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'LoginScreen'>;
};

export type RegisterScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'RegisterScreen'>;
};

export type EmailRegisterScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'EmailRegisterScreen'>;
};

export type PhoneNumberScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'PhoneNumberScreen'>;
};

export type VerifyEmailScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'VerifyEmailScreen'>;
};

export type VerifyNumberScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'VerifyNumberScreen'>;
};

export type CompleteOnboardScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'CompleteOnboardScreen'>;
};

export type PersonalizationScreenProps = {
  navigation: NavigationProp<AuthStackParamList, 'PersonalizationScreen'>;
};
