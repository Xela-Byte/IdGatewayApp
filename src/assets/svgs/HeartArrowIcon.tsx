import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const HeartArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_139_1083)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.28088 23.781C4.17598 23.8862 4.04223 23.9578 3.89656 23.9869C3.7509 24.0159 3.59989 24.0011 3.46268 23.9442C3.32547 23.8873 3.20824 23.791 3.12585 23.6674C3.04345 23.5438 2.99961 23.3985 2.99988 23.25V21H0.749877C0.601346 21.0003 0.456081 20.9564 0.332497 20.874C0.208914 20.7916 0.112577 20.6744 0.0557009 20.5372C-0.00117538 20.4 -0.01603 20.249 0.0130201 20.1033C0.0420703 19.9577 0.113717 19.8239 0.218877 19.719L2.46888 17.469C2.53866 17.3994 2.62147 17.3442 2.71258 17.3067C2.80369 17.2691 2.90132 17.2498 2.99988 17.25H5.68938L10.3439 12.594C10.4847 12.4532 10.6757 12.3741 10.8749 12.3741C11.074 12.3741 11.265 12.4532 11.4059 12.594C11.5467 12.7348 11.6258 12.9258 11.6258 13.125C11.6258 13.3242 11.5467 13.5152 11.4059 13.656L6.74988 18.3105V21C6.75005 21.0986 6.7308 21.1962 6.69322 21.2873C6.65565 21.3784 6.60048 21.4612 6.53088 21.531L4.28088 23.781ZM23.9999 5.25C24.0001 5.39853 23.9563 5.5438 23.8739 5.66738C23.7915 5.79096 23.6743 5.8873 23.5371 5.94418C23.3999 6.00105 23.2489 6.01591 23.1032 5.98686C22.9575 5.95781 22.8238 5.88616 22.7189 5.781L20.9999 4.0605L19.4909 5.5695C19.8449 5.9415 20.1509 6.366 20.3909 6.837C21.2339 8.481 21.2684 10.6125 20.0714 12.975C18.8819 15.3195 16.4789 17.907 12.4139 20.595L11.9999 20.868L11.5859 20.595C10.5893 19.9401 9.62606 19.2357 8.69988 18.4845L12.4649 14.715C12.887 14.2929 13.1241 13.7204 13.1241 13.1235C13.1241 12.5266 12.887 11.9541 12.4649 11.532C12.0428 11.1099 11.4703 10.8728 10.8734 10.8728C10.2764 10.8728 9.70397 11.1099 9.28188 11.532L5.48538 15.33C4.88341 14.6028 4.36094 13.8133 3.92688 12.975C2.72988 10.611 2.76438 8.4795 3.60738 6.8355C5.13888 3.8475 9.26988 2.7135 11.9999 4.8495C13.8749 3.3795 16.4159 3.4575 18.3179 4.6215L19.9379 3L18.2204 1.281C18.1153 1.1762 18.0437 1.04258 18.0146 0.897054C17.9855 0.751531 18.0002 0.600648 18.0569 0.463499C18.1136 0.32635 18.2097 0.209103 18.3331 0.126596C18.4564 0.0440889 18.6015 3.15223e-05 18.7499 0L23.2499 0C23.4488 0 23.6396 0.0790176 23.7802 0.21967C23.9209 0.360322 23.9999 0.551088 23.9999 0.75V5.25Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_139_1083">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HeartArrowIcon;
