import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import AllNotifications from '../../../components/notifications/AllNotifications';
import MessageNotifications from '../../../components/notifications/MessageNotifications';
import LikeNotifications from '../../../components/notifications/LikeNotifications';
import EventNotifications from '../../../components/notifications/EventNotifications';
const Tab = createMaterialTopTabNavigator();

const NotificationsTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        lazy: true,
        tabBarGap: sizeBlock.getWidthSize(15),
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          paddingLeft: sizeBlock.getWidthSize(14),
        },
        tabBarIndicatorContainerStyle: {
          marginLeft: 16,
        },
        tabBarIndicatorStyle: {
          backgroundColor: appColors.darkGrey,
          alignSelf: 'center',
          height: sizeBlock.getHeightSize(3),
          borderRadius: borderRadius.small,
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarLabelStyle: {
          fontSize: fontSize.small,
          fontFamily: fontFamily.medium,
          textTransform: 'capitalize',
          textAlign: 'left',
        },
        tabBarPressColor: 'transparent',
        tabBarPressOpacity: 1,
      })}>
      <Tab.Screen name="All" component={AllNotifications} />
      <Tab.Screen name="Messages" component={MessageNotifications} />
      <Tab.Screen name="Likes" component={LikeNotifications} />
      <Tab.Screen name="Events" component={EventNotifications} />
    </Tab.Navigator>
  );
};

export default NotificationsTab;
