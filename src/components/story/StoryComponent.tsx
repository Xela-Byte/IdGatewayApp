import {View, Text, StyleSheet, Image} from 'react-native';
import {
  appColors,
  borderRadius,
  fontSize,
  sizeBlock,
  universalStyle,
} from '../../styles/UniversalStyle';
import LadyEbony from '../../assets/images/lady-white.jpg';
import CustomText from '../text/CustomText';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  hasStories: boolean;
  isActive: boolean;
  username?: string;
  scale?: number;
};

const StoryComponent = ({hasStories, isActive, username, scale}: Props) => {
  return (
    <View style={styles.container}>
      {hasStories && (
        <LinearGradient
          colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0, 0.95]}
          style={[
            styles.imageContainer,
            scale
              ? {
                  width: sizeBlock.getWidthSize(90 * scale),
                  height: sizeBlock.getWidthSize(90 * scale),
                }
              : null,
          ]}>
          <Image
            source={LadyEbony}
            style={[
              styles.image,
              scale
                ? {
                    width: sizeBlock.getWidthSize(80 * scale),
                    height: sizeBlock.getWidthSize(80 * scale),
                  }
                : null,
            ]}
          />
          {isActive && (
            <LinearGradient
              colors={[
                appColors.onGradientPrimary,
                appColors.onGradientSecondary,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.95]}
              style={[
                styles.onlineDot,
                scale
                  ? {
                      width: sizeBlock.getWidthSize(20 * scale),
                      height: sizeBlock.getWidthSize(20 * scale),
                    }
                  : null,
              ]}
            />
          )}
        </LinearGradient>
      )}
      {!hasStories && (
        <Image
          source={LadyEbony}
          style={[
            styles.image,
            scale
              ? {
                  width: sizeBlock.getWidthSize(90 * scale),
                  height: sizeBlock.getWidthSize(90 * scale),
                }
              : null,
          ]}
        />
      )}
      {username && (
        <CustomText
          customStyle={{
            marginTop: !hasStories
              ? sizeBlock.getHeightSize(15)
              : sizeBlock.getHeightSize(5),
          }}
          fontType="medium"
          fontSize={fontSize.small - 2}>
          {username}
        </CustomText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizeBlock.getWidthSize(100),
    height: '100%',
    ...universalStyle.centering,
    flexDirection: 'column',
    marginLeft: 'auto',
  },
  imageContainer: {
    width: sizeBlock.getWidthSize(90),
    height: sizeBlock.getWidthSize(90),
    ...universalStyle.centering,
    borderRadius: borderRadius.full,
  },
  image: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getWidthSize(80),
    borderRadius: borderRadius.full,
    borderWidth: sizeBlock.getWidthSize(3),
    borderColor: appColors.white,
  },
  onlineDot: {
    width: sizeBlock.getWidthSize(20),
    height: sizeBlock.getWidthSize(20),
    borderRadius: borderRadius.full,
    position: 'absolute',
    right: 0,
    bottom: sizeBlock.getHeightSize(10),
  },
});

export default StoryComponent;
