import {NavigationProp, RouteProp} from '@react-navigation/native';

export type ExploreStackParamList = {
  ExploreScreen: undefined;
  FilterScreen: undefined;
  ProfileScreen: undefined;
  ProfileUpdateScreen: {
    stepsCompleted: number;
  };
  ProfileStepScreen: undefined;
  ProfileSuccessScreen: undefined;
  GuidelineScreen: undefined;
  VerifyPhotoScreen: undefined;
};

export type ExploreScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'ExploreScreen'>;
};

export type FilterScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'FilterScreen'>;
};

export type ProfileScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'ProfileScreen'>;
};

export type ProfileUpdateScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'ProfileUpdateScreen'>;
  route: RouteProp<ExploreStackParamList, 'ProfileUpdateScreen'>;
};

export type ProfileStepScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'ProfileStepScreen'>;
};

export type ProfileSuccessScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'ProfileSuccessScreen'>;
};

export type GuidelineScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'GuidelineScreen'>;
};

export type VerifyPhotoScreenProps = {
  navigation: NavigationProp<ExploreStackParamList, 'VerifyPhotoScreen'>;
};
