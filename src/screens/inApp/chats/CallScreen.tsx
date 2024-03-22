import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import {callStyle} from '../../../styles/CallStyle';
import {CallScreenProps} from '../../../types/navigation/ChatNavigationType';
import LadyWhite from '../../../assets/images/lady-white.jpg';
import CustomText from '../../../components/text/CustomText';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import DeclineIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CallScreen = ({navigation}: CallScreenProps) => {
  return (
    <SafeAreaView style={callStyle.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ArrowIcon
        name="chevron-down"
        style={callStyle.downIcon}
        onPress={navigation.goBack}
      />
      <View style={callStyle.callImageContainer} />
      <Image source={LadyWhite} style={callStyle.callerImage} />
      <View style={callStyle.content}>
        <CustomText
          fontSize={fontSize.small + 2}
          color={appColors.white}
          customStyle={{
            marginBottom: sizeBlock.getHeightSize(10),
          }}
          fontType="semiBold">
          Kie Kie
        </CustomText>
        <CustomText fontSize={fontSize.small - 4} color={appColors.white}>
          Calling...
        </CustomText>

        <LinearGradient
          colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.95]}
          style={callStyle.declineIcon}>
          <DeclineIcon
            name="phone-hangup"
            color={appColors.white}
            size={fontSize.medium}
          />
        </LinearGradient>

        <CustomText fontSize={fontSize.small - 4} color={appColors.white}>
          Cancel
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default CallScreen;
