import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import VerifyPhotoStepOne from '../../../components/profile/VerifyPhotoStepOne';
import {appColors, fontSize, sizeBlock} from '../../../styles/UniversalStyle';
import {verifyPhotoStyle} from '../../../styles/VerifyPhotoStyle';
import {VerifyPhotoScreenProps} from '../../../types/navigation/ExploreNavigationType';
import VerifyPhotoStepTwo from '../../../components/profile/VerifyPhotoStepTwo';
import VerifyPhotoStepThree from '../../../components/profile/VerifyPhotoStepThree';

const VerifyPhotoScreen = ({navigation}: VerifyPhotoScreenProps) => {
  const [level, setLevel] = useState<number>(1);

  const handleLevelIncrease = () => {
    if (level < 3) {
      setLevel(prevLevel => prevLevel + 1);
    } else {
      navigation.navigate('ProfileScreen');
    }
  };

  const handleLevelDecrease = () => {
    setLevel(prevLevel => prevLevel - 1);
  };
  return (
    <>
      <SafeAreaView style={verifyPhotoStyle.container}>
        <ArrowIcon
          name={'chevron-left'}
          size={fontSize.small + 4}
          color={appColors.black}
          style={{
            position: 'absolute',
            top: sizeBlock.getHeightSize(20),
            left: sizeBlock.getWidthSize(20),
          }}
          onPress={() => {
            level > 1 ? handleLevelDecrease() : navigation.goBack();
          }}
        />

        {level === 1 && (
          <VerifyPhotoStepOne
            handleFunction={handleLevelIncrease}
            navigation={navigation}
          />
        )}

        {level === 2 && (
          <VerifyPhotoStepTwo
            handleFunction={handleLevelIncrease}
            navigation={navigation}
          />
        )}

        {level === 3 && (
          <VerifyPhotoStepThree
            handleFunction={handleLevelIncrease}
            navigation={navigation}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default VerifyPhotoScreen;
