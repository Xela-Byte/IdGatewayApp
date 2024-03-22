import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const HeartFillIcon = (props: SvgProps) => (
  <Svg width={48} height={49} viewBox="0 0 48 49" fill="none" {...props}>
    <Rect
      x={0.5}
      y={0.502075}
      width={47}
      height={47.9958}
      rx={23.5}
      fill="#E1510F"
      fillOpacity={0.2}
    />
    <Path
      d="M34.5 21.3146C34.5 27.8771 24.7697 33.1889 24.3553 33.4083C24.2461 33.4671 24.124 33.4978 24 33.4978C23.876 33.4978 23.7539 33.4671 23.6447 33.4083C23.2303 33.1889 13.5 27.8771 13.5 21.3146C13.5017 19.7735 14.1147 18.2961 15.2044 17.2064C16.294 16.1168 17.7715 15.5038 19.3125 15.5021C21.2484 15.5021 22.9434 16.3346 24 17.7418C25.0566 16.3346 26.7516 15.5021 28.6875 15.5021C30.2285 15.5038 31.706 16.1168 32.7956 17.2064C33.8853 18.2961 34.4983 19.7735 34.5 21.3146Z"
      fill="url(#paint0_linear_149_2287)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_149_2287"
        x1={15.8211}
        y1={15.5021}
        x2={41.0873}
        y2={21.4218}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.121119} stopColor="#E1510F" />
        <Stop offset={1} stopColor="#AC2809" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HeartFillIcon;
