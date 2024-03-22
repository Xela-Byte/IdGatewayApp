import {View, Text, StyleSheet, Image} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CustomText from '../text/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import HeartArrowIcon from '../../assets/svgs/HeartArrowIcon';
import LadyEbony from '../../assets/images/lady-ebony.jpg';
import * as Animatable from 'react-native-animatable';

type Props = {
  showMatched: boolean;
  setShowMatched: (value: boolean) => void;
};

const MatchedPopup = ({setShowMatched, showMatched}: Props) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => {
        setShowMatched(!showMatched);
      }}>
      <Animatable.View style={styles.popupContainer} animation={'zoomIn'}>
        <View style={styles.matchedContainer}>
          <Image source={LadyEbony} style={styles.userImage} />
          <Image source={LadyEbony} style={styles.matchedImage} />
          <LinearGradient
            colors={[
              appColors.onGradientPrimary,
              appColors.onGradientSecondary,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 0.95]}
            style={styles.iconContainer}>
            <HeartArrowIcon />
          </LinearGradient>
        </View>
        <CustomText
          fontType="semiBold"
          fontSize={fontSize.small + 2}
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(30),
          }}>
          You liked Mariah
        </CustomText>

        <CustomText
          fontSize={fontSize.small - 2}
          color={appColors.grey}
          customStyle={{
            textAlign: 'center',
            marginTop: sizeBlock.getHeightSize(20),
          }}>
          Great - If they like you back, then it's a match!
        </CustomText>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.8,
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    paddingHorizontal: sizeBlock.getWidthSize(5),
  },
  popupContainer: {
    width: '100%',
    height: sizeBlock.getHeightSize(300),
    backgroundColor: appColors.white,
    borderRadius: borderRadius.medium,
    marginTop: '45%',
    ...universalStyle.centering,
    paddingHorizontal: sizeBlock.getWidthSize(50),
    flexDirection: 'column',
  },
  matchedContainer: {
    marginTop: sizeBlock.getHeightSize(15),
    flexDirection: 'row',
  },
  iconContainer: {
    width: sizeBlock.getWidthSize(50),
    height: sizeBlock.getWidthSize(50),
    borderRadius: borderRadius.full,
    ...universalStyle.centering,
    position: 'absolute',
    bottom: 0,
    left: '45%',
  },
  matchedImage: {
    width: sizeBlock.getWidthSize(120),
    height: sizeBlock.getWidthSize(120),
    borderRadius: borderRadius.medium,
    transform: [{rotate: '15deg'}],
  },
  userImage: {
    width: sizeBlock.getWidthSize(120),
    height: sizeBlock.getWidthSize(120),
    borderRadius: borderRadius.medium,
    transform: [{rotate: '-15deg'}],
  },
});

export default MatchedPopup;
