import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

type Props = {};

const PersonalizeBirthday = (props: Props) => {
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
        When is your {'\n'}birthday?
      </CustomText>

      <View
        style={{
          width: screenWidth / 2.3,
          paddingTop: sizeBlock.getHeightSize(30),
          ...universalStyle.flexBetween,
        }}>
        <CustomText fontSize={fontSize.small - 2} color={appColors.white}>
          Month
        </CustomText>
        <CustomText fontSize={fontSize.small - 2} color={appColors.white}>
          Day
        </CustomText>
        <CustomText fontSize={fontSize.small - 2} color={appColors.white}>
          Year
        </CustomText>
      </View>
      <View
        style={{
          width: screenWidth / 2,
          ...universalStyle.flexBetween,
          paddingTop: sizeBlock.getHeightSize(10),
          paddingBottom: sizeBlock.getHeightSize(50),
        }}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          maxLength={2}
          placeholderTextColor={appColors.grey}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          placeholder="0"
          placeholderTextColor={appColors.grey}
        />
        <TextInput
          style={[
            styles.input,
            {
              width: sizeBlock.getWidthSize(60),
            },
          ]}
          keyboardType="numeric"
          maxLength={4}
          placeholder="0"
          placeholderTextColor={appColors.grey}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: appColors.white,
    width: sizeBlock.getHeightSize(45),
    borderRadius: borderRadius.small,
    paddingHorizontal: sizeBlock.getHeightSize(10),
    borderWidth: 1,
    borderColor: appColors.white,
    height: sizeBlock.getHeightSize(45),
    flexDirection: 'row',
    alignItems: 'center',
    color: appColors.black,
    textAlign: 'center',
    fontFamily: fontFamily.regular,
  },
});

export default PersonalizeBirthday;
