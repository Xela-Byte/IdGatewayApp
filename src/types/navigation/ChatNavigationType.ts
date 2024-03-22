import {NavigationProp, RouteProp} from '@react-navigation/native';

export type ChatStackParamList = {
  ChatsScreen: undefined;
  LikesScreen: undefined;
  MessagingScreen: {
    userID: string;
    username: string;
  };
  CallScreen: undefined;
  VideoCallScreen: undefined;
};

export type ChatsScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'ChatsScreen'>;
};

export type LikesScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'LikesScreen'>;
};

export type MessagingScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'MessagingScreen'>;
  route: RouteProp<ChatStackParamList, 'MessagingScreen'>;
};

export type CallScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'CallScreen'>;
};

export type VideoCallScreenProps = {
  navigation: NavigationProp<ChatStackParamList, 'VideoCallScreen'>;
};
