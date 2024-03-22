import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Pressable, TextInput, View} from 'react-native';
import {default as ArrowDownIcon} from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import LockIcon from 'react-native-vector-icons/Fontisto';
import GradientBackground from '../../components/background/GradientBackground';
import CustomText from '../../components/text/CustomText';
import {emailRegisterStyle} from '../../styles/EmailRegisterStyle';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import {EmailRegisterScreenProps} from '../../types/navigation/AuthNavigationType';
import {CountryPicker} from 'react-native-country-codes-picker';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';

const PhoneNumberScreen = ({navigation}: EmailRegisterScreenProps) => {
  const {control} = useForm();

  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('+234');

  return (
    <GradientBackground>
      <View style={emailRegisterStyle.content}>
        <ArrowIcon
          name={'chevron-left'}
          color={appColors.white}
          size={fontSize.medium}
          onPress={navigation.goBack}
        />
        <CustomText
          color={appColors.white}
          fontType="semiBold"
          fontSize={fontSize.small + 4}
          customStyle={{
            marginTop: sizeBlock.getHeightSize(30),
            lineHeight: sizeBlock.getHeightSize(30),
          }}>
          Enter your {'\n'}Phone number
        </CustomText>
        <View style={{width: '90%'}}>
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
            }}>
            We require the contact information of users in ID Gateway to protect
            the community and make it a safe place.
          </CustomText>
        </View>

        <View style={emailRegisterStyle.countryPickerInput}>
          <Pressable
            style={emailRegisterStyle.countryCodeInput}
            onPress={() => {
              setShowPicker(true);
            }}>
            <CustomText>{countryCode}</CustomText>
            <ArrowDownIcon
              size={fontSize.small}
              color={appColors.black}
              name="down"
            />
          </Pressable>

          <Controller
            control={control}
            name={'phoneNumber'}
            rules={{required: 'Please enter your phone number'}}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholderTextColor={appColors.grey}
                placeholder={'Enter phone number'}
                style={emailRegisterStyle.phoneNumberInput}
                onSubmitEditing={() => {
                  navigation.navigate('VerifyNumberScreen');
                }}
                multiline={false}
              />
            )}
          />
        </View>

        <CountryPicker
          lang="en"
          show={showPicker}
          popularCountries={['ng']}
          style={{
            dialCode: emailRegisterStyle.countryPickerText,
            countryName: emailRegisterStyle.countryPickerText,
            searchMessageText: emailRegisterStyle.countryPickerText,
            textInput: emailRegisterStyle.countryPickerText,
            modal: {
              height: screenHeight / 2,
            },
          }}
          pickerButtonOnPress={item => {
            setShowPicker(false);
            setCountryCode(item.dial_code);
          }}
        />
        <View style={emailRegisterStyle.disclaimerContent}>
          <LockIcon
            name={'locked'}
            color={appColors.white}
            size={fontSize.small}
          />
          <CustomText
            color={appColors.white}
            fontSize={fontSize.small - 2}
            customStyle={{
              marginTop: sizeBlock.getHeightSize(30),
              marginLeft: sizeBlock.getWidthSize(15),
            }}>
            We would never share this information with anyone and it would not
            be visible on your profile.
          </CustomText>
        </View>
      </View>
    </GradientBackground>
  );
};

export default PhoneNumberScreen;
