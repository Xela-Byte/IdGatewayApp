import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';

const EmojiNerdFaceIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint0_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint1_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint2_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint3_radial_168_1183)"
      fillOpacity={0.6}
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint4_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint5_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint6_radial_168_1183)"
    />
    <Path
      d="M11.9992 22.4985C18.9998 22.4985 22.4985 17.7975 22.4985 11.9985C22.4985 6.201 18.9998 1.5 11.9985 1.5C4.99875 1.5 1.5 6.201 1.5 11.9992C1.5 17.7975 4.998 22.4985 11.9992 22.4985Z"
      fill="url(#paint7_radial_168_1183)"
    />
    <Path
      d="M17.25 15C17.25 17.9025 14.9025 20.25 12 20.25C9.0975 20.25 6.75 17.9025 6.75 15H17.25Z"
      fill="url(#paint8_radial_168_1183)"
    />
    <Path
      d="M9.75 15H14.25V15.375C14.25 15.5739 14.171 15.7647 14.0303 15.9053C13.8897 16.046 13.6989 16.125 13.5 16.125H10.5C10.3011 16.125 10.1103 16.046 9.96967 15.9053C9.82902 15.7647 9.75 15.5739 9.75 15.375V15Z"
      fill="url(#paint9_linear_168_1183)"
    />
    <Path
      d="M7.125 13.5C8.02011 13.5 8.87855 13.1444 9.51149 12.5115C10.1444 11.8786 10.5 11.0201 10.5 10.125C10.5 9.22989 10.1444 8.37145 9.51149 7.73851C8.87855 7.10558 8.02011 6.75 7.125 6.75C6.22989 6.75 5.37145 7.10558 4.73851 7.73851C4.10558 8.37145 3.75 9.22989 3.75 10.125C3.75 11.0201 4.10558 11.8786 4.73851 12.5115C5.37145 13.1444 6.22989 13.5 7.125 13.5ZM16.875 13.5C17.7701 13.5 18.6285 13.1444 19.2615 12.5115C19.8944 11.8786 20.25 11.0201 20.25 10.125C20.25 9.22989 19.8944 8.37145 19.2615 7.73851C18.6285 7.10558 17.7701 6.75 16.875 6.75C15.9799 6.75 15.1215 7.10558 14.4885 7.73851C13.8556 8.37145 13.5 9.22989 13.5 10.125C13.5 11.0201 13.8556 11.8786 14.4885 12.5115C15.1215 13.1444 15.9799 13.5 16.875 13.5Z"
      fill="white"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.875 8.25C7.37772 8.25 6.90081 8.44754 6.54917 8.79917C6.19754 9.15081 6 9.62772 6 10.125C6 10.6223 6.19754 11.0992 6.54917 11.4508C6.90081 11.8025 7.37772 12 7.875 12C8.37228 12 8.84919 11.8025 9.20083 11.4508C9.55246 11.0992 9.75 10.6223 9.75 10.125C9.75 9.62772 9.55246 9.15081 9.20083 8.79917C8.84919 8.44754 8.37228 8.25 7.875 8.25ZM16.125 8.25C15.6277 8.25 15.1508 8.44754 14.7992 8.79917C14.4475 9.15081 14.25 9.62772 14.25 10.125C14.25 10.6223 14.4475 11.0992 14.7992 11.4508C15.1508 11.8025 15.6277 12 16.125 12C16.6223 12 17.0992 11.8025 17.4508 11.4508C17.8025 11.0992 18 10.6223 18 10.125C18 9.62772 17.8025 9.15081 17.4508 8.79917C17.0992 8.44754 16.6223 8.25 16.125 8.25Z"
      fill="#402A32"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.75 9.75C0.75 9.55109 0.829018 9.36032 0.96967 9.21967C1.11032 9.07902 1.30109 9 1.5 9H3.375V10.5H1.5C1.30109 10.5 1.11032 10.421 0.96967 10.2803C0.829018 10.1397 0.75 9.94891 0.75 9.75ZM22.4347 10.5H20.625V9H22.4347C22.8832 9 23.25 9.3375 23.25 9.75C23.25 10.1625 22.8825 10.5 22.4347 10.5ZM10.5 9H13.5V10.5H10.5V9Z"
      fill="url(#paint10_linear_168_1183)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.125 6.75C6.22989 6.75 5.37145 7.10558 4.73851 7.73851C4.10558 8.37145 3.75 9.22989 3.75 10.125C3.75 11.0201 4.10558 11.8786 4.73851 12.5115C5.37145 13.1444 6.22989 13.5 7.125 13.5C8.02011 13.5 8.87855 13.1444 9.51149 12.5115C10.1444 11.8786 10.5 11.0201 10.5 10.125C10.5 9.22989 10.1444 8.37145 9.51149 7.73851C8.87855 7.10558 8.02011 6.75 7.125 6.75ZM3 10.125C3 9.03098 3.4346 7.98177 4.20818 7.20818C4.98177 6.4346 6.03098 6 7.125 6C8.21902 6 9.26823 6.4346 10.0418 7.20818C10.8154 7.98177 11.25 9.03098 11.25 10.125C11.25 11.219 10.8154 12.2682 10.0418 13.0418C9.26823 13.8154 8.21902 14.25 7.125 14.25C6.03098 14.25 4.98177 13.8154 4.20818 13.0418C3.4346 12.2682 3 11.219 3 10.125Z"
      fill="url(#paint11_radial_168_1183)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.875 6.75525C15.9813 6.75525 15.1242 7.11028 14.4922 7.74223C13.8603 8.37418 13.5052 9.23129 13.5052 10.125C13.5052 11.0187 13.8603 11.8758 14.4922 12.5078C15.1242 13.1397 15.9813 13.4948 16.875 13.4948C17.7687 13.4948 18.6258 13.1397 19.2578 12.5078C19.8897 11.8758 20.2448 11.0187 20.2448 10.125C20.2448 9.23129 19.8897 8.37418 19.2578 7.74223C18.6258 7.11028 17.7687 6.75525 16.875 6.75525ZM12.75 10.125C12.75 9.03098 13.1846 7.98177 13.9582 7.20818C14.7318 6.4346 15.781 6 16.875 6C17.969 6 19.0182 6.4346 19.7918 7.20818C20.5654 7.98177 21 9.03098 21 10.125C21 11.219 20.5654 12.2682 19.7918 13.0418C19.0182 13.8154 17.969 14.25 16.875 14.25C15.781 14.25 14.7318 13.8154 13.9582 13.0418C13.1846 12.2682 12.75 11.219 12.75 10.125Z"
      fill="url(#paint12_radial_168_1183)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.125 6.75C6.22989 6.75 5.37145 7.10558 4.73851 7.73851C4.10558 8.37145 3.75 9.22989 3.75 10.125C3.75 11.0201 4.10558 11.8786 4.73851 12.5115C5.37145 13.1444 6.22989 13.5 7.125 13.5C8.02011 13.5 8.87855 13.1444 9.51149 12.5115C10.1444 11.8786 10.5 11.0201 10.5 10.125C10.5 9.22989 10.1444 8.37145 9.51149 7.73851C8.87855 7.10558 8.02011 6.75 7.125 6.75ZM3 10.125C3 9.03098 3.4346 7.98177 4.20818 7.20818C4.98177 6.4346 6.03098 6 7.125 6C8.21902 6 9.26823 6.4346 10.0418 7.20818C10.8154 7.98177 11.25 9.03098 11.25 10.125C11.25 11.219 10.8154 12.2682 10.0418 13.0418C9.26823 13.8154 8.21902 14.25 7.125 14.25C6.03098 14.25 4.98177 13.8154 4.20818 13.0418C3.4346 12.2682 3 11.219 3 10.125Z"
      fill="url(#paint13_radial_168_1183)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.875 6.75C15.9799 6.75 15.1215 7.10558 14.4885 7.73851C13.8556 8.37145 13.5 9.22989 13.5 10.125C13.5 11.0201 13.8556 11.8786 14.4885 12.5115C15.1215 13.1444 15.9799 13.5 16.875 13.5C17.7701 13.5 18.6286 13.1444 19.2615 12.5115C19.8944 11.8786 20.25 11.0201 20.25 10.125C20.25 9.22989 19.8944 8.37145 19.2615 7.73851C18.6286 7.10558 17.7701 6.75 16.875 6.75ZM12.75 10.125C12.75 9.03098 13.1846 7.98177 13.9582 7.20818C14.7318 6.4346 15.781 6 16.875 6C17.969 6 19.0182 6.4346 19.7918 7.20818C20.5654 7.98177 21 9.03098 21 10.125C21 11.219 20.5654 12.2682 19.7918 13.0418C19.0182 13.8154 17.969 14.25 16.875 14.25C15.781 14.25 14.7318 13.8154 13.9582 13.0418C13.1846 12.2682 12.75 11.219 12.75 10.125Z"
      fill="url(#paint14_radial_168_1183)"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.1251 6.74969) rotate(132.839) scale(28.1275)">
        <Stop stopColor="#FFF478" />
        <Stop offset={0.475} stopColor="#FFB02E" />
        <Stop offset={1} stopColor="#F70A8D" />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.1241 6.75048) rotate(131.878) scale(29.2115)">
        <Stop stopColor="#FFF478" />
        <Stop offset={0.475} stopColor="#FFB02E" />
        <Stop offset={1} stopColor="#F70A8D" />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.9995 9.37479) rotate(101.31) scale(13.3849 17.1436)">
        <Stop offset={0.788} stopColor="#F59639" stopOpacity={0} />
        <Stop offset={0.973} stopColor="#FF7DCE" />
      </RadialGradient>
      <RadialGradient
        id="paint3_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.5 10.5) rotate(135) scale(30.7591)">
        <Stop offset={0.315} stopOpacity={0} />
        <Stop offset={1} />
      </RadialGradient>
      <RadialGradient
        id="paint4_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 12.7506) rotate(77.692) scale(21.1102)">
        <Stop offset={0.508} stopColor="#7D6133" stopOpacity={0} />
        <Stop offset={1} stopColor="#715B32" />
      </RadialGradient>
      <RadialGradient
        id="paint5_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.375 12.375) rotate(55.713) scale(9.98512 7.23774)">
        <Stop stopColor="#FFB849" />
        <Stop offset={1} stopColor="#FFB847" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint6_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15.375 13.5) rotate(9.86582) scale(8.75445)">
        <Stop stopColor="#FFA64B" />
        <Stop offset={0.9} stopColor="#FFAE46" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="paint7_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.125 11.2502) rotate(43.971) scale(44.2897)">
        <Stop offset={0.185} stopOpacity={0} />
        <Stop offset={1} stopOpacity={0.4} />
      </RadialGradient>
      <RadialGradient
        id="paint8_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 21.417) rotate(-90) scale(7.16667 14.3333)">
        <Stop stopColor="#F70A8D" />
        <Stop offset={1} stopColor="#89029C" />
      </RadialGradient>
      <LinearGradient
        id="paint9_linear_168_1183"
        x1={12}
        y1={15}
        x2={12}
        y2={16.125}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CEA4F3" />
        <Stop offset={0.28} stopColor="#ECCDFF" />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_168_1183"
        x1={12}
        y1={9}
        x2={12}
        y2={10.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#5F5253" />
        <Stop offset={1} stopColor="#4D2C4F" />
      </LinearGradient>
      <RadialGradient
        id="paint11_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.74994 8.25079) rotate(131.186) scale(7.97257)">
        <Stop stopColor="#54424A" />
        <Stop offset={1} stopColor="#52394D" />
      </RadialGradient>
      <RadialGradient
        id="paint12_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.4997 8.25019) rotate(131.186) scale(7.97257)">
        <Stop stopColor="#54424A" />
        <Stop offset={1} stopColor="#52394D" />
      </RadialGradient>
      <RadialGradient
        id="paint13_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.5 10.125) rotate(170.538) scale(4.56207)">
        <Stop offset={0.899} stopColor="#3B2131" stopOpacity={0} />
        <Stop offset={1} stopColor="#422833" />
      </RadialGradient>
      <RadialGradient
        id="paint14_radial_168_1183"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.25 10.125) rotate(170.538) scale(4.56207)">
        <Stop offset={0.899} stopColor="#3B2131" stopOpacity={0} />
        <Stop offset={1} stopColor="#422833" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default EmojiNerdFaceIcon;
