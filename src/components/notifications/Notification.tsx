import {Image, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import HeartFillIcon from '../../assets/svgs/HeartFillIcon';
import LinearGradient from 'react-native-linear-gradient';
import HeartArrowIcon from '../../assets/svgs/HeartArrowIcon';
import CustomText from '../text/CustomText';

type Props = {};

const Notification = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image source={LadyEbony} style={styles.image} />
        <View style={styles.iconWrapper}>
          <LinearGradient
            colors={[
              appColors.onGradientPrimary,
              appColors.onGradientSecondary,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 0.95]}
            style={styles.iconContainer}>
            <HeartArrowIcon
              width={sizeBlock.getWidthSize(10)}
              height={sizeBlock.getWidthSize(10)}
            />
          </LinearGradient>
        </View>
      </View>

      <View style={styles.textContainer}>
        <CustomText numLine={1} fontSize={fontSize.small - 2} fontType="medium">
          You have got a new match
        </CustomText>
        <CustomText
          customStyle={{marginTop: sizeBlock.getHeightSize(3)}}
          fontSize={fontSize.small - 3}
          color={appColors.grey}>
          Jun 25 at 5:23 AM
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizeBlock.getHeightSize(80),
    ...universalStyle.spaceBetween,
  },
  imageContent: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.small,
  },
  image: {
    width: sizeBlock.getWidthSize(60),
    height: sizeBlock.getWidthSize(60),
    borderRadius: borderRadius.small,
  },
  iconWrapper: {
    position: 'absolute',
    right: -sizeBlock.getWidthSize(5),
    bottom: -sizeBlock.getHeightSize(5),
    borderRadius: borderRadius.full,
    borderColor: appColors.white,
    borderWidth: 2,
  },
  iconContainer: {
    width: sizeBlock.getWidthSize(25),
    height: sizeBlock.getWidthSize(25),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
  },
  textContainer: {
    width: '75%',
  },
});

export default Notification;
