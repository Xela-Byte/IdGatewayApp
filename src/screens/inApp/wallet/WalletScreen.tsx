import {SafeAreaView, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {default as ArrowIcon} from 'react-native-vector-icons/Entypo';
import HelpIcon from 'react-native-vector-icons/Ionicons';
import CoinIcon from '../../../assets/svgs/CoinIcon';
import GiftBasketIcon from '../../../assets/svgs/GiftBasketIcon';
import GradientButton from '../../../components/button/GradientButton';
import CustomText from '../../../components/text/CustomText';
import {
  appColors,
  fontSize,
  screenHeight,
  sizeBlock,
} from '../../../styles/UniversalStyle';
import {walletStyle} from '../../../styles/WalletStyle';
import {WalletScreenProps} from '../../../types/navigation/WalletNavigationType';
import CoinGiftIcon from '../../../assets/svgs/CoinGiftIcon';
import WalletCoinIcon from '../../../assets/svgs/WalletCoinIcon';
import GameCoinIcon from '../../../assets/svgs/GameCoinIcon';
import GiftIcon from '../../../assets/svgs/GiftIcon';
import HelpPopup from '../../../components/wallet/HelpPopup';
import {useState} from 'react';

const WalletScreen = ({navigation}: WalletScreenProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <SafeAreaView style={walletStyle.container}>
        <View style={walletStyle.content}>
          <View style={walletStyle.header}>
            <ArrowIcon
              name={'chevron-left'}
              color={appColors.black}
              size={fontSize.medium}
              onPress={navigation.goBack}
            />
            <CustomText fontType="semiBold">Wallet</CustomText>
            <HelpIcon
              name={'help-circle-outline'}
              color={appColors.black}
              size={fontSize.medium}
              onPress={() => {
                setShowPopup(!showPopup);
              }}
            />
          </View>

          <ScrollView
            style={{
              height: screenHeight * 0.8,
            }}>
            <View style={walletStyle.walletBalance}>
              <View style={{flexDirection: 'row'}}>
                <WalletCoinIcon />
                <CustomText
                  customStyle={{marginLeft: sizeBlock.getWidthSize(10)}}
                  fontType="semiBold"
                  fontSize={fontSize.medium}>
                  3,023.65
                </CustomText>
              </View>

              <View style={walletStyle.walletBalanceText}>
                <CustomText fontSize={fontSize.small - 2}>
                  You're earning for dating!
                </CustomText>
              </View>
            </View>
            <View style={walletStyle.adContainer}>
              <LinearGradient
                colors={[appColors.lightGrey, appColors.gradientPrimary]}
                useAngle={true}
                angle={135}
                angleCenter={{x: 1, y: 0.7}}
                style={walletStyle.adContent}>
                <View style={walletStyle.adSubContent}>
                  <CustomText
                    customStyle={{marginBottom: sizeBlock.getHeightSize(5)}}
                    fontType="semiBold"
                    fontSize={fontSize.small - 4}>
                    Spend {'\n'}TGW Coins
                  </CustomText>
                  <GradientButton
                    title="Go to Shop"
                    onPress={() => {}}
                    textSize={fontSize.small - 6}
                    customViewStyle={{
                      width: sizeBlock.getWidthSize(80),
                      height: sizeBlock.getWidthSize(30),
                    }}
                  />
                </View>

                <CoinIcon
                  width={sizeBlock.getWidthSize(88 / 1.3)}
                  height={sizeBlock.getHeightSize(90 / 1.3)}
                />
              </LinearGradient>
              <LinearGradient
                colors={[appColors.lightGrey, appColors.gradientPrimary]}
                useAngle={true}
                angle={135}
                angleCenter={{x: 1, y: 0.5}}
                style={walletStyle.adContent}>
                <View style={walletStyle.adSubContent}>
                  <CustomText
                    customStyle={{marginBottom: sizeBlock.getHeightSize(5)}}
                    fontType="semiBold"
                    fontSize={fontSize.small - 4}>
                    Claim {'\n'}Bonuses
                  </CustomText>
                  <GradientButton
                    title="Earn More"
                    onPress={() => {}}
                    textSize={fontSize.small - 6}
                    customViewStyle={{
                      width: sizeBlock.getWidthSize(80),
                      height: sizeBlock.getWidthSize(30),
                    }}
                  />
                </View>

                <CoinGiftIcon
                  width={sizeBlock.getWidthSize(88 / 1.2)}
                  height={sizeBlock.getHeightSize(90 / 1.2)}
                />
              </LinearGradient>
            </View>

            <View style={walletStyle.streakContainer}>
              <View style={walletStyle.streakContent}>
                <LinearGradient
                  colors={[appColors.pink, appColors.white]}
                  useAngle={true}
                  angle={45}
                  angleCenter={{x: 0.4, y: 0.4}}
                  style={walletStyle.streakHeader}>
                  <CustomText
                    fontSize={fontSize.small - 3}
                    fontType="semiBold"
                    color={appColors.textPrimary}>
                    Log-in Streak: Day 4{' '}
                  </CustomText>
                </LinearGradient>
                <View style={walletStyle.streakCoinWrapper}>
                  {[0, 1, 2, 3, 4, 5, 6].map(item => {
                    return (
                      <View key={item} style={walletStyle.streakCoinContainer}>
                        <GameCoinIcon />
                        <CustomText fontSize={fontSize.small - 2}>
                          +{item * 5 + 15}
                        </CustomText>
                      </View>
                    );
                  })}
                </View>

                <View style={walletStyle.progressBarContainer}>
                  <LinearGradient
                    colors={[
                      appColors.onGradientPrimary,
                      appColors.onGradientSecondary,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    locations={[0, 0.95]}
                    style={walletStyle.progressBar}
                  />
                </View>

                <View style={walletStyle.dayCountWrapper}>
                  {[1, 2, 3, 4, 5, 6, 7].map(item => {
                    return (
                      <View key={item} style={walletStyle.dayCountContainer}>
                        <CustomText
                          fontType="semiBold"
                          color={appColors.grey}
                          fontSize={fontSize.small - 4}>
                          Day {item}
                        </CustomText>
                      </View>
                    );
                  })}
                </View>

                <View style={walletStyle.checkButton}>
                  <GradientButton
                    title="Check in"
                    onPress={() => {}}
                    textSize={fontSize.small - 4}
                    customViewStyle={{
                      width: sizeBlock.getWidthSize(100),
                      height: sizeBlock.getWidthSize(30),
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={walletStyle.referralContainer}>
              <View style={walletStyle.referralContent}>
                <CustomText fontType="semiBold">Get 200 TGW Coins</CustomText>
                <CustomText
                  customStyle={{
                    marginTop: sizeBlock.getHeightSize(5),
                  }}
                  fontSize={fontSize.small - 6}>
                  For each new user you invite on ID Gateway
                </CustomText>
                <GradientButton
                  title="Get started"
                  onPress={() => {}}
                  textSize={fontSize.small - 4}
                  customViewStyle={{
                    width: sizeBlock.getWidthSize(100),
                    height: sizeBlock.getWidthSize(30),
                    marginTop: sizeBlock.getHeightSize(5),
                  }}
                />
              </View>
              <GiftIcon />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      {showPopup && (
        <HelpPopup setShowPopup={setShowPopup} showPopup={showPopup} />
      )}
    </>
  );
};

export default WalletScreen;
