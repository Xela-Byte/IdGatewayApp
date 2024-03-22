import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import CheckBox from '../checkbox/CheckBox';
import {useState} from 'react';
import {Switch} from 'react-native-paper';

type Props = {};

const PersonalizeMeet = (props: Props) => {
  const [gender, setGender] = useState<Array<'Male' | 'Female' | 'None'>>([
    'Male',
  ]);
  const [multiPick, setMultiPick] = useState<boolean>(false);

  const handleGenderPick = (value: 'Male' | 'Female' | 'None') => {
    const existingGender = gender.find(item => {
      return item === value;
    });

    if (existingGender) {
      const filteredGender = gender.filter(item => {
        return item !== value;
      });
      setGender(filteredGender);
    } else {
      setGender(prevGender => [...prevGender, value]);
    }
  };

  const handleSwitch = () => {
    setMultiPick(!multiPick);
    if (!multiPick) {
      setGender(['Male', 'Female', 'None']);
    } else {
      setGender(['Male']);
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
        Who would you like {'\n'}to meet?
      </CustomText>
      <CustomText
        customStyle={{
          marginVertical: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        Choose category of people you want to meet. You can choose more than
        one.
      </CustomText>

      <View
        style={{
          ...universalStyle.verticalCentering,
          marginBottom: sizeBlock.getHeightSize(40),
          width: '100%',
        }}>
        <CustomText
          color={appColors.white}
          fontSize={fontSize.small - 3}
          fontType="regular">
          I am open to meeting all genders
        </CustomText>
        <Switch
          style={{marginLeft: 'auto'}}
          thumbColor={appColors.onGradientPrimary}
          trackColor={{
            true: appColors.white,
            false: appColors.white,
          }}
          value={multiPick}
          onValueChange={handleSwitch}
        />
      </View>

      <View style={{height: screenHeight / 2.5}}>
        <CheckBox
          onPress={() => {
            handleGenderPick('Male');
          }}
          title="Male"
          checked={gender.includes('Male')}
        />
        <CheckBox
          onPress={() => {
            handleGenderPick('Female');
          }}
          title="Female"
          checked={gender.includes('Female')}
        />
        <CheckBox
          onPress={() => {
            handleGenderPick('None');
          }}
          title="None"
          checked={gender.includes('None')}
        />
      </View>
    </>
  );
};

export default PersonalizeMeet;
