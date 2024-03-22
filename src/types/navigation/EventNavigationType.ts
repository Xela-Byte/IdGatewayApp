import {NavigationProp} from '@react-navigation/native';

export type EventStackParamList = {
  EventsScreen: undefined;
  FilterScreen: undefined;
};

export type EventsScreenProps = {
  navigation: NavigationProp<EventStackParamList, 'EventsScreen'>;
};

export type FilterScreenProps = {
  navigation: NavigationProp<EventStackParamList, 'FilterScreen'>;
};
