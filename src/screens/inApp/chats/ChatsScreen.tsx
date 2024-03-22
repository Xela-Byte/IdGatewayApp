import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from 'react-native-vector-icons/Feather';
import FilterIcon from '../../../assets/svgs/FilterIcon';
import HeartArrowIcon from '../../../assets/svgs/HeartArrowIcon';
import StoryComponent from '../../../components/story/StoryComponent';
import CustomText from '../../../components/text/CustomText';
import {chatsStyle} from '../../../styles/ChatsStyle';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import ChatPreviewComponent from '../../../components/chat/ChatPreviewComponent';
import {ChatsScreenProps} from '../../../types/navigation/ChatNavigationType';
import {nanoid} from '@reduxjs/toolkit';

const ChatsScreen = ({navigation}: ChatsScreenProps) => {
  return (
    <SafeAreaView style={chatsStyle.container}>
      <View style={chatsStyle.content}>
        <View style={chatsStyle.header}>
          <CustomText fontType="medium" fontSize={fontSize.medium}>
            Chats
          </CustomText>
          <SearchIcon
            name="search"
            color={appColors.black}
            size={fontSize.medium - 5}
          />
        </View>

        <CustomText
          customStyle={{marginVertical: sizeBlock.getHeightSize(20)}}
          fontSize={fontSize.small - 2}>
          <CustomText fontType="semiBold" fontSize={fontSize.small - 2}>
            Matches{' '}
          </CustomText>
          (10)
        </CustomText>

        <ScrollView
          horizontal
          scrollEnabled
          contentContainerStyle={chatsStyle.storiesContainer}>
          <Pressable
            style={chatsStyle.storyContent}
            onPress={() => {
              navigation.navigate('LikesScreen');
            }}>
            <LinearGradient
              colors={[
                appColors.onGradientPrimary,
                appColors.onGradientSecondary,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.95]}
              style={chatsStyle.iconContainer}>
              <HeartArrowIcon
                width={sizeBlock.getWidthSize(35)}
                height={sizeBlock.getWidthSize(35)}
              />
            </LinearGradient>
            <CustomText
              customStyle={{marginTop: sizeBlock.getHeightSize(10)}}
              fontType="medium"
              fontSize={fontSize.small - 2}>
              Likes
            </CustomText>
          </Pressable>

          <StoryComponent username="Tara" isActive={false} hasStories={false} />

          <StoryComponent username="Xela" isActive hasStories={true} />
          <StoryComponent username="Sheila" isActive hasStories={false} />
          <StoryComponent username="Tiana" isActive={false} hasStories={true} />
          <StoryComponent
            username="Racheal"
            isActive={false}
            hasStories={false}
          />
          <StoryComponent username="Tonia" isActive hasStories={true} />
          <StoryComponent username="Alayo" isActive hasStories={false} />
          <StoryComponent username="Joy" isActive={false} hasStories={true} />
        </ScrollView>

        <View style={chatsStyle.filterContent}>
          <FilterIcon
            width={sizeBlock.getWidthSize(30)}
            height={sizeBlock.getWidthSize(30)}
            onPress={() => {}}
          />
          <CustomText
            customStyle={{marginLeft: sizeBlock.getWidthSize(10)}}
            fontType="semiBold"
            fontSize={fontSize.small - 2}>
            Most Recent
          </CustomText>
        </View>

        <ScrollView style={chatsStyle.chatWrapper}>
          <Pressable
            onPress={() => {
              navigation.navigate('MessagingScreen', {
                userID: nanoid(),
                username: 'Kie Kie',
              });
            }}>
            <ChatPreviewComponent
              hasStories
              isActive
              message="How are you doing?"
              username="Kie Kie"
            />
          </Pressable>
          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />

          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />

          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />

          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />

          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />

          <ChatPreviewComponent
            hasStories={false}
            isActive
            message="When is your birthday?"
            username="Xela"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
