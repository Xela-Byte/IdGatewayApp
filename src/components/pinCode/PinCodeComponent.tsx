import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  appColors,
  borderRadius,
  fontFamily,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';

type Props = {
  setPinValue: (value: string) => void;
};

const PinCodeComponent = ({setPinValue}: Props) => {
  const inputProps = {
    style: styles.input,
    maxLength: 1,
  };

  const [pin, setPin] = useState<string>('');
  const refs = Array.from({length: 5}, () => useRef<TextInput>(null));

  const handleChange = (value: string, index: number) => {
    if (value.length === 1) {
      setPin(prevPin => prevPin + value);
      refs[index + 1]?.current?.focus();
    } else if (value.length === 0 && index >= 0) {
      setPin(prevPin => prevPin.slice(0, -1));
      refs[index - 1]?.current?.focus();
    }
  };

  useEffect(() => {
    setPinValue(pin);
  }, [pin]);

  return (
    <View
      style={{
        ...universalStyle.flexBetween,
        paddingVertical: sizeBlock.getHeightSize(50),
      }}>
      {refs.map((ref, index) => (
        <TextInput
          key={index}
          {...inputProps}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={appColors.grey}
          onChangeText={value => handleChange(value, index)}
          ref={ref}
          returnKeyType={index === 4 ? 'done' : 'next'}
        />
      ))}
    </View>
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

export default PinCodeComponent;
