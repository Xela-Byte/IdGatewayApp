import LinearGradient from 'react-native-linear-gradient';
import {
  appColors,
  screenHeight,
  screenWidth,
  sizeBlock,
} from '../../styles/UniversalStyle';
import {StatusBar} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const GradientBackground = ({children}: Props) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />

      <LinearGradient
        colors={[appColors.onGradientPrimary, appColors.onGradientSecondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.95]}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
          paddingHorizontal: sizeBlock.getHeightSize(20),
        }}>
        {children}
      </LinearGradient>
    </>
  );
};

export default GradientBackground;
