import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '../../../screens/inApp/explore/ExploreScreen';
import {EventStackParamList} from '../../../types/navigation/EventNavigationType';
import EventsScreen from '../../../screens/inApp/events/EventsScreen';
import FilterScreen from '../../../screens/inApp/filter/FilterScreen';

const EventsStack = () => {
  const Stack = createNativeStackNavigator<EventStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
