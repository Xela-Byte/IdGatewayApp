import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import CustomText from '../../components/text/CustomText';
import {likesStyle} from '../../styles/LikesStyle';
import {appColors, sizeBlock} from '../../styles/UniversalStyle';

type Props = {
  name: string;
  age: number;
  isActive: boolean;
};

const LikePreviewComponent = ({age, name, isActive}: Props) => {
  return (
    <View style={likesStyle.likeContainer}>
      <Image source={LadyEbony} style={likesStyle.likeImage} />
      <View style={likesStyle.likeContent}>
        <CustomText
          fontType="semiBold"
          customStyle={{marginTop: sizeBlock.getHeightSize(10)}}>
          {name}, {age}
        </CustomText>
        {isActive && (
          <LinearGradient
            colors={[
              appColors.onGradientPrimary,
              appColors.onGradientSecondary,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 0.95]}
            style={likesStyle.onlineDot}
          />
        )}
      </View>
    </View>
  );
};

export default LikePreviewComponent;
