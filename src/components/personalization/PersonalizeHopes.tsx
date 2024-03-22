import {View, Text} from 'react-native';
import CustomText from '../text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../styles/UniversalStyle';
import CheckBox from '../checkbox/CheckBox';
import {useState} from 'react';

type Props = {};

const PersonalizeHopes = (props: Props) => {
  const [category, setCategory] = useState<
    'Casual' | 'Relationship' | 'Serious' | 'Marriage'
  >('Casual');
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
        What are your {'\n'}hopes here?
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

      <View style={{height: screenHeight / 2}}>
        <CheckBox
          onPress={() => {
            setCategory('Casual');
          }}
          title="Casual"
          checked={category === 'Casual'}
        />
        <CheckBox
          onPress={() => {
            setCategory('Serious');
          }}
          title="Serious"
          checked={category === 'Serious'}
        />
        <CheckBox
          onPress={() => {
            setCategory('Relationship');
          }}
          title="Relationship"
          checked={category === 'Relationship'}
        />
        <CheckBox
          onPress={() => {
            setCategory('Marriage');
          }}
          title="Marriage"
          checked={category === 'Marriage'}
        />
      </View>
    </>
  );
};

export default PersonalizeHopes;
