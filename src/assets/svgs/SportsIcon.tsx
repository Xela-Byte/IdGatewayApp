import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const SportsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_114_1588)">
      <Path
        d="M21.581 5.42175C25.2155 10.713 23.873 17.949 18.5814 21.5805C13.2902 25.2154 6.05415 23.8725 2.4189 18.5805C-1.21635 13.2893 0.127278 6.05325 5.4189 2.418C10.7102 -1.21612 17.9461 0.127127 21.5777 5.418"
        fill="#E6E7E8"
      />
      <Path
        d="M13.2355 15.9548L8.422 16.4906L5.55025 12.591L7.4935 8.15475L12.3077 7.61775L15.1791 11.5193L13.2355 15.9548ZM22.9788 8.7C22.6353 7.50045 22.101 6.36403 21.3962 5.33438C20.3809 3.85752 19.0356 2.63732 17.467 1.77038L15.9377 5.26388L18.8091 9.16463L22.9784 8.69963M6.93062 4.40063L8.42537 0.986626C6.14921 1.68535 4.14277 3.0667 2.67775 4.94363L6.89012 4.47488C6.90437 4.44938 6.91563 4.425 6.93062 4.40063ZM19.738 16.086L17.7955 20.5226L18.55 21.5471C18.5586 21.5396 18.5699 21.5359 18.58 21.5284C20.7171 20.0614 22.1973 18.0011 22.9761 15.7241L19.7361 16.0853M2.68075 14.8721L0.765625 15.0859C1.39038 17.4585 2.74487 19.5146 4.56137 21.0345L5.55175 18.7733L2.68075 14.8721Z"
        fill="#404041"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_114_1588">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SportsIcon;
