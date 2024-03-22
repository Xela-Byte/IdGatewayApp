import {FlatList, Image, SafeAreaView, View} from 'react-native';
import DownIcon from 'react-native-vector-icons/Entypo';
import BellIcon from 'react-native-vector-icons/Feather';
import EventBG from '../../../assets/images/eventBG.jpg';
import LadyEbony from '../../../assets/images/lady-ebony.jpg';
import FilterIcon from '../../../assets/svgs/FilterIcon';
import CustomText from '../../../components/text/CustomText';
import {eventStyle} from '../../../styles/EventStyle';
import {exploreStyle} from '../../../styles/ExploreStyle';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {ExploreScreenProps} from '../../../types/navigation/ExploreNavigationType';
import {events} from '../../../utils/data/Events';

type Props = {};

const EventsScreen = ({navigation}: ExploreScreenProps) => {
  return (
    <SafeAreaView style={eventStyle.container}>
      <View style={exploreStyle.content}>
        <View style={exploreStyle.header}>
          <View style={exploreStyle.avatarContainer}>
            <Image source={LadyEbony} style={exploreStyle.avatar} />
          </View>
          <View>
            <CustomText fontType="semiBold" color={appColors.textPrimary}>
              ID Gateway
            </CustomText>
          </View>
          <View>
            <FilterIcon
              width={sizeBlock.getWidthSize(30)}
              height={sizeBlock.getWidthSize(30)}
              onPress={() => {
                navigation.navigate('FilterScreen');
              }}
            />
          </View>
        </View>

        <View style={eventStyle.eventContainer}>
          <Image source={EventBG} style={eventStyle.eventBG} />
          <View style={eventStyle.eventText}>
            <CustomText
              color={appColors.white}
              fontType="semiBold"
              fontSize={fontSize.small + 4}>
              Your Time To{' '}
              <CustomText
                fontType="semiBold"
                fontSize={fontSize.small + 4}
                color={appColors.textPrimary}>
                Love{' '}
              </CustomText>{' '}
              and Be{' '}
              <CustomText
                fontType="semiBold"
                fontSize={fontSize.small + 4}
                color={appColors.textPrimary}>
                Loved
              </CustomText>{' '}
              is{' '}
              <CustomText
                fontType="semiBold"
                fontSize={fontSize.small + 4}
                color={appColors.textPrimary}>
                Now
              </CustomText>
            </CustomText>
          </View>
        </View>

        <View style={eventStyle.locationFilter}>
          <CustomText fontSize={fontSize.small - 2} fontType="medium">
            Newest in
          </CustomText>
          <DownIcon
            name="chevron-down"
            color={appColors.textPrimary}
            size={fontSize.small - 2}
          />
          <CustomText
            color={appColors.textPrimary}
            fontSize={fontSize.small - 2}
            fontType="medium">
            Lagos
          </CustomText>
        </View>

        <FlatList
          key={events.length}
          showsVerticalScrollIndicator={false}
          style={{width: '100%', height: screenHeight / 2}}
          numColumns={2}
          columnWrapperStyle={{
            gap: sizeBlock.getWidthSize(30),
            flexWrap: 'wrap',
            paddingBottom: sizeBlock.getHeightSize(35),
          }}
          data={events}
          keyExtractor={item => {
            return item.key;
          }}
          renderItem={({item}) => {
            return (
              <View style={eventStyle.card}>
                <Image
                  source={item.backgroundImage}
                  style={eventStyle.cardImage}
                />
                <View style={eventStyle.notifyContent}>
                  <BellIcon
                    name="bell"
                    color={appColors.black}
                    size={fontSize.small}
                  />
                </View>

                <View style={eventStyle.cardText}>
                  <CustomText
                    numLine={1}
                    fontType="semiBold"
                    fontSize={fontSize.small - 3}>
                    {item.title}
                  </CustomText>
                  <CustomText
                    fontType="medium"
                    color={appColors.textPrimary}
                    customStyle={{marginVertical: sizeBlock.getHeightSize(5)}}
                    fontSize={fontSize.small - 5}>
                    {item.date}
                  </CustomText>
                  <CustomText numLine={3} fontSize={fontSize.small - 3}>
                    {item.location}
                  </CustomText>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EventsScreen;
