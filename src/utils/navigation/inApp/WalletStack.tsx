import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletScreen from '../../../screens/inApp/wallet/WalletScreen';
import {WalletStackParamList} from '../../../types/navigation/WalletNavigationType';

const WalletStack = () => {
  const Stack = createNativeStackNavigator<WalletStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
    </Stack.Navigator>
  );
};

export default WalletStack;
