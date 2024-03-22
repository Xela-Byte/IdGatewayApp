import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  appColors,
  borderRadius,
  fontFamily,
  fontSize,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

type Props = {
  control: any;
  name?: any;
  password?: boolean;
  rules?: object;
  placeholder?: string;
  secureTextEntry?: any;
  label?: string;
  iconName?: string;
  onFocus?: () => void;
  keyboardType?: KeyboardType;
  editable?: boolean;
  defaultValue?: string;
  mB?: number;
  customStyle?: ViewStyle;
  inputProps?: TextInputProps;
};

const CustomInput = ({
  control,
  name,
  password,
  rules,
  placeholder,
  label,
  iconName,
  keyboardType,
  onFocus,
  editable,
  defaultValue,
  mB,
  customStyle,
  inputProps,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState<
    boolean | string | undefined
  >(password);

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <CustomText
              fontType="medium"
              color={appColors.black}
              fontSize={fontSize.small - 1}>
              {label}
            </CustomText>

            <View
              style={[
                styles.container,
                {
                  borderColor: error
                    ? 'red'
                    : isFocused
                    ? appColors.lightOrange
                    : appColors.white,
                  marginBottom: mB,
                },
                customStyle,
                styles[`container_PRIMARY`],
              ]}>
              {/*  */}
              {iconName && (
                <Icon
                  name={iconName}
                  style={{
                    color: appColors.black,
                    fontSize: 14,
                    marginRight: 10,
                  }}
                />
              )}

              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={() => {
                  setIsFocused(false);
                }}
                defaultValue={defaultValue}
                editable={editable}
                secureTextEntry={showPassword ? true : false}
                placeholderTextColor={appColors.grey}
                placeholder={placeholder}
                keyboardType={keyboardType}
                style={[styles.input, styles[`input_PRIMARY`]]}
                onFocus={() => {
                  onFocus && onFocus();
                  setIsFocused(true);
                }}
                {...inputProps}
              />
              {password && (
                <Icon
                  onPress={() => setShowPassword(!showPassword)}
                  style={{fontSize: fontSize.small}}
                  color={appColors.grey}
                  name={showPassword ? 'eye-with-line' : 'eye'}
                />
              )}
            </View>

            {error && (
              <Text style={styles.error}>{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    width: '100%',
    borderRadius: borderRadius.small,
    paddingHorizontal: sizeBlock.getHeightSize(10),
    marginVertical: sizeBlock.getHeightSize(10),
    borderWidth: 1,
    height: sizeBlock.getHeightSize(45),
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginVertical: 1,
    fontSize: 12,
    color: appColors.black,
  },
  input: {
    flex: 1,
    color: appColors.black,
    height: 40,
    borderBottomWidth: 0,
    fontFamily: fontFamily.regular,
  },
  error: {
    color: 'red',
    alignSelf: 'stretch',
    fontSize: 10,
    fontFamily: fontFamily.regular,
  },
  container_PRIMARY: {},
  input_PRIMARY: {},
});

export default CustomInput;
