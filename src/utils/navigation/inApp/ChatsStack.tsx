import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatsScreen from '../../../screens/inApp/chats/ChatsScreen';
import {ChatStackParamList} from '../../../types/navigation/ChatNavigationType';
import LikesScreen from '../../../screens/inApp/chats/LikesScreen';
import MessagingScreen from '../../../screens/inApp/chats/MessagingScreen';
import CallScreen from '../../../screens/inApp/chats/CallScreen';
import VideoCallScreen from '../../../screens/inApp/chats/VideoCallScreen';

const ChatsStack = () => {
  const Stack = createNativeStackNavigator<ChatStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
      <Stack.Screen name="LikesScreen" component={LikesScreen} />
      <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
      <Stack.Screen name="CallScreen" component={CallScreen} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
    </Stack.Navigator>
  );
};

export default ChatsStack;
