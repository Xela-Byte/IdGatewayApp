import {View, Text, FlatList, Pressable} from 'react-native';
import CustomText from '../text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CheckBox from '../checkbox/CheckBox';
import {useState} from 'react';
import {
  Interest,
  personalizedInterests,
} from '../../utils/data/PersonalizedInterests';
import {personalizationStyle} from '../../styles/PersonalizationStyle';

type Props = {};

const PersonalizeInterests = (props: Props) => {
  const [interests, setInterest] = useState<typeof personalizedInterests>([]);

  const handleInterestPick = (pickedInterest: Interest) => {
    const existingInterest = interests.find(item => {
      return item.title === pickedInterest.title;
    });

    if (existingInterest) {
      const filteredInterests = interests.filter(item => {
        return item.title !== pickedInterest.title;
      });
      setInterest(filteredInterests);
    } else {
      setInterest(prevInterests => [...prevInterests, pickedInterest]);
    }
  };

  return (
    <>
      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
          lineHeight: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.medium - 3}
        fontType="semiBold">
        What are your {'\n'}interests?
      </CustomText>
      <CustomText
        customStyle={{
          marginVertical: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        Choosing any category will help us direct you to the right people
      </CustomText>

      <FlatList
        key={personalizedInterests.length}
        showsVerticalScrollIndicator={false}
        numColumns={personalizedInterests.length}
        columnWrapperStyle={{
          gap: sizeBlock.getWidthSize(30),
          flexWrap: 'wrap',
          paddingBottom: sizeBlock.getHeightSize(35),
        }}
        data={personalizedInterests}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({item, index}) => {
          return (
            <Pressable
              key={index}
              style={[
                personalizationStyle.interestContainer,
                {
                  backgroundColor: interests.includes(item)
                    ? appColors.black
                    : appColors.white,
                },
              ]}
              onPress={() => {
                handleInterestPick(item);
              }}>
              {item.icon}
              <CustomText
                color={
                  interests.includes(item) ? appColors.white : appColors.black
                }
                customStyle={{marginLeft: sizeBlock.getWidthSize(5)}}
                fontType="medium"
                fontSize={fontSize.small - 2}>
                {item.title}
              </CustomText>
            </Pressable>
          );
        }}
      />
    </>
  );
};

export default PersonalizeInterests;
