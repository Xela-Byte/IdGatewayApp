import {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {Slider} from 'react-native-awesome-slider';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox, Switch} from 'react-native-paper';
import {useSharedValue} from 'react-native-reanimated';
import {default as CloseIcon} from 'react-native-vector-icons/AntDesign';
import CustomText from '../../../components/text/CustomText';
import {filterStyle} from '../../../styles/FilterStyle';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {FilterScreenProps} from '../../../types/navigation/ExploreNavigationType';
import RightIcon from 'react-native-vector-icons/Entypo';
import LanguagePicker from '../../../components/filter/LanguagePicker';

const FilterScreen = ({navigation}: FilterScreenProps) => {
  const [dateFilter, setDateFilter] = useState<boolean>(false);
  const [ageFilter, setAgeFilter] = useState<boolean>(false);
  const [locationFilter, setlocationFilter] = useState<boolean>(false);
  const [showBottomTab, setShowBottomTab] = useState<boolean>(false);

  const [preferMen, setPreferMen] = useState<boolean>(false);
  const [preferWomen, setPreferWomen] = useState<boolean>(false);
  const [preferNonBinary, setPreferNonBinary] = useState<boolean>(false);

  const handleDateSwitch = () => {
    setDateFilter(!dateFilter);
  };

  const handleAgeSwitch = () => {
    setAgeFilter(!ageFilter);
  };

  const handleLocationSwitch = () => {
    setlocationFilter(!locationFilter);
  };

  const handlePreferMenSwitch = () => {
    setPreferMen(!preferMen);
  };

  const handlePreferWomenSwitch = () => {
    setPreferWomen(!preferWomen);
  };

  const handlePreferNonBinarySwitch = () => {
    setPreferNonBinary(!preferNonBinary);
  };

  const progress = useSharedValue(20);
  const min = useSharedValue(18);
  const max = useSharedValue(80);

  const locationProgress = useSharedValue(10);
  const locationMin = useSharedValue(0);
  const locationMax = useSharedValue(100);

  return (
    <SafeAreaView style={filterStyle.container}>
      <ScrollView style={filterStyle.content}>
        <View style={filterStyle.header}>
          <CloseIcon
            name="close"
            color={appColors.grey}
            size={fontSize.medium}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <CustomText
            fontSize={fontSize.small + 2}
            fontType="semiBold"
            customStyle={{
              marginLeft: '33%',
            }}>
            Filters
          </CustomText>
        </View>

        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          fontType="medium"
          color={appColors.grey}
          fontSize={fontSize.small - 3}>
          Who do you want to date?
        </CustomText>

        <View style={filterStyle.dateFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            I am open to dating everyone
          </CustomText>
          <Switch
            style={{marginLeft: 'auto'}}
            thumbColor={appColors.white}
            trackColor={{
              true: appColors.onGradientPrimary,
              false: appColors.onGradientPrimary,
            }}
            value={dateFilter}
            onValueChange={handleDateSwitch}
          />
        </View>
        <View style={filterStyle.dateSubFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            Men
          </CustomText>
          <Checkbox
            status={preferMen ? 'checked' : 'unchecked'}
            color={appColors.onGradientPrimary}
            onPress={() => {
              handlePreferMenSwitch();
            }}
          />
        </View>
        <View style={filterStyle.dateSubFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            Women
          </CustomText>
          <Checkbox
            status={preferWomen ? 'checked' : 'unchecked'}
            color={appColors.onGradientPrimary}
            onPress={() => {
              handlePreferWomenSwitch();
            }}
          />
        </View>
        <View style={filterStyle.dateSubFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            Non Binary
          </CustomText>
          <Checkbox
            status={preferNonBinary ? 'checked' : 'unchecked'}
            color={appColors.onGradientPrimary}
            onPress={() => {
              handlePreferNonBinarySwitch();
            }}
          />
        </View>

        <View style={filterStyle.divider} />

        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          fontType="medium"
          color={appColors.grey}
          fontSize={fontSize.small - 3}>
          Age
        </CustomText>

        <CustomText fontType="medium" fontSize={fontSize.small - 3}>
          Between 18 and 80
        </CustomText>

        <View style={filterStyle.slider}>
          <Slider
            progress={progress}
            bubble={value => value.toFixed(0).toString()}
            bubbleTextStyle={{
              fontFamily: fontFamily.medium,
            }}
            containerStyle={{
              borderRadius: borderRadius.full,
            }}
            theme={{
              maximumTrackTintColor: appColors.lightBrown,
              minimumTrackTintColor: appColors.onGradientPrimary,
              cacheTrackTintColor: appColors.lightBrown,
              bubbleBackgroundColor: appColors.onGradientPrimary,
            }}
            renderThumb={() => {
              return (
                <LinearGradient
                  colors={[
                    appColors.onGradientPrimary,
                    appColors.onGradientSecondary,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  locations={[0, 0.95]}
                  style={{
                    width: sizeBlock.getWidthSize(20),
                    height: sizeBlock.getWidthSize(20),
                    borderRadius: borderRadius.full,
                  }}
                />
              );
            }}
            minimumValue={min}
            maximumValue={max}
          />
        </View>

        <View style={filterStyle.dateFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            See people two years older than me
          </CustomText>
          <Switch
            style={{marginLeft: 'auto'}}
            thumbColor={appColors.white}
            trackColor={{
              true: appColors.onGradientPrimary,
              false: appColors.onGradientPrimary,
            }}
            value={ageFilter}
            onValueChange={handleAgeSwitch}
          />
        </View>

        <View style={filterStyle.divider} />

        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          fontType="medium"
          color={appColors.grey}
          fontSize={fontSize.small - 3}>
          Distance
        </CustomText>

        <CustomText fontType="medium" fontSize={fontSize.small - 3}>
          Up to 100km away
        </CustomText>

        <View style={filterStyle.slider}>
          <Slider
            progress={locationProgress}
            bubble={value => value.toFixed(0).toString()}
            bubbleTextStyle={{
              fontFamily: fontFamily.medium,
            }}
            containerStyle={{
              borderRadius: borderRadius.full,
            }}
            theme={{
              maximumTrackTintColor: appColors.lightBrown,
              minimumTrackTintColor: appColors.onGradientPrimary,
              cacheTrackTintColor: appColors.lightBrown,
              bubbleBackgroundColor: appColors.onGradientPrimary,
            }}
            renderThumb={() => {
              return (
                <LinearGradient
                  colors={[
                    appColors.onGradientPrimary,
                    appColors.onGradientSecondary,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  locations={[0, 0.95]}
                  style={{
                    width: sizeBlock.getWidthSize(20),
                    height: sizeBlock.getWidthSize(20),
                    borderRadius: borderRadius.full,
                  }}
                />
              );
            }}
            minimumValue={locationMin}
            maximumValue={locationMax}
          />
        </View>
        <View style={filterStyle.dateFilter}>
          <CustomText
            customStyle={{
              marginBottom: sizeBlock.getHeightSize(10),
            }}
            fontType="medium"
            fontSize={fontSize.small - 3}>
            See people slightly farther
          </CustomText>
          <Switch
            style={{marginLeft: 'auto'}}
            thumbColor={appColors.white}
            trackColor={{
              true: appColors.onGradientPrimary,
              false: appColors.onGradientPrimary,
            }}
            value={locationFilter}
            onValueChange={handleLocationSwitch}
          />
        </View>

        <View style={filterStyle.divider} />

        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          fontType="medium"
          color={appColors.grey}
          fontSize={fontSize.small - 3}>
          Language
        </CustomText>

        <Pressable
          style={filterStyle.langFilter}
          onPress={() => {
            setShowBottomTab(!showBottomTab);
          }}>
          <CustomText fontType="medium" fontSize={fontSize.small - 3}>
            Select Language
          </CustomText>

          <RightIcon
            name="chevron-thin-right"
            size={fontSize.small}
            color={appColors.black}
          />
        </Pressable>

        <View style={filterStyle.divider} />

        <CustomText
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            marginBottom: sizeBlock.getHeightSize(20),
          }}
          fontType="medium"
          color={appColors.grey}
          fontSize={fontSize.small - 3}>
          Advanced Filters
        </CustomText>

        <View
          style={[
            filterStyle.langFilter,
            {
              marginBottom: sizeBlock.getHeightSize(40),
            },
          ]}>
          <CustomText fontType="medium" fontSize={fontSize.small - 3}>
            See advanced filters
          </CustomText>

          <RightIcon
            name="chevron-thin-right"
            size={fontSize.small}
            color={appColors.black}
          />
        </View>
      </ScrollView>
      <LanguagePicker
        setShowBottomTab={setShowBottomTab}
        showBottomTab={showBottomTab}
      />
    </SafeAreaView>
  );
};

export default FilterScreen;
