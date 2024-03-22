import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import BinocularIcon from 'react-native-vector-icons/FontAwesome6';
import {
  default as ChatIcon,
  default as NotificationIcon,
  default as WalletIcon,
} from 'react-native-vector-icons/Ionicons';
import {
  appColors,
  fontFamily,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import ChatsStack from '../inApp/ChatsStack';
import EventsStack from '../inApp/EventsStack';
import ExploreStack from '../inApp/ExploreStack';
import NotificationsStack from '../inApp/NotificationsStack';
import WalletStack from '../inApp/WalletStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: appColors.grey,
          tabBarActiveTintColor: appColors.onGradientPrimary,
          tabBarStyle: {
            height: sizeBlock.getHeightSize(65),
          },
          tabBarLabelStyle: {
            fontFamily: fontFamily.regular,
            fontSize: fontSize.small - 6,
            marginTop: sizeBlock.getHeightSize(-5),
            marginBottom: sizeBlock.getHeightSize(10),
          },
        }}>
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getRouteName(route),
              height: sizeBlock.getHeightSize(65),
            },
            tabBarIcon: ({color = appColors.onGradientPrimary}) => (
              <BinocularIcon
                name="binoculars"
                size={fontSize.small + 4}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Events"
          component={EventsStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getRouteName(route),
              height: sizeBlock.getHeightSize(65),
            },
            tabBarIcon: ({color = appColors.onGradientPrimary}) => (
              <CalendarIcon
                name="calendar"
                size={fontSize.small + 4}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getRouteName(route),
              height: sizeBlock.getHeightSize(65),
            },
            tabBarIcon: ({color = appColors.onGradientPrimary}) => (
              <ChatIcon
                name="chatbubble-ellipses-outline"
                size={fontSize.small + 4}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getRouteName(route),
              height: sizeBlock.getHeightSize(65),
            },
            tabBarIcon: ({color = appColors.onGradientPrimary}) => (
              <NotificationIcon
                name="notifications-outline"
                size={fontSize.small + 4}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getRouteName(route),
              height: sizeBlock.getHeightSize(65),
            },
            tabBarIcon: ({color = appColors.onGradientPrimary}) => (
              <WalletIcon
                name="wallet-outline"
                size={fontSize.small + 4}
                color={color}
              />
            ),
          })}
        />
      </Tab.Navigator>
    </>
  );
};

const blacklistScreens = [
  'ExploreScreen',
  'EventsScreen',
  'ChatsScreen',
  'NotificationsScreen',
];

const getRouteName = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return 'flex';
};

export default BottomTabNavigator;
