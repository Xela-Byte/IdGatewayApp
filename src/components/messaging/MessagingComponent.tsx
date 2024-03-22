import {View, Text, FlatList, StyleSheet, FlatListProps} from 'react-native';
import {Message} from '../../screens/inApp/chats/MessagingScreen';
import CustomText from '../text/CustomText';
import {
  appColors,
  borderRadius,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {useRef} from 'react';
type Props = {
  data: Message[];
};

const MessagingComponent = ({data}: Props) => {
  const messagesFlatlist = useRef<any>();
  return (
    <FlatList
      ref={messagesFlatlist}
      onContentSizeChange={() =>
        messagesFlatlist.current &&
        messagesFlatlist.current.scrollToEnd({animated: true})
      }
      contentContainerStyle={{
        paddingBottom: sizeBlock.getHeightSize(40),
      }}
      data={data}
      keyExtractor={item => {
        return item.id;
      }}
      renderItem={({item}) => {
        return (
          <>
            {item.self ? (
              <LinearGradient
                colors={[
                  appColors.onGradientPrimary,
                  appColors.onGradientSecondary,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                locations={[0, 0.95]}
                style={styles.container}>
                <CustomText fontType="medium" color={appColors.white}>
                  {item.message}
                </CustomText>
              </LinearGradient>
            ) : (
              <View style={styles.receiveContainer}>
                <CustomText fontType="medium" color={appColors.black}>
                  {item.message}
                </CustomText>
              </View>
            )}
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: screenWidth / 1.5,
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getHeightSize(10),
    marginVertical: sizeBlock.getWidthSize(3),
    borderRadius: borderRadius.medium,
    alignSelf: 'flex-end',
  },
  receiveContainer: {
    backgroundColor: appColors.lightGrey,
    alignSelf: 'flex-start',
    maxWidth: screenWidth / 1.5,
    paddingHorizontal: sizeBlock.getWidthSize(15),
    paddingVertical: sizeBlock.getHeightSize(10),
    marginVertical: sizeBlock.getWidthSize(3),
    borderRadius: borderRadius.medium,
  },
});

export default MessagingComponent;
