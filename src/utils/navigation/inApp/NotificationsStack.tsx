import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../../../screens/inApp/notifications/NotificationsScreen';
import {NotificationStackParamList} from '../../../types/navigation/NotificationNavigationType';

const NotificationsStack = () => {
  const Stack = createNativeStackNavigator<NotificationStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationsStack;
