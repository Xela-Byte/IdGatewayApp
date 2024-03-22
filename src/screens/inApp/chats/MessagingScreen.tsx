import {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import {
  default as ArrowIcon,
  default as MenuIcon,
} from 'react-native-vector-icons/Entypo';
import {
  default as MicIcon,
  default as SendIcon,
  default as VideoCallIcon,
} from 'react-native-vector-icons/FontAwesome';
import CallIcon from 'react-native-vector-icons/Ionicons';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import LadyWhite from '../../../assets/images/lady-white.jpg';
import EmojiSmilingIcon from '../../../assets/svgs/EmojiSmiliingIcon';
import HeartFillIcon from '../../../assets/svgs/HeartFillIcon';
import GradientButton from '../../../components/button/GradientButton';
import CustomText from '../../../components/text/CustomText';
import {messagingStyle} from '../../../styles/MessagingStyle';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {MessagingScreenProps} from '../../../types/navigation/ChatNavigationType';
import {nanoid} from '@reduxjs/toolkit';
import MessagingComponent from '../../../components/messaging/MessagingComponent';

export interface Message {
  id: string;
  self: boolean;
  message: string;
}

const MessagingScreen = ({navigation, route}: MessagingScreenProps) => {
  const [isNewChat, setIsNewChat] = useState(true);
  const [enableSend, setEnableSend] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const {control, watch, setValue} = useForm<{inputMessage: string}>();

  const inputMessage = watch('inputMessage');

  const watchInput = () => {
    inputMessage && inputMessage.length > 0
      ? setEnableSend(true)
      : setEnableSend(false);
    messages && messages.length > 0 && setIsNewChat(false);
  };

  const sendMessage = () => {
    const messageData = {
      id: nanoid(),
      self: inputMessage.length > 10 ? false : true,
      message: inputMessage,
    };
    setMessages(prevMessages => [...prevMessages, messageData]);
    setValue('inputMessage', '');
    Keyboard.dismiss();
  };

  useEffect(() => {
    watchInput();
  }, [inputMessage]);

  return (
    <SafeAreaView style={messagingStyle.container}>
      <View style={messagingStyle.content}>
        <View style={messagingStyle.header}>
          <ArrowIcon
            name={'chevron-left'}
            color={appColors.black}
            size={fontSize.medium}
            onPress={navigation.goBack}
          />

          <View style={messagingStyle.utilityIcons}>
            <CallIcon
              name="call"
              size={fontSize.small + 5}
              color={appColors.grey}
              onPress={() => {
                navigation.navigate('CallScreen');
              }}
            />
            <VideoCallIcon
              name="video-camera"
              size={fontSize.small + 5}
              color={appColors.grey}
              onPress={() => {
                navigation.navigate('VideoCallScreen');
              }}
            />
            <MenuIcon
              name="dots-three-vertical"
              size={fontSize.small + 5}
              color={appColors.grey}
            />
          </View>
        </View>

        {isNewChat && (
          <View style={messagingStyle.infoContainer}>
            <Image source={LadyWhite} style={messagingStyle.infoSubImage} />
            <Image source={LadyEbony} style={messagingStyle.infoImage} />
            <View style={messagingStyle.textContainer}>
              <CustomText
                customStyle={{marginBottom: sizeBlock.getHeightSize(2)}}
                fontType="semiBold">
                Kie Kie, 34
              </CustomText>
              <CustomText
                customStyle={{marginBottom: sizeBlock.getHeightSize(2)}}
                fontSize={fontSize.small - 3}
                numLine={1}>
                Photography, hockey, hiking
              </CustomText>
              <CustomText fontSize={fontSize.small - 3} numLine={1}>
                University of Kentucky
              </CustomText>
            </View>
            <ArrowIcon
              name={'chevron-right'}
              color={appColors.black}
              size={fontSize.medium}
              style={{
                alignSelf: 'center',
              }}
            />
          </View>
        )}

        <View
          style={[
            messagingStyle.footerContainer,
            !isNewChat && {
              height: screenHeight / 1.3,
            },
          ]}>
          {isNewChat && (
            <Animatable.View
              transition={'opacity'}
              style={[
                messagingStyle.newChatBox,
                {
                  opacity: isNewChat ? 1 : 0,
                },
              ]}>
              <HeartFillIcon />
              <CustomText
                fontType="medium"
                customStyle={{
                  textAlign: 'center',
                  marginTop: sizeBlock.getHeightSize(20),
                }}>
                Keep the community safe
              </CustomText>
              <CustomText
                fontSize={fontSize.small - 2}
                customStyle={{
                  textAlign: 'center',
                  marginTop: sizeBlock.getHeightSize(10),
                  marginBottom: sizeBlock.getHeightSize(20),
                }}>
                Kindly keep the community safe and free of hate and violence.
              </CustomText>
              <GradientButton
                title="Got it"
                onPress={() => {
                  setIsNewChat(!isNewChat);
                }}
              />
            </Animatable.View>
          )}

          {messages && <MessagingComponent data={messages} />}
        </View>
      </View>
      <View style={messagingStyle.footer}>
        <PlusIcon
          name="pluscircle"
          size={fontSize.medium}
          color={appColors.grey}
        />
        <View style={messagingStyle.inputContainer}>
          <Controller
            control={control}
            name={'inputMessage'}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={messagingStyle.input}
                placeholderTextColor={appColors.grey}
                placeholder="Write a message..."
              />
            )}
          />
          <EmojiSmilingIcon style={messagingStyle.inputIcon} />
        </View>
        {enableSend && (
          <Pressable
            onPress={() => {
              sendMessage();
            }}>
            <Animatable.View
              duration={500}
              animation={enableSend ? 'zoomIn' : ''}>
              <LinearGradient
                colors={[
                  appColors.onGradientPrimary,
                  appColors.onGradientSecondary,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0, 0.95]}
                style={messagingStyle.sendIconContent}>
                <SendIcon
                  name="send"
                  size={fontSize.small}
                  color={appColors.white}
                />
              </LinearGradient>
            </Animatable.View>
          </Pressable>
        )}

        {!enableSend && (
          <Animatable.View
            duration={500}
            animation={!enableSend ? 'zoomIn' : ''}>
            <MicIcon
              name="microphone"
              size={fontSize.medium}
              color={appColors.onGradientPrimary}
            />
          </Animatable.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MessagingScreen;
