import {View, Text, SafeAreaView} from 'react-native';
import {notificationStyle} from '../../../styles/notificationStyle';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import {NotificationsScreenProps} from '../../../types/navigation/NotificationNavigationType';
import SearchIcon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import CustomText from '../../../components/text/CustomText';
import NotificationsTab from '../../../utils/navigation/inApp/NotificationsTab';

const NotificationsScreen = ({navigation}: NotificationsScreenProps) => {
  return (
    <SafeAreaView style={notificationStyle.container}>
      <View style={notificationStyle.content}>
        <View style={notificationStyle.header}>
          <ArrowIcon
            name="chevron-left"
            color={appColors.black}
            size={fontSize.medium}
            onPress={navigation.goBack}
          />
          <CustomText fontType="semiBold">Notifications</CustomText>
          <SearchIcon
            name="search"
            color={appColors.black}
            size={fontSize.medium - 5}
          />
        </View>

        <NotificationsTab />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
