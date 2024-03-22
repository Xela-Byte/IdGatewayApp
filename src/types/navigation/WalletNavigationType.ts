import {NavigationProp, RouteProp} from '@react-navigation/native';

export type WalletStackParamList = {
  WalletScreen: undefined;
};

export type WalletScreenProps = {
  navigation: NavigationProp<WalletStackParamList, 'WalletScreen'>;
};
