import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  default as CheckIcon,
  default as CloseIcon,
} from 'react-native-vector-icons/AntDesign';
import {TinderCard} from 'rn-tinder-card';
import {
  appColors,
  borderRadius,
  fontSize,
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import {photoCards} from '../../utils/data/PhotoCards';
import SwipeCard from './SwipeCard';
import CustomText from '../text/CustomText';
import {useState} from 'react';
import CarbonFaceIcon from '../../assets/svgs/CarbonFaceIcon';
import {universalStyle} from '../../styles/UniversalStyle';
import MatchedPopup from '../popup/MatchedPopup';

export default function SwipeComponent() {
  const [gestureCount, setGestureCount] = useState(0);

  const OverlayRight = () => {
    return (
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.95]}
        style={[
          styles.overlayLabelContainer,
          {
            left: '20%',
            top: '25%',
          },
        ]}>
        <CloseIcon
          name="close"
          color={appColors.white}
          size={fontSize.medium}
        />
      </LinearGradient>
    );
  };

  const OverlayLeft = () => {
    return (
      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.95]}
        style={[
          styles.overlayLabelContainer,
          {
            left: '50%',
            top: '25%',
          },
        ]}>
        <CheckIcon
          name="check"
          color={appColors.white}
          size={fontSize.medium}
        />
      </LinearGradient>
    );
  };

  const [showMatched, setShowMatched] = useState<boolean>(false);

  return (
    <>
      {gestureCount === photoCards.length && (
        <View
          style={{
            height: screenHeight,
            ...universalStyle.verticalCentering,
            flexDirection: 'column',
            paddingTop: '25%',
          }}>
          <CarbonFaceIcon width={200} height={200} />
          <CustomText
            color={appColors.onGradientPrimary}
            fontSize={fontSize.small}
            fontType="medium"
            customStyle={{textAlign: 'center'}}>
            You have completed your matches. Please check back later!
          </CustomText>
        </View>
      )}

      <View style={styles.wrapper}>
        {photoCards.map((item, index) => {
          return (
            <View
              style={styles.cardContainer}
              pointerEvents="box-none"
              key={index}>
              <TinderCard
                cardWidth={screenWidth}
                cardHeight={screenHeight}
                cardStyle={styles.card}
                OverlayLabelRight={OverlayRight}
                OverlayLabelLeft={OverlayLeft}
                disableBottomSwipe
                disableTopSwipe
                onSwipedRight={() => {
                  setGestureCount(prevCount => prevCount + 1);
                }}
                onSwipedTop={() => {
                  setGestureCount(prevCount => prevCount + 1);
                }}
                onSwipedLeft={() => {
                  setShowMatched(true);
                  setGestureCount(prevCount => prevCount + 1);
                }}>
                {showMatched && (
                  <MatchedPopup
                    setShowMatched={setShowMatched}
                    showMatched={showMatched}
                  />
                )}
                <SwipeCard age={item.age} name={item.name} photo={item.photo} />
              </TinderCard>
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 48,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
  },
  overlayLabelContainer: {
    width: sizeBlock.getWidthSize(80),
    height: sizeBlock.getWidthSize(80),
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  overlayLabelText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
