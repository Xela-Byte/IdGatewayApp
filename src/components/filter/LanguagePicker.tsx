import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BackHandler, Pressable, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {default as CloseIcon} from 'react-native-vector-icons/AntDesign';
import {
  appColors,
  fontFamily,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import LanguageSelection from './LanguageSelection';

type Props = {
  showBottomTab: boolean;
  setShowBottomTab: (value: boolean) => void;
};

const LanguagePicker = ({showBottomTab, setShowBottomTab}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['90%'], []);

  const handleUtilityChoice = (utilityName: string) => {
    setShowBottomTab(false);
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (showBottomTab === true) {
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [showBottomTab]);

  useEffect(() => {
    if (showBottomTab === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [showBottomTab]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.1}
      />
    ),
    [],
  );

  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      {!showBottomTab ? (
        <></>
      ) : (
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            position: 'absolute',
            zIndex: 99,
          }}>
          <BottomSheet
            onClose={() => {
              setShowBottomTab(false);
            }}
            ref={bottomSheetRef}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            contentHeight={screenHeight}
            animateOnMount={true}
            handleComponent={() => {
              return <></>;
            }}>
            <View style={styles.header}>
              <Pressable
                onPress={() => {
                  setShowBottomTab(false);
                }}
                style={styles.cancelButton}>
                <CloseIcon
                  name="close"
                  size={fontSize.small + 4}
                  color={appColors.black}
                />
              </Pressable>
              <CustomText fontType="medium" customStyle={styles.name}>
                Choose Language
              </CustomText>
            </View>

            <View style={{padding: 20}}>
              <CustomText
                fontSize={fontSize.small - 2}
                customStyle={{textAlign: 'center'}}>
                Looking for people with a language you speak. You can select
                multiple languages and see people with same language
              </CustomText>
            </View>

            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              iconColor={appColors.grey}
              placeholderTextColor={appColors.grey}
              inputStyle={{
                fontFamily: fontFamily.regular,
                color: appColors.black,
              }}
              cursorColor={appColors.black}
              selectionColor={appColors.lightGrey}
              style={{
                width: '90%',
                marginLeft: '5%',
                backgroundColor: appColors.lightGrey,
              }}
            />
            <LanguageSelection queryValue={searchQuery} />
          </BottomSheet>
        </View>
      )}
    </>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  name: {
    marginLeft: '15%',
  },
  cancelButton: {
    width: sizeBlock.getWidthSize(30),
    height: sizeBlock.getHeightSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'textSecondaryColor',
    fontSize: sizeBlock.fontSize(16),
    textAlign: 'center',
    lineHeight: sizeBlock.getHeightSize(19),
    fontFamily: 'bold_700',
  },
  header: {
    marginTop: sizeBlock.getHeightSize(20),
    width: '90%',
    marginLeft: '5%',
    paddingHorizontal: sizeBlock.getWidthSize(25),
    paddingBottom: sizeBlock.getHeightSize(10),
    ...universalStyle.verticalCentering,
    borderBottomWidth: 2,
    borderColor: appColors.lightGrey,
  },
});
