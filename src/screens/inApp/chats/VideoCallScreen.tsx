import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import {default as MicIcon} from 'react-native-vector-icons/FontAwesome';
import CameraIcon from 'react-native-vector-icons/Ionicons';
import DeclineIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import LadyWhite from '../../../assets/images/lady-white.jpg';
import {callStyle} from '../../../styles/CallStyle';
import {appColors, fontSize} from '../../../styles/UniversalStyle';
import {videoCallStyle} from '../../../styles/VideoCallStyle';
import {VideoCallScreenProps} from '../../../types/navigation/ChatNavigationType';

const VideoCallScreen = ({navigation}: VideoCallScreenProps) => {
  return (
    <SafeAreaView style={callStyle.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ArrowIcon
        name="chevron-left"
        color={appColors.black}
        style={callStyle.downIcon}
        onPress={navigation.goBack}
      />
      <View style={[callStyle.callImageContainer, {opacity: 0}]} />
      <Image source={LadyWhite} style={callStyle.callerImage} />
      <Image source={LadyEbony} style={callStyle.userImage} />
      <View style={videoCallStyle.content}>
        <View style={videoCallStyle.iconContainer}>
          <CameraIcon
            name="camera-reverse"
            size={fontSize.medium}
            color={appColors.white}
          />
        </View>
        <LinearGradient
          colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.95]}
          style={videoCallStyle.declineIcon}>
          <DeclineIcon
            name="phone-hangup"
            color={appColors.white}
            size={fontSize.medium}
          />
        </LinearGradient>

        <View style={videoCallStyle.iconContainer}>
          <MicIcon
            name="microphone"
            size={fontSize.medium}
            color={appColors.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoCallScreen;
