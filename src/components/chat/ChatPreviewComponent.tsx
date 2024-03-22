import {View, Text} from 'react-native';
import {chatsStyle} from '../../styles/ChatsStyle';
import StoryComponent from '../story/StoryComponent';
import CustomText from '../text/CustomText';
import {fontSize} from '../../styles/UniversalStyle';

type Props = {
  username: string;
  message: string;
  hasStories: boolean;
  isActive: boolean;
};

const ChatPreviewComponent = ({
  message,
  username,
  hasStories,
  isActive,
}: Props) => {
  return (
    <View style={chatsStyle.chatContainer}>
      <StoryComponent scale={0.8} isActive={isActive} hasStories={hasStories} />
      <View style={chatsStyle.chatContent}>
        <CustomText numLine={1} fontType="medium">
          {username}
        </CustomText>
        <CustomText numLine={1} fontSize={fontSize.small - 2}>
          {message}
        </CustomText>
      </View>
    </View>
  );
};

export default ChatPreviewComponent;
