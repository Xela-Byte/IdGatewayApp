import {FlatList, SafeAreaView, View} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/Feather';
import FilterIcon from '../../../assets/svgs/FilterIcon';
import CustomText from '../../../components/text/CustomText';
import {likesStyle} from '../../../styles/LikesStyle';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {LikesScreenProps} from '../../../types/navigation/ChatNavigationType';
import LikePreviewComponent from '../../../components/like/LikePreviewComponent';
import {nanoid} from '@reduxjs/toolkit';

const LikesScreen = ({navigation}: LikesScreenProps) => {
  const data: {id: string; name: string; age: number; isActive: boolean}[] = [
    {
      id: nanoid(),
      age: 34,
      name: 'Xela',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 35,
      name: 'Sasha',
      isActive: false,
    },
    {
      id: nanoid(),
      age: 19,
      name: 'Lorri',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 28,
      name: 'Cherry',
      isActive: false,
    },
    {
      id: nanoid(),
      age: 23,
      name: 'Deli',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 19,
      name: 'Lorri',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 28,
      name: 'Cherry',
      isActive: false,
    },
    {
      id: nanoid(),
      age: 23,
      name: 'Deli',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 19,
      name: 'Lorri',
      isActive: true,
    },
    {
      id: nanoid(),
      age: 28,
      name: 'Cherry',
      isActive: false,
    },
    {
      id: nanoid(),
      age: 23,
      name: 'Deli',
      isActive: true,
    },
  ];
  return (
    <SafeAreaView style={likesStyle.container}>
      <View style={likesStyle.content}>
        <View style={likesStyle.header}>
          <View style={likesStyle.headerContent}>
            <ArrowIcon
              name={'chevron-left'}
              color={appColors.black}
              size={fontSize.medium}
              onPress={navigation.goBack}
            />
            <CustomText fontType="medium" fontSize={fontSize.medium}>
              Likes
            </CustomText>
          </View>

          <View style={likesStyle.headerIcon}>
            <SearchIcon
              name="search"
              color={appColors.black}
              size={fontSize.medium - 5}
            />

            <FilterIcon
              width={sizeBlock.getWidthSize(30)}
              height={sizeBlock.getWidthSize(30)}
              onPress={() => {}}
            />
          </View>
        </View>

        <CustomText
          customStyle={{marginVertical: sizeBlock.getHeightSize(20)}}
          fontSize={fontSize.small - 2}>
          <CustomText fontType="semiBold" fontSize={fontSize.small - 2}>
            Likes{' '}
          </CustomText>
          (31)
        </CustomText>

        <FlatList
          key={data.length}
          showsVerticalScrollIndicator={false}
          numColumns={data.length}
          style={{height: screenHeight * 0.75}}
          columnWrapperStyle={{
            columnGap: sizeBlock.getWidthSize(10),
            rowGap: sizeBlock.getHeightSize(30),
            flexWrap: 'wrap',
            paddingBottom: sizeBlock.getHeightSize(35),
          }}
          data={data}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({item, index}) => {
            return (
              <LikePreviewComponent
                age={item.age}
                name={item.name}
                key={index}
                isActive={item.isActive}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LikesScreen;
